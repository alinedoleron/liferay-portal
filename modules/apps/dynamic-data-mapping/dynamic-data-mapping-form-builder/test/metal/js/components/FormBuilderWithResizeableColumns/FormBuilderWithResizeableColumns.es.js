import {FormBuilderBase} from 'source/components/FormBuilder/FormBuilder.es';
import withResizeableColumns from 'source/components/FormBuilder/withResizeableColumns.es';
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

const FBWithResizeableColumns = withResizeableColumns(FormBuilderBase);

const defaultStore = {
    emit: jest.fn(),
    on: () => {}
};

const getFormBuilderWithResizeableColumns = (
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
                <FBWithResizeableColumns
                    fieldTypes = {fieldTypes}
                    pages = {pages}
                    paginationMode = {paginationMode}
                    rules = {rules}
                    ref = 'resizeable'
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
 * Should render the pages with resizeable fields - ok
 * Should handle resize drag - ok
 */

describe(
    'FormBuilderWithResizeableColumns',
    () => {
        it(
            'should render the pages with resizeble fields',
            () => {
                jest.useFakeTimers();
                dom.enterDocument('<button id="addFieldButton"></button>');
				dom.enterDocument('<div class="ddm-translation-manager"></div>');

                let pages = JSON.parse(JSON.stringify(Pages));
                const FormBuilderWithResizeableColumns = getFormBuilderWithResizeableColumns(
                    {
                        fieldTypes,
                        pages,
                        paginationMode: 'wizard',
                        rules: [],
                        spritemap
                    }
                );

                let component = new FormBuilderWithResizeableColumns();

                jest.runAllTimers();

                expect(component).toMatchSnapshot();
            }
        );

        it(
            'should handle resize drag',
            () => {
                jest.useFakeTimers();
                dom.enterDocument('<button id="addFieldButton"></button>');
                dom.enterDocument('<div class="ddm-translation-manager"></div>');
                dom.enterDocument('<div id="fieldToBeDragged" class="ddm-resize-handle ddm-resize-handle-right" data-ddm-field-row="0" data-ddm-field-page="0" data-ddm-field-column="0" aria-grabbed="true"></div>');

                let pages = JSON.parse(JSON.stringify(Pages));

                const dispatch = jest.fn();

                const store = {
                    emit: jest.fn(),
                    on: () => {}
                };

                const FormBuilderWithResizeableColumns = getFormBuilderWithResizeableColumns(
                    {
                        fieldTypes,
                        pages,
                        paginationMode: 'wizard',
                        rules: [],
                        spritemap
                    },
                    store,
                    dispatch
                );

                let component = new FormBuilderWithResizeableColumns({}, '#fieldToBeDragged');

                jest.runAllTimers();

                let event = {
                    source: component.refs.resizeable.element,
                    x: 1418.5
                }

                component.refs.resizeable._handleResizeDragEvent(event);

                expect(store.emit).toHaveBeenCalledWith('columnResized', {column: 0, direction: 'right', source: event.source});
            }
        );
    }
);