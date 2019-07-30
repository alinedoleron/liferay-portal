package com.liferay.dynamic.data.mapping.form.field.type.slider.internal;

import com.liferay.dynamic.data.mapping.form.field.type.DDMFormFieldTemplateContextContributor;

import com.liferay.dynamic.data.mapping.model.DDMFormField;

import com.liferay.dynamic.data.mapping.model.LocalizedValue;

import com.liferay.dynamic.data.mapping.render.DDMFormFieldRenderingContext;

import com.liferay.portal.kernel.util.HtmlUtil;

import com.liferay.portal.kernel.util.Validator;


import java.util.HashMap;
import java.util.Map;

import org.osgi.service.component.annotations.Component;

@Component(
    immediate = true,
    property = "ddm.form.field.type.name=slider",
    service = {
        DDMFormFieldTemplateContextContributor.class,
        SliderDDMFormFieldTemplateContextContributor.class
    }
)
public class SliderDDMFormFieldTemplateContextContributor
    implements DDMFormFieldTemplateContextContributor {

    @Override
	public Map<String, Object> getParameters(
		DDMFormField ddmFormField,
		DDMFormFieldRenderingContext ddmFormFieldRenderingContext) {

		Map<String, Object> parameters = new HashMap<>();

		String predefinedValue = getPredefinedValue(
			ddmFormField, ddmFormFieldRenderingContext);

		if (predefinedValue != null) {
			parameters.put("predefinedValue", predefinedValue);
		}

		String value = getValue(ddmFormFieldRenderingContext);

		if (Validator.isNotNull(value)) {
			parameters.put("value", value);
		}

		return parameters;
    }

    protected String getPredefinedValue(
		DDMFormField ddmFormField,
		DDMFormFieldRenderingContext ddmFormFieldRenderingContext) {

		LocalizedValue predefinedValue = ddmFormField.getPredefinedValue();

		if (predefinedValue == null) {
			return null;
		}

		String predefinedValueString = predefinedValue.getString(
			ddmFormFieldRenderingContext.getLocale());

		if (ddmFormFieldRenderingContext.isViewMode()) {
			predefinedValueString = HtmlUtil.extractText(predefinedValueString);
		}

		return predefinedValueString;
	}

    protected String getValue(
		DDMFormFieldRenderingContext ddmFormFieldRenderingContext) {

		String value = String.valueOf(
			ddmFormFieldRenderingContext.getProperty("value"));

		if (ddmFormFieldRenderingContext.isViewMode()) {
			value = HtmlUtil.extractText(value);
		}

		return value;
	}
}