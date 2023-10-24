/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

/// <reference types="react" />

import {Option} from '@clayui/core';
import type {Locale, LocalizedValue} from '../types';
interface MainProps {
	editingLanguageId?: Locale;
	fixedOptions?: Option<string>[];
	label: string;
	localizedValue?: any;
	localizedValueEdited?: any;
	multiple?: boolean;
	name: string;
	onChange: any;
	options: any[];
	predefinedValue?: string[] | string;
	readOnly: boolean;
	selectedKey: string;
	showEmptyOption: boolean;
	value: string[] | string;
	visible?: boolean;
}
interface Option<T> {
	label: LocalizedValue<string>;
	value: T;
}
declare const Main: ({
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
	selectedKey,
	...otherProps
}: MainProps) => JSX.Element;
export default Main;
