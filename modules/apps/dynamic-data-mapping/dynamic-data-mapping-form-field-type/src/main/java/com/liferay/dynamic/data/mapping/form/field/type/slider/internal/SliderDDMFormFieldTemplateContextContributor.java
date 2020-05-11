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

		parameters.put(
            "min", ddmFormField.getProperty("min"));
        parameters.put("max", ddmFormField.getProperty("max"));

		return parameters;
    }
}