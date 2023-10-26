/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

export declare function appendValue({value, valueToBeAppended}: any): string[];

/**
 * Removes a value from the value array.
 * @param options {Object}
 * @param options.value {Array|String}
 * @param options.valueToBeRemoved {Array|String}
 * @returns {Array}
 */
export declare function removeValue({value, valueToBeRemoved}: any): string[];

/**
 * Wraps the given argument into an array.
 * @param value {Array|String}
 */
export declare function toArray(value: string[] | string): string[];
