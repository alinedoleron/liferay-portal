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

import {ClayVerticalNav} from '@clayui/nav';
import React, {useContext, useState} from 'react';

import {SidebarContext} from '../sidebar/SidebarContext';

export default function CardMenu({fields}) {
	const [itemSelectedLabel, setItemSelectedLabel] = useState();

	const {portletNamespace} = useContext(SidebarContext);

	const scrollToCard = (portletNamespace, index) => {
		const card = document.getElementById(
			`${portletNamespace}card_${index}`
		);

		if (card !== null) {
			card.scrollIntoView();
		}
	};

	const newItems = [];

	fields.forEach((field, index) =>
		newItems.push({
			label: field.label,
			onClick: () => {
				setItemSelectedLabel(field.label);
				scrollToCard(portletNamespace, index);
			},
		})
	);

	const menu = (
		<ClayVerticalNav
			items={[
				{
					initialExpanded: true,
					items: newItems,
					label: itemSelectedLabel ?? newItems[0].label,
				},
			]}
			large={false}
		/>
	);

	return menu;
}
