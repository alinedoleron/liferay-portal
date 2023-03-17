import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayModal, {useModal} from '@clayui/modal';
import {useEffect, useState} from 'react';

import {getCompanyId} from '../../liferay/constants';
import {Liferay} from '../../liferay/liferay';
import infoCircleIcon from '../../assets/icons/info-circle-icon.svg';
import {Input} from '../../components/Input/Input';
import {Section} from '../../components/Section/Section';
import {
	getAccountInfo,
	getAccounts,
	getChannels,
	getDeliveryProduct,
	getProduct,
	getProductSKU,
	getSKUCustomFieldExpandoValue,
	getUserAccount,
	getUserAccountsById,
	patchOrderByERC,
	postCartByChannelId,
	postCheckoutCart,
} from '../../utils/api';
import {TrialTimeline} from './TrialTimeline';

import './GetAppModal.scss';
import {RadioCard} from '../RadioCard/RadioCard';
import {PaymentMethodSelector} from './PaymentMethodSelector';

interface App {
	createdBy: string;
	id: number;
	name: {en_US: string} | string;
	price: number;
	urlImage: string;
}

interface GetAppModalProps {
	appId: number;
	account: {
		email: string;
		id?: number;
		image: string;
		name: string;
	};
	addresses: {
		title: string;
		description: string;
	}[];
	app: {
		createdBy: string;
		externalReferenceCode?: string;
		id: number;
		image: string;
		name: string;
		price: number;
		version: string;
		paymentMethods: string[];
	};
	channelId: number;
	handleClose: () => void;
	paid: boolean;
}


type PaymentMethod = 'trial' | 'pay' | 'order';

const paymentTypes = [
	{
		type: 'PayPal',
	},
];

export function GetAppModal({handleClose}: GetAppModalProps) {
	const {observer, onClose} = useModal({
		onClose: handleClose,
	});
	const [account, setAccount] = useState<AccountBrief>();
	const [accountPublisher, setAccountPublisher] = useState<AccountBrief>();
	const [app, setApp] = useState<App>({
		createdBy: '',
		id: 0,
		name: '',
		price: 0,
		urlImage: '',
	});
	const [appVersion, setAppVersion] = useState<string>();
	const [channel, setChannel] = useState<Channel>({
		currencyCode: '',
		externalReferenceCode: '',
		id: 0,
		name: '',
		siteGroupId: 0,
		type: '',
	});
	const [currentUser, setCurrentUser] = useState<{emailAddress: string}>();
	const [sku, setSku] = useState<SKU>({
		cost: 0,
		externalReferenceCode: '',
		id: 0,
		price: 0,
		sku: '',
		skuOptions: [],
	});

	useEffect(() => {
		const getModalInfo = async () => {
			const channels = await getChannels();

			const channel =
				channels.find(
					(channel) => channel.name === 'Marketplace Channel'
				) || channels[0];

			setChannel(channel);

			const app = await getDeliveryProduct({
				appId: Liferay.MarketplaceCustomerFlow.appId,
				channelId: channel.id,
			});

			setApp(app);

			const currentUser = await getUserAccount();

			setCurrentUser(currentUser);

			const userAccounts = await getUserAccountsById();

			let accountId;

			if (userAccounts.accountBriefs.length) {
				accountId = userAccounts.accountBriefs[0].id;
			}
			else {
				accountId = 50307;
			}

			const currentAccount = await getAccountInfo({
				accountId,
			});

			setAccount(currentAccount);

			const skuResponse = await getProductSKU({
				appProductId: Liferay.MarketplaceCustomerFlow.appId,
			});

			const sku = skuResponse.items[0];

			setSku(sku);

			const version = await getSKUCustomFieldExpandoValue({
				companyId: parseInt(getCompanyId()),
				customFieldName: 'version',
				skuId: sku.id,
			});

			setAppVersion(version);

			const adminProduct = await getProduct({
				appERC: app?.externalReferenceCode,
			});

			const catalogID = adminProduct?.catalogId;
			const accounts = await getAccounts();

			const accountPublisher = accounts?.items.find(
				({customFields}: AccountBrief) => {
					return customFields?.CatalogID == catalogID;
				}
			);

			setAccountPublisher(accountPublisher);
		};

		getModalInfo();
	}, []);

	const [selectedPaymentMethod, setSelectedPaymentMethod] =
		useState<PaymentMethod>('pay');

	const [selectedAddress, setSelectedAddress] = useState('');

	const [showNewAddressButton, setShowNewAddressButton] = useState(true);

	async function handleGetApp() {
		const newCart: Partial<Cart> = {
			accountId: account?.id || 50307,
			cartItems: [
				{
					price: {
						currency: channel.currencyCode,
						discount: 0,
						finalPrice: sku.price,
						price: sku.price,
					},
					productId: app?.id,
					quantity: 1,
					settings: {
						maxQuantity: 1,
					},
					skuId: sku.id as number,
				},
			],
			currencyCode: channel.currencyCode,
		};

		const cartResponse = await postCartByChannelId({
			cartBody: newCart,
			channelId: channel.id,
		});

		const cartCheckoutResponse = await postCheckoutCart({
			cartId: cartResponse.id,
		});

		const newOrderStatus = {
			orderStatus: 1,
		};

		await patchOrderByERC(cartCheckoutResponse.orderUUID, newOrderStatus);

		onClose();
	}

	const freeApp = Number(sku.price) === 0;

	return (
		<div className="modal-open">
			<ClayModal observer={observer}>
				<div className="get-app-modal-header-container">
					<div className="get-app-modal-header-left-content">
						<span className="get-app-modal-header-title">
							Confirm Install
						</span>

						<div className="get-app-modal-body-card-header-right-content-container">
							<div className="get-app-modal-body-card-header-right-content-account-info">
								<span className="get-app-modal-body-card-header-right-content-account-info-name">
									{account?.name}
								</span>

								<span className="get-app-modal-body-card-header-right-content-account-info-email">
									{currentUser?.emailAddress}
								</span>
							</div>

							<img
								alt="Account icon"
								className="get-app-modal-body-card-header-right-content-account-info-icon"
								src={account?.logoURL}
							/>
						</div>
					</div>

					<div className="get-app-modal-body-container">
						<div className="get-app-modal-body-content-container">
							<div className="get-app-modal-body-content-left">
								<img
									alt="App Image"
									className="get-app-modal-body-content-image"
									src={app?.urlImage.replace(':8080', '')}
								/>
								<span className="get-app-modal-header-description">
									Confirm installation of this free app.
								</span>
							</div>
						</div>
					</div>

					<ClayButton displayType="unstyled" onClick={onClose}>
						<ClayIcon symbol="times" />
					</ClayButton>
				</div>

				<ClayModal.Body>
					<div className="get-app-modal-body-card-container">
						<div className="get-app-modal-body-card-header">
							<span className="get-app-modal-body-card-header-left-content">
								App Details
							</span>

							<div className="get-app-modal-body-card-header-right-content-container">
								<div className="get-app-modal-body-card-header-right-content-account-info">
									<span className="get-app-modal-body-card-header-right-content-account-info-name">
										{account?.name}
									</span>

									<span className="get-app-modal-body-card-header-right-content-account-info-email">
										{currentUser?.email}
									</span>
								</div>

								<img
									alt="Account icon"
									className="get-app-modal-body-card-header-right-content-account-info-icon"
									src={account?.image}
								/>
							</div>
						</div>

						<div className="get-app-modal-body-container">
							<div className="get-app-modal-body-content-container">
								<div className="get-app-modal-body-content-left">
									<img
										alt="App Image"
										className="get-app-modal-body-content-image"
										src={app.image}
									/>

						<div className="get-app-modal-body-content-app-info-container">
									<span className="get-app-modal-body-content-app-info-name">
										{typeof app?.name === 'string'
											? app?.name
											: app?.name.en_US}
									</span>

									<span className="get-app-modal-body-content-app-info-version">
										{appVersion} by {accountPublisher?.name}
									</span>

									</div>
								</div>

								<div className="get-app-modal-body-content-right">
									<span className="get-app-modal-body-content-right-price">
										Price
									</span>

									<span className="get-app-modal-body-content-right-value">
										{freeApp ? 'Free' : `$ ${app.price}`}
									</span>

									{!freeApp && (
										<div className="get-app-modal-body-content-right-subscription-container">
											<span className="get-app-modal-body-content-right-subscription-text">
												Annually
											</span>
										</div>
									)}
								</div>
							</div>

							<div>
								<ClayIcon
									className="get-app-modal-body-content-alert-icon"
									symbol="info-panel-open"
								/>

								<span className="get-app-modal-body-content-right-value">
									{freeApp ? 'Free' : `$ ${sku.price}`}
									</span>
								<span className="get-app-modal-body-content-alert-message">
									{freeApp
										? ' A free app does not include support, maintenance or updates from the publisher.'
										: 'A subscription license includes support, maintenance and updates for the app as long as the subscription is current.'}
								</span>
							</div>
						</div>
					</div>

					{paid && (
						<>
							<div className="get-app-modal-text-divider">
								Select payment method
							</div>

							<div className="get-app-modal-payment-methods">
								<div className="get-app-modal-payment-methods-container">
									<PaymentMethodSelector
										selectedPaymentMethod={
											selectedPaymentMethod
										}
										setSelectedPaymentMethod={
											setSelectedPaymentMethod
										}
									/>
								</div>
							</div>

							{selectedPaymentMethod === 'trial' && (
								<TrialTimeline />
							)}

							{selectedPaymentMethod === 'pay' && (
								<Section
									className="get-app-modal-section"
									label="Payment Method"
								>
									{paymentTypes.map((paymentType) => {
										return (
											<RadioCard
												onChange={() => {}}
												selected={
													selectedPaymentMethod ===
													'pay'
												}
												small
												title={paymentType.type}
											/>
										);
									})}
								</Section>
							)}

							{selectedPaymentMethod === 'order' && (
								<>
									<Input
										label="Purchase order number"
										required
										value=""
									/>

									<Input
										label="Email Address"
										required
										value=""
									/>
								</>
							)}

							<Section
								className="get-app-modal-section"
								label="Billing Address"
							>
								<div className="get-app-modal-section-card-addresses">
									{addresses.map((address) => {
										return (
											<RadioCard
												description={
													address.description
												}
												onChange={() => {
													setSelectedAddress(
														address.title
													);
												}}
												selected={
													selectedAddress ===
													address.title
												}
												title={address.title}
											/>
										);
									})}
								</div>

								{showNewAddressButton ? (
									<>
										<button
											className="get-app-modal-body-card-new-address"
											onClick={() =>
												setShowNewAddressButton(false)
											}
										>
											<ClayIcon symbol="plus" />

											<span>New Address</span>
										</button>
									</>
								) : (
									<div className="get-app-modal-body-card-container">
										<div className="get-app-modal-body-card-header">
											<span className="get-app-modal-body-card-header-left-content">
												New Address
											</span>

											<button
												onClick={() =>
													setShowNewAddressButton(
														true
													)
												}
											>
												Cancel
											</button>
										</div>

										<div className="get-app-modal-body-container">
											<div className="get-app-modal-double-input">
												<Input
													label="First Name"
													required
													value=""
												/>

												<Input
													label="Last Name"
													required
													value=""
												/>
											</div>

											<Input
												label="Address"
												required
												value=""
											/>

											<Input required value="" />

											<div className="get-app-modal-double-input">
												<Input
													label="City"
													required
													value=""
												/>

												<Input
													label="State"
													required
													value=""
												/>
											</div>

											<div className="get-app-modal-double-input">
												<Input
													label="Zip/Area Code"
													required
													value=""
												/>

												<Input
													label="Country"
													required
													value=""
												/>
											</div>

											<Input
												label="Phone"
												required
												value=""
											/>
										</div>
									</div>
								)}
							</Section>

							<img
								alt="Account icon"
								className="get-app-modal-info-icon"
								src={infoCircleIcon}
							/>

							<span className="get-app-modal-use-terms">
								Terms, privacy, returns, or contact support. All
								costs are in US Dollars
							</span>
						</>
					)}
				</ClayModal.Body>

				<ClayModal.Footer
					last={
						<div className="get-app-modal-footer">
							<ClayButton.Group spaced>
								<button
									className="get-app-modal-button-cancel"
									onClick={onClose}
								>
									Cancel
								</button>

								<button
									className="get-app-modal-button-get-this-app"
									onClick={handleGetApp}
								>
									{selectedPaymentMethod === 'pay'
										? `Pay $${app.price} Now`
										: selectedPaymentMethod === 'trial'
										? 'Start Free Trial'
										: 'Request Purchase Order'}
								</button>
							</ClayButton.Group>

							<span>
								You will be redirected to PayPal to complete
								payment
							</span>
						</div>
					}
				/>
			</ClayModal>
		</div>
	);
}
