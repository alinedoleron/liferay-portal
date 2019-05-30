import {FormBuilderBase} from 'source/components/FormBuilder/FormBuilder.es';
import withMoveableFields from 'source/components/FormBuilder/withMoveableFields.es';
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

const FBWithMoveableFields = withMoveableFields(FormBuilderBase);

const defaultStore = {
    emit: jest.fn(),
    on: () => {}
};

const getFormBuilderWithMoveableFields = (
    {
        fieldTypes,
        pages,
        paginationMode,
        rules,
        spritemap
    },
    store = defaultStore,
    dispatch
) => {
    return class Parent extends JSXComponent {
        render() {
            return (
                <FBWithMoveableFields
                    fieldTypes = {fieldTypes}
                    pages = {pages}
                    paginationMode = {paginationMode}
                    rules = {rules}
                    ref = 'moveable'
                    spritemap = {spritemap}
                />
            );
        }

        getChildContext() {
            return {
                store,
                dispatch
            }
        }
    }
}

/**
 * TO DO
 * Should render moveable fields - ok
 * Should move fields from source to target - ver com Matu
 */

describe(
    'FormBuilderWithMoveableFields',
    () => {
        it(
            'should render moveable fields',
            () => {
                jest.useFakeTimers();
                dom.enterDocument('<button id="addFieldButton"></button>');
				dom.enterDocument('<div class="ddm-translation-manager"></div>');

                let pages = JSON.parse(JSON.stringify(Pages));
                const FormBuilderWithMoveableFields = getFormBuilderWithMoveableFields(
                    {
                        fieldTypes,
                        pages,
                        paginationMode: 'wizard',
                        rules: [],
                        spritemap
                    }
                );

                let component = new FormBuilderWithMoveableFields();

                jest.runAllTimers();

                expect(component).toMatchSnapshot();
            }
        );

        it(
            'should move fields from source to target',
            () => {
                jest.useFakeTimers();
                dom.enterDocument('<button id="addFieldButton"></button>');
                dom.enterDocument('<div class="ddm-translation-manager"></div>');
                dom.enterDocument('<div id="fieldToDrag" class="ddm-field-container ddm-parent-dragging"></div>');

                let pages = JSON.parse(JSON.stringify(Pages));
                const FormBuilderWithMoveableFields = getFormBuilderWithMoveableFields(
                    {
                        fieldTypes,
                        pages,
                        paginationMode: 'wizard',
                        rules: [],
                        spritemap
                    }
                );

                let component = new FormBuilderWithMoveableFields({}, '#fieldToDrag');

                jest.runAllTimers();

                let event = {
                    addedToPlaceholder: true,
                    source: {columnIndex: 0, pageIndex: 0, rowIndex: 0},
                    target: {columnIndex: 1, pageIndex: 0, rowIndex: 0}
                };

                // component.refs.moveable._handleFieldMoved(event);

                component.refs.moveable._dragAndDrop._handleDragAndDropEnd(event);

                console.log(component.refs.moveable._dragAndDrop._handleDragAndDropEnd(event));

                // // let move = {
                // //     source: {

                // //     },
                // // }

                jest.runAllTimers();

                // expect(component).toMatchSnapshot();
            }
        );
    }
);