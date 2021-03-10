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

import React from 'react';

import EmptyState from '../../../components/empty-state/EmptyState.es';
import FieldType from '../../../components/field-types/FieldType.es';
import {DRAG_ELEMENT_SET_ADD} from '../../../drag-and-drop/dragTypes.es';
import {getSearchRegex} from '../../../utils/search.es';

// import DataLayoutBuilderContext from '../../../data-layout-builder/DataLayoutBuilder.es';

const EmptyPanel = ({searchTerm}) => (
	<div className="mt-2">
		<EmptyState
			emptyState={{
				description: Liferay.Language.get(
					'there-are-no-element-sets-yet'
				),
				title: Liferay.Language.get('there-are-no-element-sets'),
			}}
			keywords={searchTerm}
			small
		/>
	</div>
);

const ElementSetList = ({
	elementSets,
	onDoubleClick,
	searchTerm = '',
	...context
}) => {
	const regex = getSearchRegex(searchTerm);
	const elementSetList = elementSets.filter(({name}) => regex.test(name));

	return elementSetList.length ? (
		<div className="mt-3">
			{elementSetList.map((elementSet, key) => {
				const payload = {
					elementSetId: elementSet.id,
					...context,
				};

				return (
					<FieldType
						dragType={DRAG_ELEMENT_SET_ADD}
						icon="forms"
						key={key}
						label={elementSet.name}
						onDoubleClick={() => onDoubleClick(payload)}
						payload={payload}
					/>
				);
			})}
		</div>
	) : (
		<EmptyPanel searchTerm={searchTerm} />
	);
};

export default ElementSetList;
