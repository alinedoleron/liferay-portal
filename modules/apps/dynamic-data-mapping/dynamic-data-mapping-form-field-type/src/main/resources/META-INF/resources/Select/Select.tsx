/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {Option, Picker} from '@clayui/core';
import ClayDropDown from '@clayui/drop-down';
import Form from '@clayui/form';
import {ClayCheckbox} from '@clayui/form';
import ClayMultiSelect from '@clayui/multi-select';
import {ClayTooltipProvider} from '@clayui/tooltip';
import {useForm, useFormState} from 'data-engine-js-components-web';
import React, {
	ReactElement,
	forwardRef,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';

import {FieldBase} from '../FieldBase/ReactFieldBase.es';

// @ts-ignore

import {useSyncValue} from '../hooks/useSyncValue.es';
import {normalizeOptions, normalizeValue} from '../util/options';
import {getTooltipTitle} from '../util/tooltip';

import type {Locale, LocalizedValue} from '../types';

interface MainProps {
	editingLanguageId: Locale;
	fixedOptions: Option<string>[];
	label: string;
	localizedValue: any;
	localizedValueEdited: any;
	multiple: boolean;
	name: string;
	onChange: any;
	onFocus: React.FocusEventHandler<HTMLInputElement>;
	options: any[];
	predefinedValue: string[] | string;
	readOnly: boolean;
	showEmptyOption: boolean;
	value?: any[];
}

interface SelectProps extends Omit<MainProps, 'editingLanguageId'> {}

interface IOption {
	editingLanguageId: Locale;
	fixedOptions: Option<string>[];
	multiple: boolean;
	options: any[];
	showEmptyOption: boolean;
	valueArray: string[];
}

interface Option<T> {
	label: LocalizedValue<string>;
	value: T;
}

/**
 * Appends a new value on the current value state
 * @param options {Object}
 * @param options.value {Array|String}
 * @param options.valueToBeAppended {Array|String}
 * @returns {Array}
 */
function appendValue({value, valueToBeAppended}: any) {
	const currentValue = toArray(value);
	const newValue = [...currentValue];

	if (value) {
		newValue.push(valueToBeAppended);
	}

	return newValue;
}

/**
 * Removes a value from the value array.
 * @param options {Object}
 * @param options.value {Array|String}
 * @param options.valueToBeRemoved {Array|String}
 * @returns {Array}
 */
function removeValue({value, valueToBeRemoved}: any) {
	const currentValue = toArray(value);

	return currentValue.filter((v) => v !== valueToBeRemoved);
}

/**
 * Wraps the given argument into an array.
 * @param value {Array|String}
 */
function toArray(value: string[] | string) {
	let newValue: string[] | string = value;

	if (newValue && typeof newValue === 'string') {
		try {
			newValue = JSON.parse(newValue);
		}
		catch (error) {}
	}

	if (!Array.isArray(newValue)) {
		newValue = [newValue];
	}

	return newValue;
}

function Select({
	label,
	multiple,
	onChange,
	options,
	predefinedValue,
	readOnly,
	showEmptyOption,
	value,
	...otherProps
}: SelectProps) {
	return (
		<Picker
			aria-labelledby="picker-label"
			disabled={readOnly}
			id="picker"
			items={options}
			onSelectionChange={(itemKey: any) => {
				const field = options.find(({value}) => value === itemKey);

				onChange({}, [field.value]);
			}}
			placeholder="Select a fruit"
			selectedKey={value?.[0]}
			value={value || predefinedValue}
		>
			{(item) => <Option key={item.value}>{item.label}</Option>}
		</Picker>
	);
}

const MultipleSelection = ({
	label,
	multiple,
	onChange,
	options,
	predefinedValue,
	readOnly,
	showEmptyOption,
	value,
}: SelectProps) => {
	const [items, setItems] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>();
	const {activeTabTitle, viewMode} = useFormState();
	useEffect(() => {
		const newItems = options.filter((option) =>
			value?.includes(option.value)
		);

		setItems(newItems);
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
	}, [options]);

	return (
		<>
			{!loading && (
				<ClayMultiSelect
					disabled={readOnly}
					inputName="myInput"
					items={items}
					onItemsChange={(itemsChanged: any) => {
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
									onChange={(event) => {
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

const Main = ({
	editingLanguageId,
	fixedOptions = [],
	label,
	localizedValue = {},
	localizedValueEdited,
	multiple,
	name,
	onChange,
	options = [],
	predefinedValue = [],
	readOnly = false,
	showEmptyOption = true,
	value = [],
	...otherProps
}: MainProps) => {
	const predefinedValueArray = toArray(predefinedValue);
	const valueArray = toArray(value);

	const normalizedOptions = useMemo(
		() =>
			normalizeOptions({
				editingLanguageId,
				fixedOptions,
				multiple,
				options,
				showEmptyOption,
				valueArray,
			}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[fixedOptions, multiple, options, showEmptyOption, valueArray]
	);

	value = useMemo(
		() =>
			normalizeValue({
				localizedValueEdited,
				multiple,
				normalizedOptions,
				predefinedValueArray,
				valueArray,
			}) as string[],
		[
			localizedValueEdited,
			multiple,
			normalizedOptions,
			predefinedValueArray,
			valueArray,
		]
	);

	return (
		<FieldBase
			label={label}
			localizedValue={localizedValue}
			name={name}
			readOnly={readOnly}
			{...otherProps}
		>
			{multiple ? (
				<MultipleSelection
					fixedOptions={[]}
					label=""
					localizedValue={undefined}
					localizedValueEdited={undefined}
					multiple={multiple}
					name={`${name}_field`}
					onChange={onChange}
					options={normalizedOptions}
					predefinedValue={predefinedValueArray}
					readOnly={readOnly}
					showEmptyOption={false}
					value={value}
					{...otherProps}
				/>
			) : (
				<Select
					fixedOptions={[]}
					label=""
					localizedValue={undefined}
					localizedValueEdited={undefined}
					multiple={multiple}
					name={`${name}_field`}
					onChange={onChange}
					options={normalizedOptions}
					predefinedValue={predefinedValueArray}
					readOnly={readOnly}
					showEmptyOption={false}
					value={value}
					{...otherProps}
				/>
			)}

			<input name={name} type="hidden" value={value} />
		</FieldBase>
	);
};

export default Main;
