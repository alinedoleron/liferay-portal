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

package com.liferay.notification.internal.type;

import com.liferay.counter.kernel.service.CounterLocalService;
import com.liferay.notification.constants.NotificationConstants;
import com.liferay.notification.model.NotificationRecipientSetting;
import com.liferay.notification.service.NotificationRecipientSettingLocalService;
import com.liferay.notification.type.BaseNotificationType;
import com.liferay.notification.type.NotificationContext;
import com.liferay.notification.type.NotificationType;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONFactory;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.model.User;
import com.liferay.portal.kernel.model.UserNotificationDeliveryConstants;
import com.liferay.portal.kernel.service.UserNotificationEventLocalService;
import com.liferay.portal.kernel.util.HashMapBuilder;
import com.liferay.portal.vulcan.util.TransformUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

/**
 * @author Feliphe Marinho
 */
@Component(
	immediate = true,
	property = "notification.type.key=" + NotificationConstants.TYPE_USER_NOTIFICATION,
	service = NotificationType.class
)
public class UserNotificationType extends BaseNotificationType {

	@Override
	public List<NotificationRecipientSetting>
		createNotificationRecipientSettings(
			long notificationRecipientId, Object[] recipients, User user) {

		List<NotificationRecipientSetting> notificationRecipientSettings =
			new ArrayList<>();

		for (Object recipient : recipients) {
			Map<String, Object> recipientMap = (Map<String, Object>)recipient;

			for (Map.Entry<String, Object> entry : recipientMap.entrySet()) {
				NotificationRecipientSetting notificationRecipientSetting =
					_notificationRecipientSettingLocalService.
						createNotificationRecipientSetting(
							_counterLocalService.increment());

				notificationRecipientSetting.setCompanyId(user.getCompanyId());
				notificationRecipientSetting.setUserId(user.getUserId());
				notificationRecipientSetting.setUserName(user.getFullName());

				notificationRecipientSetting.setNotificationRecipientId(
					notificationRecipientId);
				notificationRecipientSetting.setName(entry.getKey());
				notificationRecipientSetting.setValue(
					String.valueOf(entry.getValue()));

				notificationRecipientSettings.add(notificationRecipientSetting);
			}
		}

		return notificationRecipientSettings;
	}

	@Override
	public String getType() {
		return NotificationConstants.TYPE_USER_NOTIFICATION;
	}

	@Override
	public void sendNotification(NotificationContext notificationContext)
		throws PortalException {

		JSONObject jsonObject = _jsonFactory.createJSONObject();

		_userNotificationEventLocalService.sendUserNotificationEvents(
			notificationContext.getUserId(), notificationContext.getPortletId(),
			UserNotificationDeliveryConstants.TYPE_WEBSITE,
			jsonObject.put(
				"className", notificationContext.getClassName()
			).put(
				"classPK", notificationContext.getClassPK()
			).put(
				"externalReferenceCode",
				notificationContext.getExternalReferenceCode()
			).put(
				"notificationMessage", "test"
			).put(
				"portletId", notificationContext.getPortletId()
			));
	}

	@Override
	public Object[] toRecipients(
		List<NotificationRecipientSetting> notificationRecipientSettings) {

		return TransformUtil.transformToArray(
			notificationRecipientSettings,
			notificationRecipientSetting -> HashMapBuilder.put(
				notificationRecipientSetting.getName(),
				notificationRecipientSetting.getValue()
			).build(),
			Object.class);
	}

	@Reference
	private CounterLocalService _counterLocalService;

	@Reference
	private JSONFactory _jsonFactory;

	@Reference
	private NotificationRecipientSettingLocalService
		_notificationRecipientSettingLocalService;

	@Reference
	private UserNotificationEventLocalService
		_userNotificationEventLocalService;

}