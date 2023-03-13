import ClayIcon from '@clayui/icon';
import arrowLeft from "../../assets/icons/guide-icon.svg";
import "./CardButton.scss";

export function CardButton({description, icon, title}: {description: string, icon: string, title: string}) {
    return (
        <div className="get-app-modal-payment-method-container">
          <div
            className="get-app-modal-payment-method-container-button"
          >
             <img
                  alt='trial'
                  className="get-app-modal-payment-method-container-button-icon"
                  src={arrowLeft}
              />
            <div className="get-app-modal-payment-method-container-button-info">
           
              <div className="get-app-modal-payment-method-container-button-title">
                <div
                  className="get-app-modal-payment-method-container-button-text"
                >
                  {title}
                </div>
                <div
                  className="get-app-modal-payment-method-container-button-description"
                >
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}