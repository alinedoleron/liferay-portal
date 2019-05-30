import {FormBuilderBase} from 'source/components/FormBuilder/FormBuilder.es';
import withMultiplePages from 'source/components/FormBuilder/withMultiplePages.es';
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

const FBWithMultiplePages = withMultiplePages(FormBuilderBase);

const defaultStore = {
    emit: jest.fn(),
    on: () => {}
};

const getFormBuilderWithMultiplePages = (
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
                <FBWithMultiplePages
                    fieldTypes = {fieldTypes}
                    pages = {pages}
                    paginationMode = {paginationMode}
                    rules = {rules}
                    ref = 'pagination'
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
 * Should render Form with pagination - ok
 * Should add success page (activePageUpdated) - ok
 * Should delete success page (activePageUpdated) - ok
 * Should delete page (pageDeleted) - ok
 * Should reset page (pageReset) - ok
 * Should switch pagination mode (paginationModeUpdated) - ok
 */

describe(
    'FormBuilderWithMultiplePages',
    () => {
        it(
            'should render the page header',
            () => {
                jest.useFakeTimers();
                dom.enterDocument('<button id="addFieldButton"></button>');
				dom.enterDocument('<div class="ddm-translation-manager"></div>');

                let pages = JSON.parse(JSON.stringify(Pages));
                const FormBuilderWithMultiplePages = getFormBuilderWithMultiplePages(
                    {
                        fieldTypes,
                        pages,
                        paginationMode: 'wizard',
                        rules: [],
                        spritemap
                    }
                );

                let component = new FormBuilderWithMultiplePages();

                jest.runAllTimers();

                expect(component).toMatchSnapshot();
            }
        );

        it(
            'should add success page',
            () => {
                jest.useFakeTimers();
                dom.enterDocument('<button id="addFieldButton"></button>');
				dom.enterDocument('<div class="ddm-translation-manager"></div>');

                let pages = JSON.parse(JSON.stringify(Pages));

                const dispatch = jest.fn();

                const store = {
                    emit: jest.fn(),
                    on: () => {}
                };

                const FormBuilderWithMultiplePages = getFormBuilderWithMultiplePages(
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

                let component = new FormBuilderWithMultiplePages();

                jest.runAllTimers();

                component.refs.pagination._addSuccessPage();

                expect(dispatch).toHaveBeenCalledWith('activePageUpdated', pages.length);
            }
        );

        it(
            'should delete success page',
            () => {
                jest.useFakeTimers();
                dom.enterDocument('<button id="addFieldButton"></button>');
				dom.enterDocument('<div class="ddm-translation-manager"></div>');

                let pages = JSON.parse(JSON.stringify(Pages));

                const dispatch = jest.fn();

                const store = {
                    emit: jest.fn(),
                    on: () => {}
                };

                const FormBuilderWithMultiplePages = getFormBuilderWithMultiplePages(
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

                let component = new FormBuilderWithMultiplePages();

                jest.runAllTimers();

                component.refs.pagination._deleteSuccessPage();

                expect(dispatch).toHaveBeenCalledWith('activePageUpdated', 0);

            }
        );

        it(
            'should delete page',
            () => {
                jest.useFakeTimers();
                dom.enterDocument('<button id="addFieldButton"></button>');
				dom.enterDocument('<div class="ddm-translation-manager"></div>');

                let pages = JSON.parse(JSON.stringify(Pages));

                const dispatch = jest.fn();

                const store = {
                    emit: jest.fn(),
                    on: () => {}
                };

                const FormBuilderWithMultiplePages = getFormBuilderWithMultiplePages(
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

                let component = new FormBuilderWithMultiplePages();

                jest.runAllTimers();

                component.refs.pagination._deletePage();

                expect(dispatch).toHaveBeenCalledWith('pageDeleted', 0);
            }
        );

        it(
            'should reset page',
            () => {
                jest.useFakeTimers();
                dom.enterDocument('<button id="addFieldButton"></button>');
				dom.enterDocument('<div class="ddm-translation-manager"></div>');

                let pages = JSON.parse(JSON.stringify(Pages));

                const dispatch = jest.fn();

                const store = {
                    emit: jest.fn(),
                    on: () => {}
                };

                const FormBuilderWithMultiplePages = getFormBuilderWithMultiplePages(
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

                let component = new FormBuilderWithMultiplePages();

                jest.runAllTimers();

                component.refs.pagination._resetPage();

                expect(dispatch).toHaveBeenCalledWith('pageReset');
            }
        );

        it(
            'should switch the pagination mode',
            () => {
                jest.useFakeTimers();
                dom.enterDocument('<button id="addFieldButton"></button>');
				dom.enterDocument('<div class="ddm-translation-manager"></div>');

                let pages = JSON.parse(JSON.stringify(Pages));

                const dispatch = jest.fn();

                const store = {
                    emit: jest.fn(),
                    on: () => {}
                };

                const FormBuilderWithMultiplePages = getFormBuilderWithMultiplePages(
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

                let component = new FormBuilderWithMultiplePages();

                jest.runAllTimers();

                component.refs.pagination._switchPaginationMode();

                expect(dispatch).toHaveBeenCalledWith('paginationModeUpdated');
            }
        );
    }
);