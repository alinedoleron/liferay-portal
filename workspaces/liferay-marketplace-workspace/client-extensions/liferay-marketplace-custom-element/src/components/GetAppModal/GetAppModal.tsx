import ClayButton from '@clayui/button';
import ClayModal, {useModal} from '@clayui/modal';

import infoCircleIcon from '../../assets/icons/info-circle-icon.svg';

import {CardButton} from '../../components/CardButton/CardButton';
import {Input} from '../../components/Input/Input';

import './GetAppModal.scss';

import {useEffect, useState} from 'react';

import {Section} from '../../components/Section/Section';
import {TrialTimeline} from './TrialTimeline';
interface GetAppModalProps {
	account: {
		name: string;
		email: string;
		image: string;
	};
	app: {
		name: string;
		version: string;
		price: string;
		image: string;
		createdBy: string;
		paymentMethods: string[];
	};
	paid: boolean;
}

type PaymentMethod = 'trial' | 'card' | 'order';

export function GetAppModal({account, app, paid}: GetAppModalProps) {
	const {observer, onOpenChange} = useModal();
	const [selectedPaymentMethod, setSelectedPaymentMethod] =
		useState<PaymentMethod>('trial');

	return (

		/** remove this line with the class open */
		<div className="modal-open">
			<ClayModal observer={observer}>
				<ClayModal.Header>
					<div className="get-app-modal-header-container">
						<span className="get-app-modal-header-title">
							Confirm Install
						</span>

						<span className="get-app-modal-header-description">
							Confirm installation of this free app
						</span>
					</div>
				</ClayModal.Header>

				<ClayModal.Body>
					<div className="get-app-modal-body-card-container">
						<div className="get-app-modal-body-card-header">
							<span className="get-app-modal-body-card-header-left-content">
								App Details
							</span>

							<div className="get-app-modal-body-card-header-right-content-container">
								<div className="get-app-modal-body-card-header-right-content-account-info">
									<span className="get-app-modal-body-card-header-right-content-account-info-name">
										{account.name}
									</span>

									<span className="get-app-modal-body-card-header-right-content-account-info-email">
										{account.email}
									</span>
								</div>

								<img
									alt="Account icon"
									className="get-app-modal-body-card-header-right-content-account-info-icon"
									src={account.image}
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
											{app.name}
										</span>

										<span className="get-app-modal-body-content-app-info-version">
											{app.version} by {app.createdBy}.
										</span>
									</div>
								</div>

								<div className="get-app-modal-body-content-right">
									<span className="get-app-modal-body-content-right-price">
										Price
									</span>

									<span className="get-app-modal-body-content-right-value">
										{app.price ?? 'Free'}
									</span>
								</div>
							</div>

							<div>
								<img
									alt="Info circle"
									className="get-app-modal-body-content-alert-icon"
									src={infoCircleIcon}
								/>

								<span className="get-app-modal-body-content-alert-message">
									A free app does not include support,
									maintenance or updates from the publisher.
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
								{app.paymentMethods.map((method) => {
									let description;
									let title;
									if (method === 'trial') {
										description = 'Try now. Pay later.';
										title = '30-day Trial';
									}
									else if (method === 'card') {
										description = 'Pay today';
										title = 'Pay Now';
									}
									else {
										description = 'Request a PO';
										title = 'Purchase Order';
									}

									return (
										<CardButton
											description={description}
											icon=""
											onClick={() =>
												setSelectedPaymentMethod(
													method as PaymentMethod
												)
											}
											selected={
												method === selectedPaymentMethod
											}
											title={title}
										/>
									);
								})}
							</div>

							{selectedPaymentMethod === 'trial' && (
								<TrialTimeline />
							)}

							<Section label="Billing Address">
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

								<Input label="Address" required value="" />

								<Input required value="" />

								<div className="get-app-modal-double-input">
									<Input label="City" required value="" />

									<Input label="State" required value="" />
								</div>

								<div className="get-app-modal-double-input">
									<Input
										label="Zip/Area Code"
										required
										value=""
									/>

									<Input label="Country" required value="" />
								</div>

								<Input label="Phone" required value="" />
							</Section>
							<p>
								<img
									alt="Account icon"
									className="get-app-modal-info-icon"
									src={infoCircleIcon}
								/>

								<span className="get-app-modal-use-terms">
									Terms, privacy, returns, or contact support.
									All costs are in US Dollars
								</span>
							</p>
						</>
					)}
				</ClayModal.Body>

				<ClayModal.Footer
					last={
						<ClayButton.Group spaced>
							<button
								className="get-app-modal-button-cancel"
								onClick={() => onOpenChange(false)}
							>
								Cancel
							</button>

							<button className="get-app-modal-button-get-this-app">
								{selectedPaymentMethod === 'trial' ? 'Start Free Trial' : (selectedPaymentMethod === 'card' ? `Pay $${app.price} Now` : 'Request Purchase Order')}							</button>
						</ClayButton.Group>
					}
				/>
			</ClayModal>
		</div>
	);
}
