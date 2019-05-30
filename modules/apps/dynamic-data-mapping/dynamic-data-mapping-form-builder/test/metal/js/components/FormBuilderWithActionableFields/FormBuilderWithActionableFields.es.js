import {FormBuilderBase} from 'source/components/FormBuilder/FormBuilder.es';
import withActionableFields from 'source/components/FormBuilder/withActionableFields.es';
import dom from 'metal-dom';
import Pages from 'mock/mockPages.es';
import {JSXComponent} from 'metal-jsx';
const spritemap = 'icons.svg';

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

const FBWithActionableFields = withActionableFields(FormBuilderBase);

const defaultStore = {
    emit: jest.fn(),
    on: () => {}
};

const getFormBuilderWithActionableFields = (
    {
        fieldTypes,
        pages,
        paginationMode,
        rules,
        spritemap
    },
    store = defaultStore
) => {
    return class Parent extends JSXComponent {
        render() {
            return (
                <FBWithActionableFields
                    fieldTypes = {fieldTypes}
                    pages = {pages}
                    paginationMode = {paginationMode}
                    rules = {rules}
                    ref = 'actions'
                    spritemap = {spritemap}
                />
            );
        }

        getChildContext() {
            return {
                store,
                dispatch: store.emit
            }
        }
    }
}

describe(
    'FormBuilderWithActionableFields',
    () => {
        it(
            'should render actions',
            () => {
                jest.useFakeTimers();
                dom.enterDocument('<button id="addFieldButton"></button>');
				dom.enterDocument('<div class="ddm-translation-manager"></div>');

                let pages = JSON.parse(JSON.stringify(Pages));
                const FormBuilderWithActionableFields = getFormBuilderWithActionableFields(
                    {
                        fieldTypes,
                        pages,
                        paginationMode: 'wizard',
                        rules: [],
                        spritemap
                    }
                );

                let component = new FormBuilderWithActionableFields();

                jest.runAllTimers();

                expect(component).toMatchSnapshot();
            }
        );

        /** To do
         * Duplicate field -> call event duplicateField - ok
         * Delete field -> show modal delete - ok
         * Click confirm delete modal -> remove field (snapshot) - ver com Matu
         */

        it(
            'should duplicate a field when duplicate button is clicked',
            () => {
                jest.useFakeTimers();

                dom.enterDocument('<button id="addFieldButton"></button>');
                dom.enterDocument('<div class="ddm-translation-manager"></div>');
                dom.enterDocument('<div id="myCol" class="col-md-12 col-ddm" data-ddm-field-row="0" data-ddm-field-page="0" data-ddm-field-column="0"></div>')

                const store = {
                    emit: jest.fn(),
                    on: jest.fn()
                };

                let pages = JSON.parse(JSON.stringify(Pages));

                const FormBuilderWithActionableFields = getFormBuilderWithActionableFields(
                    {
                        fieldTypes,
                        pages,
                        paginationMode: 'wizard',
                        rules: [],
                        spritemap
                    },
                    store
                );


                let component = new FormBuilderWithActionableFields({}, '#myCol');

                jest.runAllTimers();

                let duplicateButton = component.refs.actions.refs.actions.refs.duplicate.element;

                duplicateButton.click();

                jest.runAllTimers();

                expect(store.emit).toHaveBeenCalledWith('fieldDuplicated', {"indexes": {"columnIndex": 0, "pageIndex": 0, "rowIndex": 0}});
            }
        );

        it(
            'should show delete modal when delete button is clicked',
            () => {
                jest.useFakeTimers();

                dom.enterDocument('<button id="addFieldButton"></button>');
                dom.enterDocument('<div class="ddm-translation-manager"></div>');
                dom.enterDocument('<div id="myCol2" class="col-md-12 col-ddm" data-ddm-field-row="0" data-ddm-field-page="0" data-ddm-field-column="0"></div>')

                const store = {
                    emit: jest.fn(),
                    on: () => ({
                        removeListener: jest.fn()
                    })
                };

                let pages = JSON.parse(JSON.stringify(Pages));

                const FormBuilderWithActionableFields = getFormBuilderWithActionableFields(
                    {
                        fieldTypes,
                        pages,
                        paginationMode: 'wizard',
                        rules: [],
                        spritemap
                    },
                    store
                );


                let component = new FormBuilderWithActionableFields({}, '#myCol2');

                jest.runAllTimers();

                let deleteButton = component.refs.actions.refs.actions.refs.delete.element;

                deleteButton.click();

                jest.runAllTimers();

                let deleteModal = component.refs.actions.refs.deleteModal.element;

                let deleteModalShow = deleteModal.classList.contains('show');

                expect(deleteModalShow).toBe(true);

                deleteModal.click();

                jest.runAllTimers();
            }
        );

        // it(
        //     'should show delete the field when modal delete button is clicked',
        //     () => {
        //         jest.useFakeTimers();

        //         dom.enterDocument('<button id="addFieldButton"></button>');
        //         dom.enterDocument('<div class="ddm-translation-manager"></div>');
        //         dom.enterDocument('<div id="myCol2" class="col-md-12 col-ddm" data-ddm-field-row="0" data-ddm-field-page="0" data-ddm-field-column="0"></div>')

        //         const store = {
        //             emit: jest.fn(),
        //             on: () => ({
        //                 removeListener: jest.fn()
        //             })
        //         };

        //         let pages = JSON.parse(JSON.stringify(Pages));

        //         const FormBuilderWithActionableFields = getFormBuilderWithActionableFields(
        //             {
        //                 fieldTypes,
        //                 pages,
        //                 paginationMode: 'wizard',
        //                 rules: [],
        //                 spritemap
        //             },
        //             store
        //         );


        //         let component = new FormBuilderWithActionableFields({}, '#myCol2');

        //         jest.runAllTimers();

        //         let deleteButton = component.refs.actions.refs.actions.refs.delete.element;

        //         deleteButton.click();

        //         jest.runAllTimers();

        //         let deleteModal = component.refs.actions.refs.deleteModal;

        //         // console.log(deleteModal);

        //         deleteModal.click();

        //         jest.runAllTimers();

        //         expect(store.emit).toHaveBeenCalledWith('fieldDeleted');
        //     }
        // );
    }
)
