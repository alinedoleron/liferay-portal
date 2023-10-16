/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {Option, Picker} from '@clayui/core';
import ClayDropDown from '@clayui/drop-down';
import Form from '@clayui/form';
import {ClayCheckbox} from '@clayui/form';
import {ClayTooltipProvider} from '@clayui/tooltip';
import {useFormState} from 'data-engine-js-components-web';
import React, {forwardRef, useEffect, useMemo, useRef, useState} from 'react';

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
	value: string[];
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

const Select = ({
	label,
	multiple,
	onChange,
	options,
	predefinedValue,
	readOnly,
	showEmptyOption,
	value,
	...otherProps
}: SelectProps) => {
	const {viewMode} = useFormState();
	const [currentValue, setCurrentValue] = useSyncValue(value, false);

	const title = getTooltipTitle({
		placeholder: Liferay.Language.get('choose-an-option'),
		value: '',
	});

	useEffect(() => {
		if (viewMode && currentValue.length !== 0) {
			onChange({target: {value: currentValue}});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
			selectedKey={value[0]}
			value={value || predefinedValue}
		>
			{(item) => <Option key={item.value}>{item.label}</Option>}
		</Picker>
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

			<input name={name} type="hidden" value={value} />
		</FieldBase>
	);
};

export default Main;
