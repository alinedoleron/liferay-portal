/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {Option} from '@clayui/core';
import React from 'react';
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
interface Option<T> {
	label: LocalizedValue<string>;
	value: T;
}
declare const Main: ({
	editingLanguageId,
	fixedOptions,
	label,
	localizedValue,
	localizedValueEdited,
	multiple,
	name,
	onChange,
	options,
	predefinedValue,
	readOnly,
	showEmptyOption,
	value,
	...otherProps
}: MainProps) => JSX.Element;
export default Main;
