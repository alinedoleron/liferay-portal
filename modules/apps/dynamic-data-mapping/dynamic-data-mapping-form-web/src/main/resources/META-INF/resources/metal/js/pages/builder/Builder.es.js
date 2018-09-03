import {Config} from 'metal-state';
import Component from 'metal-jsx';
import FormRenderer from '../../components/Form/index.es';
import Sidebar from '../../components/Sidebar/index.es';
import ClayModal from 'clay-modal';
import autobind from 'autobind-decorator';

/**
 * Builder.
 * @extends Component
 */

class Builder extends Component {
	static STATE = {
		/**
		 * @default []
		 * @instance
		 * @memberof FormRenderer
		 * @type {?array<object>}
		 */

		indexes: Config.object(),
	}

	/**
	 * Continues the propagation of event.
	 * @param {!Object} indexAllocateField
	 * @private
	 */

	_handleFieldClicked(indexAllocateField) {
		this._handleSidebarOpened(
			{
				mode: 'edit'
			}
		);
		this.emit('fieldClicked', indexAllocateField);
	}

	_handlePageAdded(pages) {
		this._handleSidebarOpened(
			{
				mode: 'add'
			}
		);
		this.emit('pagesUpdated', pages);
	}

	/**
	 * Continues the propagation of event.
	 * @param {!Event} event
	 * @private
	 */

	_handleFieldAdd(event) {
		this.emit('fieldAdded', event);
	}

	/**
	 * Continues the propagation of data.
	 * @param {!Object} data
	 * @private
	 */

	_handleFieldEdited(data) {
		this.emit('fieldEdited', data);
	}

	/**
	 * Continues the propagation of event.
	 * @param {!Object} data
	 * @private
	 */

	_handleFieldMoved(data) {
		this.emit('fieldMoved', data);
	}

	/**
	 * Continues the propagation of event.
	 * @param {!Object} indexes
	 * @private
	 */

	_handleDeleteFieldClicked(indexes) {
		this.setState({
			indexes
		});
		this._handleModal();
	}

	/**
	 * @param {!Event} event
	 * @private
	 */

	_handleModal() {
		const {modal} = this.refs;

		modal.show();
	}

	/**
	 * Continues the propagation of event.
	 * @param {!Object}
	 * @private
	 */

	_handleDuplicateButtonClicked(indexes) {
		this.emit(
			'duplicateField',
			indexes
		);
	}

	/**
	 * Continues the propagation of event.
	 * @param {String} mode
	 * @private
	 */

	_handleSidebarOpened({mode}) {
		const Sidebar = this.refs.sidebar;

		Sidebar._setMode(mode);
		Sidebar.show();
	}

	_handleActivePageUpdated({mode}) {
		const Sidebar = this.refs.sidebar;

		Sidebar._dragAndDrop.disposeInternal();
		Sidebar._startDrag();

		if (mode) {
			this._handleSidebarOpened({mode});
		}
	}
	
	@autobind
	_handleModalButtonClicked(event) {
		event.stopPropagation();

		const {modal} = this.refs;
		const {indexes} = this.state;

		modal.emit('hide');

		if (!event.target.classList.contains('close-modal')) {
			this.emit(
				'deleteField',
				{...indexes}
			);
		}
	}

	/**
	 * Continues the propagation of event.
	 * @param {Array} pages
	 * @private
	 */

	_handlePagesUpdated(pages) {
		this.emit('pagesUpdated', pages);
	}

	attached() {
		const translationManager = document.querySelector('.ddm-translation-manager');

		const formBasicInfo = document.querySelector('.ddm-form-basic-info');

		if (translationManager && formBasicInfo) {
			formBasicInfo.classList.remove('hide');
			translationManager.classList.remove('hide');
		}
	}

	/**
	 * @inheritDoc
	 */

	render() {
		const {_handleModalButtonClicked, props} = this;
		const {
			fieldContext,
			fieldsList,
			focusedField,
			mode,
			pages,
			spritemap
		} = props;
		
		const FormRendererEvents = {
			activePageUpdated: this._handleActivePageUpdated.bind(this),
			deleteFieldClicked: this._handleDeleteFieldClicked.bind(this),
			duplicateButtonClicked: this._handleDuplicateButtonClicked.bind(this),
			fieldClicked: this._handleFieldClicked.bind(this),
			fieldMoved: this._handleFieldMoved.bind(this),
			pageAdded: this._handlePageAdded.bind(this),
			pagesUpdated: this._handlePagesUpdated.bind(this),
			sidebarOpened: this._handleSidebarOpened.bind(this)
		};

		const sidebarEvents = {
			fieldAdded: this._handleFieldAdd.bind(this),
			fieldEdited: this._handleFieldEdited.bind(this)
		};

		return (
			<div>
				<div class="container">
					<div class="sheet">
						<FormRenderer
							editable={true}
							events={FormRendererEvents}
							pages={pages}
							ref="FormRenderer"
							spritemap={spritemap}
						/>

						<ClayModal
							body={Liferay.Language.get('are-you-sure-you-want-to-delete-this-field')}
							events={{
								clickButton: _handleModalButtonClicked
							}}
							footerButtons={[
								{
									alignment: 'right',
									label: Liferay.Language.get('dismiss'),
									style: 'primary',
									type: 'close'
								},
								{
									alignment: 'right',
									label: Liferay.Language.get('delete'),
									style: 'primary',
									type: 'button'
								}
							]}
							ref="modal"
							spritemap={spritemap}
							size="sm"
							title={Liferay.Language.get('delete-field-dialog-title')}
						/>
					</div>
				</div>
				<Sidebar
					events={sidebarEvents}
					fieldContext={fieldContext}
					fieldLists={fieldsList}
					focusedField={focusedField}
					mode={mode}
					pages={pages}
					ref="sidebar"
					spritemap={spritemap}
				/>
			</div>
		);
	}
}

export default Builder;
export {Builder};