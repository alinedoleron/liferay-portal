import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import {MouseEvent} from 'react';

import arrowLeft from '../../assets/icons/guide-icon.svg';

import './CardButton.scss';

export function CardButton({
	description,
	icon,
	onClick,
	selected,
	title,
}: {
	description: string;
	icon: string;
	onClick: (event: MouseEvent) => void;
	title: string;
	selected: boolean;
}) {
	return (
		<div
			className={classNames('get-app-modal-payment-method-container', {
				'get-app-modal-payment-method-container--selected': selected,
			})}
			onClick={onClick}
		>
			<div className="get-app-modal-payment-method-container-button">
				<img
					alt="trial"
					className="get-app-modal-payment-method-container-button-icon"
					src={arrowLeft}
				/>

				<div className="get-app-modal-payment-method-container-button-info">
					<div className="get-app-modal-payment-method-container-button-title">
						<div className="get-app-modal-payment-method-container-button-text">
							{title}
						</div>

						<div className="get-app-modal-payment-method-container-button-description">
							{description}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
