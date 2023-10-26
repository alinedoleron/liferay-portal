/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

export function appendValue({value, valueToBeAppended}: any) {
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
export function removeValue({value, valueToBeRemoved}: any) {
	const currentValue = toArray(value);

	return currentValue.filter((v) => v !== valueToBeRemoved);
}

/**
 * Wraps the given argument into an array.
 * @param value {Array|String}
 */
export function toArray(value: string[] | string) {
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
