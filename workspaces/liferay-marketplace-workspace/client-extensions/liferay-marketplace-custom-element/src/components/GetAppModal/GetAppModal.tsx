import ClayModal, { useModal } from "@clayui/modal";
import ClayButton from "@clayui/button";

import {Input} from '../../components/Input/Input';
import classNames from "classnames";
import infoCircleIcon from "../../assets/icons/info-circle-icon.svg";

import radioChecked from "../../assets/icons/radio-button-checked.svg";
import radioUnchecked from "../../assets/icons/radio-button-unchecked.svg";
import { CardButton } from "../../components/CardButton/CardButton";

import "./GetAppModal.scss";
import {Section} from '../../components/Section/Section';
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
  };
  paid: boolean;
}

export function GetAppModal({ account, app, paid }: GetAppModalProps) {
  const { observer, onOpenChange } = useModal();
  return (
    /** remove this line with the class open */ 
    <div className="modal-open">
      <ClayModal observer={observer}>
        <ClayModal.Header>
          <div className="get-app-modal-header-container">
            <span className="get-app-modal-header-title">Confirm Install</span>
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
                  className="get-app-modal-body-card-header-right-content-account-info-icon"
                  src={account.image}
                  alt="Account icon"
                />
              </div>
            </div>

            <div className="get-app-modal-body-container">
              <div className="get-app-modal-body-content-container">
                <div className="get-app-modal-body-content-left">
                  <img
                    className="get-app-modal-body-content-image"
                    src={app.image}
                    alt="App Image"
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
                    {app.price ?? "Free"}
                  </span>
                </div>
              </div>

              <div>
                <img
                  className="get-app-modal-body-content-alert-icon"
                  src={infoCircleIcon}
                  alt="Info circle"
                />
                <span className="get-app-modal-body-content-alert-message">
                  A free app does not include support, maintenance or updates from
                  the publisher.
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
              <CardButton description={'Try now. Pay later.'} icon={''} title={'30-day Trial'} />
              <CardButton description={'Pay directly'} icon={''} title={'Credit Card'} />
              <CardButton description={'Request a PO'} icon={''} title={'Purchase Order'} />
              </div>
      
              <Section
                  label="Billing Address"
                >
                  <div className="get-app-modal-double-input">
                    <Input
                      label="First Name"
                      required
                      value={''}
                    />
                    <Input
                      label="Last Name"
                      required
                      value={''}
                    />
                  </div>
                  <Input
                      label="Address"
                      required
                      value={''}
                    />
                    <Input
                      required
                      value={''}
                    />
                    <div className="get-app-modal-double-input">
                    <Input
                      label="City"
                      required
                      value={''}
                    />
                    <Input
                      label="State"
                      required
                      value={''}
                    />
                  </div>
                  <div className="get-app-modal-double-input">
                    <Input
                      label="Zip/Area Code"
                      required
                      value={''}
                    />
                    <Input
                      label="Country"
                      required
                      value={''}
                    />
                  </div>
                  <Input
                      label="Phone"
                      required
                      value={''}
                    />
                </Section>
                {/* <div className="info"> */}
                <p>
                <img
                  className="get-app-modal-info-icon"
                  src={infoCircleIcon}
                  alt="Account icon"
                />
                <span className="get-app-modal-use-terms">
                  Terms, privacy, returns, or contact support. All costs are in US Dollars
                  </span>
                {/* </div> */}
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
                Get this App
              </button>
            </ClayButton.Group>
          }
        />
      </ClayModal>
    </div>
  );
}
