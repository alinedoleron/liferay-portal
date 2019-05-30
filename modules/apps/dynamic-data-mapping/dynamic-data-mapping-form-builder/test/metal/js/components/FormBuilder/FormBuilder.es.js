import {FormBuilderBase} from 'source/components/FormBuilder/FormBuilder.es';
import dom from 'metal-dom';
import Pages from 'mock/mockPages.es';
import {JSXComponent} from 'metal-jsx';
import SucessPageSettings from 'mock/mockSuccessPage.es';

const spritemap = 'icons.svg';

let addButton;
let basicInfo;
let component;
let pages;
let translationManager;
let successPageSettings;

const mockFieldType = {
	description: 'Single line or multiline text area.',
	icon: 'text',
	initialConfig_: {
		locale: 'en_US'
	},
	label: 'Text Field',
	name: 'text',
	settingsContext: {
		pages: [
			{
				rows: [
					{
						columns: [
							{
								fields: [
									{
										fieldName: 'label',
										localizable: true
									},
									{
										fieldName: 'name'
									},
									{
										fieldName: 'required'
									},
									{
										fieldName: 'type'
									}
								]
							}
						]
					}
				]
			}
		]
	},
	type: 'text'
};

const fieldTypes = [
	{
		description: 'Select date from a Datepicker.',
		icon: 'calendar',
		label: 'Date',
		name: 'date',
		settingsContext: {
			pages: []
		}
	},
	mockFieldType,
	{
		description: 'Select only one item with a radio button.',
		icon: 'radio-button',
		label: 'Single Selection',
		name: 'radio',
		settingsContext: {
			pages: []
		}
	},
	{
		description: 'Choose one or more options from a list.',
		icon: 'list',
		label: 'Select from list',
		name: 'select',
		settingsContext: {
			pages: []
		}
	},
	{
		description: 'Select options from a matrix.',
		icon: 'grid',
		label: 'Grid',
		name: 'grid',
		settingsContext: {
			pages: []
		}
	},
	{
		description: 'Select multiple options using a checkbox.',
		icon: 'select-from-list',
		label: 'Multiple Selection',
		name: 'checkbox',
		settingsContext: {
			pages: []
		}
	}
];

const defaultStoreBuilder = {
	props: {
	}
}

const getFormBuilder = (
	{
		fieldTypes,
		namespace,
		pages,
		paginationMode,
		rules,
		spritemap,
		successPageSettings
	},
	dispatch = () => {},
	store = defaultStoreBuilder
	) => {
	return class Parent extends JSXComponent {
		render() {
			return (
				<FormBuilderBase
					fieldTypes={fieldTypes}
					namespace={namespace}
					pages={pages}
					paginationMode={paginationMode}
					ref="fbuilder"
					rules={rules}
					spritemap={spritemap}
					successPageSettings={successPageSettings}
				/>
			);
		}

		getChildContext() {
			return {
				store: this,
				dispatch
			}
		}
	}
}

describe(
	'Builder',
	() => {
		beforeEach(
			() => {
				pages = JSON.parse(JSON.stringify(Pages));
				successPageSettings = JSON.parse(JSON.stringify(SucessPageSettings));

				jest.useFakeTimers();

				dom.enterDocument('<button id="addFieldButton"></button>');
				dom.enterDocument('<div class="ddm-translation-manager"></div>');
				dom.enterDocument('<div class="ddm-form-basic-info"></div>');
				dom.enterDocument('<div id="clay_dropdown_portal"></div>');

				addButton = document.querySelector('#addFieldButton');
				basicInfo = document.querySelector('.ddm-form-basic-info');
				translationManager = document.querySelector('.ddm-translation-manager');

				let spy = jest.fn();

				const FormBuilder = new getFormBuilder(
					{
						fieldTypes,
						namespace: '_namespace_',
						pages,
						paginationMode: 'wizard',
						rules: [],
						spritemap,
						successPageSettings
					},
					spy
				);

				component = new FormBuilder();
			}
		);

		afterEach(
			() => {
				dom.exitDocument(addButton);
				dom.exitDocument(basicInfo);
				dom.exitDocument(translationManager);

				if (component) {
					component.dispose();
				}

				jest.clearAllTimers();
			}
		);

		it(
			'should render the default markup',
			() => {
				expect(component).toMatchSnapshot();
			}
		);

		it(
			'should open the sidebar when attached and there are no fields on the active page',
			() => {
				const FormBuilder = getFormBuilder(
					{
						fieldTypes,
						namespace: '_namespace_',
						pages: [{rows: [{columns: [{fields: []}]}]}],
						paginationMode: 'wizard',
						rules: [],
						spritemap,
						successPageSettings
					}
				);

				component = new FormBuilder();

				jest.runAllTimers();

				let sidebarOpened = component.refs.fbuilder.refs.sidebar.state.open;

                expect(sidebarOpened).toBe(true);
			}
		);

		it(
			'should open the sidebar when a field is clicked',
			() => {
				const FormBuilder = getFormBuilder(
					{
						fieldTypes,
						namespace: '_namespace_',
						pages,
						paginationMode: 'wizard',
						rules: [],
						spritemap,
						successPageSettings
					}
				);

				component = new FormBuilder();

				let event = {
					columnIndex: 0,
					pageIndex: 0,
					rowIndex: 0
				};

				let formRenderer = component.refs.fbuilder.refs.FormRenderer;

				formRenderer._handleFieldClicked(event);

				jest.runAllTimers();

				let sidebarOpened = component.refs.fbuilder.refs.sidebar.state.open;

				expect(sidebarOpened).toBe(true);
			}
		);
	}
);