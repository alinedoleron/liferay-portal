/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayCheckbox} from '@clayui/form';
import ClayMultiSelect from '@clayui/multi-select';
import {useFormState} from 'data-engine-js-components-web';
import React, {useEffect, useState} from 'react';

import {Item, MultiSelectProps} from './select';
import {appendValue, removeValue} from './selectOperations';

const MultipleSelection = ({
	name,
	onChange,
	options,
	readOnly,
	required,
	value,
}: MultiSelectProps) => {
	const [items, setItems] = useState<Item[]>([]);
	const [loading, setLoading] = useState<boolean>();
	const {activeTabTitle, viewMode} = useFormState();

	useEffect(() => {
		const newItems = options.filter((option) =>
			value?.includes(option.value)
		);

		setItems(newItems);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	useEffect(() => {
		if (
			!readOnly &&
			activeTabTitle !== Liferay.Language.get('advanced') &&
			!viewMode
		) {
			setLoading(true);
			setTimeout(() => setLoading(false), 200);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [options]);

	return (
		<>
			{!loading && (
				<ClayMultiSelect
					aria-labelledby={name}
					aria-required={required}
					disabled={readOnly}
					inputName="myInput"
					items={items}
					onItemsChange={(itemsChanged: Item[]) => {
						const lastItemAdded =
							itemsChanged[itemsChanged.length - 1];

						if (
							itemsChanged.filter(
								(i: any) => lastItemAdded._key === i.value
							).length > 1
						) {
							itemsChanged = itemsChanged.filter(
								(i: any) => lastItemAdded.value !== i.value
							);
						}

						setItems(itemsChanged);
						const newValue = itemsChanged.map((i: any) => i.value);
						onChange({}, newValue);
					}}
					sourceItems={options}
				>
					{(item) => (
						<ClayMultiSelect.Item
							key={item.value}
							textValue={item.label}
						>
							<div className="auto autofit-row-center fit-row">
								<ClayCheckbox
									aria-label={item.label}
									checked={value?.includes(item.value)!}
									data-itemValue={item.value}
									data-testid={`labelItem-${item.value}`}
									label={item.label}
									onChange={() => {
										let newValue = [];
										if (value?.includes(item.value)) {
											newValue = removeValue({
												value,
												valueToBeRemoved: item.value,
											});

											setItems(
												items.filter((i) =>
													i._key
														? item.value !== i._key
														: item.value !== i.value
												)
											);
										}
										else {
											newValue = appendValue({
												value,
												valueToBeAppended: item.value,
											});
										}
										onChange({}, newValue);
									}}
								/>
							</div>
						</ClayMultiSelect.Item>
					)}
				</ClayMultiSelect>
			)}
		</>
	);
};

export default MultipleSelection;
