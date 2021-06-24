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

package com.liferay.dynamic.data.mapping.form.field.type.internal.numeric.input.mask;

import com.liferay.dynamic.data.mapping.form.field.type.DDMFormFieldTemplateContextContributor;
import com.liferay.dynamic.data.mapping.form.field.type.constants.DDMFormFieldTypeConstants;
import com.liferay.dynamic.data.mapping.model.DDMFormField;
import com.liferay.dynamic.data.mapping.render.DDMFormFieldRenderingContext;
import com.liferay.portal.kernel.json.JSONException;
import com.liferay.portal.kernel.json.JSONFactory;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.language.LanguageUtil;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.util.AggregateResourceBundle;
import com.liferay.portal.kernel.util.HashMapBuilder;
import com.liferay.portal.kernel.util.LocaleThreadLocal;
import com.liferay.portal.kernel.util.Portal;
import com.liferay.portal.kernel.util.ResourceBundleUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.ResourceBundle;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

/**
 * @author Carolina Barbosa
 */
@Component(
	immediate = true,
	property = "ddm.form.field.type.name=" + DDMFormFieldTypeConstants.NUMERIC_INPUT_MASK,
	service = {
		DDMFormFieldTemplateContextContributor.class,
		NumericInputMaskDDMFormFieldTemplateContextContributor.class
	}
)
public class NumericInputMaskDDMFormFieldTemplateContextContributor
	implements DDMFormFieldTemplateContextContributor {

	@Override
	public Map<String, Object> getParameters(
		DDMFormField ddmFormField,
		DDMFormFieldRenderingContext ddmFormFieldRenderingContext) {

		return HashMapBuilder.<String, Object>put(
			"decimalSymbols", _getOptions(getDecimalSymbols())
		).put(
			"thousandsSeparators",
			_getOptions(getThousandsSeparators(ddmFormFieldRenderingContext))
		).putAll(
			getValueProperties(ddmFormFieldRenderingContext)
		).build();
	}

	protected Map<String, Object> getDecimalSymbols() {
		return HashMapBuilder.<String, Object>put(
			",", "0,00"
		).put(
			".", "0.00"
		).build();
	}

	protected ResourceBundle getResourceBundle(Locale locale) {
		Class<?> clazz = getClass();

		ResourceBundle portalResourceBundle = portal.getResourceBundle(locale);

		ResourceBundle resourceBundle = ResourceBundleUtil.getBundle(
			"content.Language", locale, clazz.getClassLoader());

		return new AggregateResourceBundle(
			resourceBundle, portalResourceBundle);
	}

	protected Map<String, Object> getThousandsSeparators(
		DDMFormFieldRenderingContext ddmFormFieldRenderingContext) {

		return HashMapBuilder.<String, Object>put(
			" ", "1 000"
		).put(
			",", "1,000"
		).put(
			".", "1.000"
		).put(
			"\'", "1\'000"
		).put(
			"none",
			() -> {
				Locale displayLocale =
					LocaleThreadLocal.getThemeDisplayLocale();

				if (displayLocale == null) {
					displayLocale = ddmFormFieldRenderingContext.getLocale();
				}

				return LanguageUtil.get(
					getResourceBundle(displayLocale), "none");
			}
		).build();
	}

	protected Map<String, Object> getValueProperties(
		DDMFormFieldRenderingContext ddmFormFieldRenderingContext) {

		try {
			JSONObject valueJSONObject = jsonFactory.createJSONObject(
				ddmFormFieldRenderingContext.getValue());

			JSONObject symbolsJSONObject = jsonFactory.createJSONObject(
				valueJSONObject.getString("symbols"));

			return HashMapBuilder.<String, Object>put(
				"append", valueJSONObject.getString("append")
			).put(
				"appendType", valueJSONObject.getString("appendType")
			).put(
				"decimalSymbol", symbolsJSONObject.getString("decimalSymbol")
			).put(
				"thousandsSeparator",
				symbolsJSONObject.getString("thousandsSeparator")
			).build();
		}
		catch (JSONException jsonException) {
			if (_log.isWarnEnabled()) {
				_log.warn(jsonException, jsonException);
			}

			return new HashMap<>();
		}
	}

	@Reference
	protected JSONFactory jsonFactory;

	@Reference
	protected Portal portal;

	private List<Object> _getOptions(Map<String, Object> map) {
		List<Object> options = new ArrayList<>();

		for (Map.Entry<String, Object> entry : map.entrySet()) {
			options.add(
				HashMapBuilder.put(
					"label", entry.getValue()
				).put(
					"reference", entry.getKey()
				).put(
					"value", entry.getKey()
				).build());
		}

		return options;
	}

	private static final Log _log = LogFactoryUtil.getLog(
		NumericInputMaskDDMFormFieldTemplateContextContributor.class);

}