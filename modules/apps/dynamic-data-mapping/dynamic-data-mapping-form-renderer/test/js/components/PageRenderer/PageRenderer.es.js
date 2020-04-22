/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

import '../../../../src/main/resources/META-INF/resources/js/components/SuccessPage/SuccessPage.es';
import PageRenderer from '../../../../src/main/resources/META-INF/resources/js/components/PageRenderer/PageRenderer.es';
import mockPagesEmpty from '../../__mock__/mockPageEmpty.es';
import mockSuccessPage from '../../__mock__/mockSuccessPage.es';
import withContextMock from '../../__mock__/withContextMock.es';

const spritemap = 'icons.svg';
let component;
let pagesEmpty;
let successPageSettings;
const PageRendererWithContextMock = withContextMock(PageRenderer);

const createPageRenderer = props => {
	return new PageRendererWithContextMock({
		editable: true,
		editingLanguageId: 'en_US',
		paginationMode: 'wizard',
		portletNamespace: 'portletNamespace',
		showSubmitButton: false,
		spritemap,
		submitLabel: 'Submit',
		successPageSettings,
		view: 'formBuilder',
		...props,
	});
};

describe('PageRenderer', () => {
	beforeEach(() => {
		pagesEmpty = JSON.parse(JSON.stringify(mockPagesEmpty));
		successPageSettings = JSON.parse(JSON.stringify(mockSuccessPage));

		jest.useFakeTimers();
	});

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('creates the defaut markup when success page is enabled', () => {
		pagesEmpty.push({contentRenderer: 'success'});

		component = createPageRenderer({
			page: pagesEmpty[0],
			pageIndex: 0,
			pages: pagesEmpty,
			total: 2,
		});

		expect(component).toMatchSnapshot();
	});

	it('creates the defaut markup with button to add success page if success page is disabled', () => {
		successPageSettings.enabled = false;

		component = createPageRenderer({
			page: pagesEmpty[0],
			pageIndex: 0,
			pages: pagesEmpty,
			total: 1,
		});

		expect(component).toMatchSnapshot();
		expect(component.refs.successPage).not.toBeUndefined();
	});

	it('shows the new page button on the bottom of each page', () => {
		pagesEmpty.push({contentRenderer: 'success'});

		component = createPageRenderer({
			page: pagesEmpty[0],
			pageIndex: 0,
			pages: pagesEmpty,
			total: 2,
		});

		expect(component).toMatchSnapshot();
		expect(component.refs.newPage0).not.toBeUndefined();
	});

	it('propagates pageAdded event after option of remove a page be clicked', () => {
		component = createPageRenderer({
			page: pagesEmpty[0],
			pageIndex: 0,
			pages: pagesEmpty,
			total: 1,
		});

		component._handleAddPageClicked();

		expect(component.context.dispatch).toHaveBeenCalledWith('pageAdded', {
			pageIndex: 0,
		});
	});

	it('propagates pageDeleted event after option of remove a page be clicked', () => {
		pagesEmpty.push(pagesEmpty[0]);
		pagesEmpty.push({contentRenderer: 'success'});

		component = createPageRenderer({
			page: pagesEmpty[1],
			pageIndex: 1,
			pages: pagesEmpty,
			total: 3,
		});

		const data = {
			item: {
				settingsItem: 'remove-page',
			},
		};

		component._handleDropdownItemClicked({data});

		expect(component.context.dispatch).toHaveBeenCalledWith(
			'pageDeleted',
			1
		);
	});

	it('propagates activePageUpdated event after option of remove success page be clicked', () => {
		pagesEmpty.push(pagesEmpty[0]);
		pagesEmpty.push({
			contentRenderer: 'success',
			rows: [],
			successPageSettings,
		});

		component = createPageRenderer({
			page: pagesEmpty[2],
			pageIndex: 2,
			pages: pagesEmpty,
			total: 3,
		});

		const data = {
			item: {
				settingsItem: 'remove-page',
			},
		};

		component._handleDropdownItemClicked({data});

		expect(component.context.dispatch).toHaveBeenCalledWith(
			'activePageUpdated',
			2
		);
	});

	it('propagates pageReset event after option of remove reset page be clicked', () => {
		pagesEmpty.push(pagesEmpty[0]);
		pagesEmpty.push({contentRenderer: 'success'});

		component = createPageRenderer({
			page: pagesEmpty[1],
			pageIndex: 1,
			pages: pagesEmpty,
			total: 3,
		});

		const data = {
			item: {
				settingsItem: 'reset-page',
			},
		};

		component._handleDropdownItemClicked({data});

		expect(component.context.dispatch).toHaveBeenCalledWith('pageReset', {
			pageIndex: 1,
		});
	});

	it('verify if kebab (three dots) menu of actions exist on Success Page', () => {
		pagesEmpty.push({contentRenderer: 'success'});

		component = createPageRenderer({
			page: pagesEmpty[1],
			pageIndex: 1,
			pages: pagesEmpty,
			total: 2,
		});

		expect(component.refs.successPageActions1).not.toBeUndefined();
	});

	it('verify if kebab (three dots) menu of actions exist on a Page', () => {
		pagesEmpty.push({contentRenderer: 'success'});

		component = createPageRenderer({
			page: pagesEmpty[0],
			pageIndex: 0,
			pages: pagesEmpty,
			total: 2,
		});

		expect(component.refs.pageActions0).not.toBeUndefined();
	});

	it('propagates pagesSwapped event after button of moving down the page be clicked', () => {
		pagesEmpty.push(pagesEmpty[0]);
		pagesEmpty.push({contentRenderer: 'success'});

		component = createPageRenderer({
			page: pagesEmpty[0],
			pageIndex: 0,
			pages: pagesEmpty,
			total: 3,
		});

		component._handleMovePageDownClicked();

		expect(component.context.dispatch).toHaveBeenCalledWith(
			'pagesSwapped',
			{
				firstIndex: 0,
				secondIndex: 1,
			}
		);
	});

	it('propagates pagesSwapped event after button of moving up the page be clicked', () => {
		pagesEmpty.push(pagesEmpty[0]);
		pagesEmpty.push({contentRenderer: 'success'});

		component = createPageRenderer({
			page: pagesEmpty[1],
			pageIndex: 1,
			pages: pagesEmpty,
			total: 3,
		});

		component._handleMovePageUpClicked();

		expect(component.context.dispatch).toHaveBeenCalledWith(
			'pagesSwapped',
			{
				firstIndex: 1,
				secondIndex: 0,
			}
		);
	});

	it('disables arrow down on the last page before success page and enables the arrow up', () => {
		pagesEmpty.push(pagesEmpty[0]);
		pagesEmpty.push({contentRenderer: 'success'});

		component = createPageRenderer({
			page: pagesEmpty[1],
			pageIndex: 1,
			pages: pagesEmpty,
			total: 3,
		});

		expect(component.refs.movePageUp1.disabled).toEqual(false);
		expect(component.refs.movePageDown1.disabled).toEqual(true);
	});

	it('enables arrow down on the first page and disables the arrow up, when there are more than one page, except success page', () => {
		pagesEmpty.push(pagesEmpty[0]);
		pagesEmpty.push({contentRenderer: 'success'});

		component = createPageRenderer({
			page: pagesEmpty[0],
			pageIndex: 0,
			pages: pagesEmpty,
			total: 3,
		});

		expect(component.refs.movePageUp0.disabled).toEqual(true);
		expect(component.refs.movePageDown0.disabled).toEqual(false);
	});
});
