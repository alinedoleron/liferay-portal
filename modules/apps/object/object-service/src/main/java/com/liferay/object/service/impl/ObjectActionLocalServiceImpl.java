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

package com.liferay.object.service.impl;

import com.liferay.dynamic.data.mapping.expression.CreateExpressionRequest;
import com.liferay.dynamic.data.mapping.expression.DDMExpressionFactory;
import com.liferay.object.action.executor.ObjectActionExecutorRegistry;
import com.liferay.object.admin.rest.dto.v1_0.util.ObjectActionUtil;
import com.liferay.object.constants.ObjectActionConstants;
import com.liferay.object.constants.ObjectActionExecutorConstants;
import com.liferay.object.constants.ObjectActionTriggerConstants;
import com.liferay.object.exception.ObjectActionConditionExpressionException;
import com.liferay.object.exception.ObjectActionExecutorKeyException;
import com.liferay.object.exception.ObjectActionNameException;
import com.liferay.object.exception.ObjectActionParametersException;
import com.liferay.object.exception.ObjectActionTriggerKeyException;
import com.liferay.object.model.ObjectAction;
import com.liferay.object.model.ObjectDefinition;
import com.liferay.object.model.ObjectField;
import com.liferay.object.service.ObjectFieldLocalService;
import com.liferay.object.service.base.ObjectActionLocalServiceBaseImpl;
import com.liferay.object.service.persistence.ObjectDefinitionPersistence;
import com.liferay.portal.aop.AopService;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactory;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.json.JSONUtil;
import com.liferay.portal.kernel.language.LanguageUtil;
import com.liferay.portal.kernel.messaging.MessageBus;
import com.liferay.portal.kernel.model.SystemEventConstants;
import com.liferay.portal.kernel.model.User;
import com.liferay.portal.kernel.search.Indexable;
import com.liferay.portal.kernel.search.IndexableType;
import com.liferay.portal.kernel.service.UserLocalService;
import com.liferay.portal.kernel.systemevent.SystemEvent;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.LocaleUtil;
import com.liferay.portal.kernel.util.UnicodeProperties;
import com.liferay.portal.kernel.util.Validator;

import groovy.lang.GroovyShell;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

/**
 * @author Marco Leo
 */
@Component(
	property = "model.class.name=com.liferay.object.model.ObjectAction",
	service = AopService.class
)
public class ObjectActionLocalServiceImpl
	extends ObjectActionLocalServiceBaseImpl {

	@Indexable(type = IndexableType.REINDEX)
	@Override
	public ObjectAction addObjectAction(
			long userId, long objectDefinitionId, boolean active,
			String conditionExpression, String description, String name,
			String objectActionExecutorKey, String objectActionTriggerKey,
			UnicodeProperties parametersUnicodeProperties)
		throws PortalException {

		_validate(
			conditionExpression, name, objectActionExecutorKey,
			objectActionTriggerKey, parametersUnicodeProperties);

		ObjectDefinition objectDefinition =
			_objectDefinitionPersistence.findByPrimaryKey(objectDefinitionId);

		ObjectAction objectAction = objectActionPersistence.create(
			counterLocalService.increment());

		User user = _userLocalService.getUser(userId);

		objectAction.setCompanyId(user.getCompanyId());
		objectAction.setUserId(user.getUserId());
		objectAction.setUserName(user.getFullName());

		objectAction.setObjectDefinitionId(
			objectDefinition.getObjectDefinitionId());
		objectAction.setActive(active);
		objectAction.setConditionExpression(conditionExpression);
		objectAction.setDescription(description);
		objectAction.setName(name);
		objectAction.setObjectActionExecutorKey(objectActionExecutorKey);
		objectAction.setObjectActionTriggerKey(objectActionTriggerKey);
		objectAction.setParameters(parametersUnicodeProperties.toString());
		objectAction.setStatus(ObjectActionConstants.STATUS_NEVER_RAN);

		return objectActionPersistence.update(objectAction);
	}

	@Indexable(type = IndexableType.DELETE)
	@Override
	public ObjectAction deleteObjectAction(long objectActionId)
		throws PortalException {

		ObjectAction objectAction = objectActionPersistence.findByPrimaryKey(
			objectActionId);

		return deleteObjectAction(objectAction);
	}

	@Indexable(type = IndexableType.DELETE)
	@Override
	@SystemEvent(type = SystemEventConstants.TYPE_DELETE)
	public ObjectAction deleteObjectAction(ObjectAction objectAction) {
		return objectActionPersistence.remove(objectAction);
	}

	@Override
	public void deleteObjectActions(long objectDefinitionId)
		throws PortalException {

		for (ObjectAction objectAction :
				objectActionPersistence.findByObjectDefinitionId(
					objectDefinitionId)) {

			objectActionLocalService.deleteObjectAction(objectAction);
		}
	}

	@Override
	public List<ObjectAction> getObjectActions(long objectDefinitionId) {
		return objectActionPersistence.findByObjectDefinitionId(
			objectDefinitionId);
	}

	@Override
	public List<ObjectAction> getObjectActions(
		long objectDefinitionId, String objectActionTriggerKey) {

		return objectActionPersistence.findByO_A_OATK(
			objectDefinitionId, true, objectActionTriggerKey);
	}

	@Indexable(type = IndexableType.REINDEX)
	@Override
	public ObjectAction updateObjectAction(
			long objectActionId, boolean active, String conditionExpression,
			String description, String name, String objectActionExecutorKey,
			String objectActionTriggerKey,
			UnicodeProperties parametersUnicodeProperties)
		throws PortalException {

		_validate(
			conditionExpression, name, objectActionExecutorKey,
			objectActionTriggerKey, parametersUnicodeProperties);

		ObjectAction objectAction = objectActionPersistence.findByPrimaryKey(
			objectActionId);

		objectAction.setActive(active);
		objectAction.setConditionExpression(conditionExpression);
		objectAction.setDescription(description);
		objectAction.setName(name);
		objectAction.setObjectActionExecutorKey(objectActionExecutorKey);
		objectAction.setObjectActionTriggerKey(objectActionTriggerKey);
		objectAction.setParameters(parametersUnicodeProperties.toString());
		objectAction.setStatus(ObjectActionConstants.STATUS_NEVER_RAN);

		return objectActionPersistence.update(objectAction);
	}

	@Indexable(type = IndexableType.REINDEX)
	@Override
	public ObjectAction updateStatus(long objectActionId, int status)
		throws PortalException {

		ObjectAction objectAction = objectActionPersistence.findByPrimaryKey(
			objectActionId);

		objectAction.setStatus(status);

		return objectActionPersistence.update(objectAction);
	}

	private void _validate(
			String conditionExpression, String name,
			String objectActionExecutorKey, String objectActionTriggerKey,
			UnicodeProperties parametersUnicodeProperties)
		throws PortalException {

		if (Validator.isNull(name)) {
			throw new ObjectActionNameException();
		}

		if (!_objectActionExecutorRegistry.hasObjectActionExecutor(
				objectActionExecutorKey)) {

			throw new ObjectActionExecutorKeyException(objectActionExecutorKey);
		}

		if (!Objects.equals(
				objectActionTriggerKey,
				ObjectActionTriggerConstants.KEY_ON_AFTER_ADD) &&
			!Objects.equals(
				objectActionTriggerKey,
				ObjectActionTriggerConstants.KEY_ON_AFTER_DELETE) &&
			!Objects.equals(
				objectActionTriggerKey,
				ObjectActionTriggerConstants.KEY_ON_AFTER_UPDATE)) {

			if (Validator.isNotNull(conditionExpression)) {
				throw new ObjectActionConditionExpressionException();
			}

			if (!_messageBus.hasDestination(objectActionTriggerKey)) {
				throw new ObjectActionTriggerKeyException();
			}
		}

		JSONArray jsonArray = _jsonFactory.createJSONArray();

		if (Validator.isNotNull(conditionExpression)) {
			try {
				_ddmExpressionFactory.createExpression(
					CreateExpressionRequest.Builder.newBuilder(
						conditionExpression
					).build());
			}
			catch (Exception exception) {
				jsonArray.put(
					JSONUtil.put(
						"fieldName", "conditionExpression"
					).put(
						"message", LanguageUtil.get(LocaleUtil.getDefault(),"syntax-error")
					));
			}
		}

		Map<String, Object> parameters = ObjectActionUtil.toParameters(
			parametersUnicodeProperties);

		if (Objects.equals(
				objectActionExecutorKey,
				ObjectActionExecutorConstants.KEY_ADD_OBJECT_ENTRY)) {

			JSONArray predefinedValuesErrorMessages =
				_jsonFactory.createJSONArray();

			JSONArray predefinedValuesJSONArray = _jsonFactory.createJSONArray(
				parametersUnicodeProperties.get("predefinedValues"));

			List<ObjectField> objectFields =
				_objectFieldLocalService.getObjectFields(
					GetterUtil.getLong(
						parametersUnicodeProperties.get("objectDefinitionId")));

			Map<String, String> names = new HashMap<>();

			for (int i = 0; i < predefinedValuesJSONArray.length(); i++) {
				JSONObject jsonObject = predefinedValuesJSONArray.getJSONObject(
					i);

				names.put(
					jsonObject.getString("name"),
					jsonObject.getString("value"));

				ObjectField objectField =
					_objectFieldLocalService.fetchObjectField(
						GetterUtil.getLong(
							parametersUnicodeProperties.get(
								"objectDefinitionId")),
						jsonObject.getString("name"));

				if (objectField == null) {

					// TODO

					predefinedValuesErrorMessages.put(
						JSONUtil.put(
							"fieldName", objectField.getName()
						).put(
							"message", "invalid object field"
						));
				}

				String value = jsonObject.getString("value");

				if (Validator.isNull(value) ||
					jsonObject.getBoolean("inputAsValue")) {

					continue;
				}

				try {
					_ddmExpressionFactory.createExpression(
						CreateExpressionRequest.Builder.newBuilder(
							value
						).build());
				}
				catch (Exception exception) {
					predefinedValuesErrorMessages.put(
						JSONUtil.put(
							"fieldName", objectField.getName()
						).put(
							"message", LanguageUtil.get(LocaleUtil.getDefault(),"syntax-error")
						));
				}
			}

			for (ObjectField objectField : objectFields) {
				if (objectField.isRequired() &&
					(!names.containsKey(objectField.getName()) ||
					 Validator.isNull(names.get(objectField.getName())))) {

					predefinedValuesErrorMessages.put(
						JSONUtil.put(
							"fieldName", objectField.getName()
						).put(
							"message", LanguageUtil.get(LocaleUtil.getDefault(),"required")
						));
				}
			}

			if (!JSONUtil.isEmpty(predefinedValuesErrorMessages)) {
				jsonArray.put(
					JSONUtil.put(
						"fieldName", "predefinedValues"
					).put(
						"messages", predefinedValuesErrorMessages
					));
			}
		}
		else if (Objects.equals(
					objectActionExecutorKey,
					ObjectActionExecutorConstants.KEY_GROOVY)) {

			String script = GetterUtil.getString(parameters.get("script"));

			if (Validator.isNotNull(script)) {
				try {
					GroovyShell groovyShell = new GroovyShell();

					groovyShell.parse(script);
				}
				catch (Exception exception) {
					jsonArray.put(
						JSONUtil.put(
							"fieldName", "script"
						).put(
							"message", LanguageUtil.get(LocaleUtil.getDefault(),"syntax-error")
						));
				}
			}
		}
		else if (Objects.equals(
					objectActionExecutorKey,
					ObjectActionExecutorConstants.KEY_WEBHOOK)) {

			if (Validator.isNull(GetterUtil.getString(parameters.get("url")))) {
				jsonArray.put(
					JSONUtil.put(
						"fieldName", "url"
					).put(
						"message", LanguageUtil.get(LocaleUtil.getDefault(),"required")
					));
			}
		}

		if (!JSONUtil.isEmpty(jsonArray)) {
			throw new ObjectActionParametersException(jsonArray);
		}
	}

	@Reference
	private DDMExpressionFactory _ddmExpressionFactory;

	@Reference
	private JSONFactory _jsonFactory;

	@Reference
	private MessageBus _messageBus;

	@Reference
	private ObjectActionExecutorRegistry _objectActionExecutorRegistry;

	@Reference
	private ObjectDefinitionPersistence _objectDefinitionPersistence;

	@Reference
	private ObjectFieldLocalService _objectFieldLocalService;

	@Reference
	private UserLocalService _userLocalService;

}