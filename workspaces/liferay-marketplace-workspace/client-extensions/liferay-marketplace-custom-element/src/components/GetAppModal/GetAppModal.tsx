import ClayModal, { useModal } from '@clayui/modal';
import ClayButton from '@clayui/button';

import personFill from '../../assets/icons/person-fill.svg';
import appImageTest from '../../assets/icons/app-image-test.svg';
import infoCircleIcon from '../../assets/icons/info-circle-icon.svg';

import './GetAppModal.scss';

interface GetAppModalProps {
    account: {
        name: string
        email: string;
        image: string;
    }
    app: {
        name: string;
        version: string;
        price: string;
        image: string;
        createdBy: string;
    }
}

export function GetAppModal({account, app}: GetAppModalProps) {
    const { observer, onOpenChange } = useModal();
    return (
        <ClayModal
            observer={observer}
        >
            <ClayModal.Header>
                <div className='get-app-modal-header-container'>
                    <span className='get-app-modal-header-title'>
                        Confirm Install
                    </span>
                    <span className='get-app-modal-header-description'>
                        Confirm installation of this free app
                    </span>
                </div>
            </ClayModal.Header>

            <ClayModal.Body>
                <div className='get-app-modal-body-card-container'>
                    <div className='get-app-modal-body-card-header'>
                        <span className='get-app-modal-body-card-header-left-content'>
                            App Details
                        </span>
                        <div className='get-app-modal-body-card-header-right-content-container'>
                            <div className='get-app-modal-body-card-header-right-content-account-info'>
                                <span className='get-app-modal-body-card-header-right-content-account-info-name'>
                                    {account.name}
                                </span>
                                <span className='get-app-modal-body-card-header-right-content-account-info-email'>
                                    {account.email}
                                </span>
                            </div>
                            <img
                                className='get-app-modal-body-card-header-right-content-account-info-icon'
                                src={account.image}
                                alt="Account icon" 
                            />
                        </div>
                    </div>

                    <div className='get-app-modal-body-container'>
                        <div className='get-app-modal-body-content-container'>
                            <div className='get-app-modal-body-content-left'>
                                <img 
                                    className='get-app-modal-body-content-image'
                                    src={app.image} 
                                    alt="App Image" 
                                />
                                <div className='get-app-modal-body-content-app-info-container'>
                                    <span
                                        className='get-app-modal-body-content-app-info-name'
                                    >
                                        {app.image}
                                    </span>
                                    <span className='get-app-modal-body-content-app-info-version'>
                                        {app.version} by {app.createdBy}.
                                    </span>
                                </div>
                            </div>

                            <div className='get-app-modal-body-content-right'>
                                <span className='get-app-modal-body-content-right-price'>
                                        Price
                                    </span>
                                <span className='get-app-modal-body-content-right-value'>
                                    {app.price ?? "Free"}
                                </span>
                            </div>
                        </div>

                        <div>
                            <img 
                                className='get-app-modal-body-content-alert-icon'
                                src={infoCircleIcon} 
                                alt="Info circle" 
                            />
                            <span className='get-app-modal-body-content-alert-message'>
                                A free app does not include support, maintenance or updates from the publisher.
                            </span>
                        </div>
                    </div>
                </div>
            </ClayModal.Body>


            <ClayModal.Footer
            last={
              <ClayButton.Group spaced>
                <button
                    className='get-app-modal-button-cancel'
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </button>
                <button
                    className='get-app-modal-button-get-this-app'
                >
                  Get this App
                </button>
              </ClayButton.Group>
            }
          />
        </ClayModal>
    );
}