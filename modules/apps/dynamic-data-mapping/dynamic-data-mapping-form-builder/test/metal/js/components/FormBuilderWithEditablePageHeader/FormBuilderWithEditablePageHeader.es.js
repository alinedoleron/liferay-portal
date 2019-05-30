import {FormBuilderBase} from 'source/components/FormBuilder/FormBuilder.es';
import withEditablePageHeader from 'source/components/FormBuilder/withEditablePageHeader.es';
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

const FBWithEditablePageHeader = withEditablePageHeader(FormBuilderBase);

const defaultStore = {
    emit: jest.fn(),
    on: () => {}
};

const getFormBuilderWithEditablePageHeader = (
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
                <FBWithEditablePageHeader
                    fieldTypes = {fieldTypes}
                    pages = {pages}
                    paginationMode = {paginationMode}
                    rules = {rules}
                    ref = 'header'
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
 * Should render the page - ok
 * Should change the page description - ok
 * Should Change the page title - ok
 */

describe(
    'FormBuilderWithEditablePageHeader',
    () => {
        it(
            'should render the page header',
            () => {
                jest.useFakeTimers();
                dom.enterDocument('<button id="addFieldButton"></button>');
				dom.enterDocument('<div class="ddm-translation-manager"></div>');

                let pages = JSON.parse(JSON.stringify(Pages));
                const FormBuilderWithEditablePageHeader = getFormBuilderWithEditablePageHeader(
                    {
                        fieldTypes,
                        pages,
                        paginationMode: 'wizard',
                        rules: [],
                        spritemap
                    }
                );

                let component = new FormBuilderWithEditablePageHeader();

                jest.runAllTimers();

                expect(component).toMatchSnapshot();
            }
        );

        it(
            'should change the page description',
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

                const FormBuilderWithEditablePageHeader = getFormBuilderWithEditablePageHeader(
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

                let component = new FormBuilderWithEditablePageHeader();

                jest.runAllTimers();

                let event = {
                    delegateTarget: {
                        value: 'New description'
                    }
                };

                component.refs.header._handlePageDescriptionChanged(event);

                pages[0].description = 'New description';
                pages[0].localizedDescription = {
                    'undefined': 'New description'
                };

                let newPages = pages;

                jest.runAllTimers();

                expect(dispatch).toHaveBeenCalledWith('pagesUpdated', newPages);
            }
        );

        it(
            'should change the page title',
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

                const FormBuilderWithEditablePageHeader = getFormBuilderWithEditablePageHeader(
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

                let component = new FormBuilderWithEditablePageHeader();

                jest.runAllTimers();

                let event = {
                    delegateTarget: {
                        value: 'New title'
                    }
                };

                component.refs.header._handlePageTitleChanged(event);

                pages[0].title = 'New title';
                pages[0].localizedTitle = {
                    'undefined': 'New title'
                };

                let newPages = pages;

                jest.runAllTimers();

                expect(dispatch).toHaveBeenCalledWith('pagesUpdated', newPages);
            }
        );
    }
);