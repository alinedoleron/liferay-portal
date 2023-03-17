import {CardButton} from '../CardButton/CardButton';

type PaymentMethod = 'trial' | 'pay' | 'order';

export function PaymentMethodSelector({
	enableTrial,
	selectedPaymentMethod,
	setSelectedPaymentMethod,
}: {
	enableTrial: string;
	selectedPaymentMethod: string;
	setSelectedPaymentMethod: (value: PaymentMethodSelector) => void;
}) {
	return (
		<>
			{['trial', 'pay', 'order'].map((method) => {
				let description;
				let title;
				let disabled = false;
				if (method === 'trial') {
					description = 'Try now. Pay later.';
					disabled = enableTrial === 'no';
					title = '30-day Trial';
				}
				else if (method === 'pay') {
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
						disabled={disabled}
						icon=""
						onClick={() => {
							if (!disabled) {
								setSelectedPaymentMethod(
									method as PaymentMethod
								);
							}
						}}
						selected={method === selectedPaymentMethod}
						title={title}
					/>
				);
			})}
		</>
	);
}
