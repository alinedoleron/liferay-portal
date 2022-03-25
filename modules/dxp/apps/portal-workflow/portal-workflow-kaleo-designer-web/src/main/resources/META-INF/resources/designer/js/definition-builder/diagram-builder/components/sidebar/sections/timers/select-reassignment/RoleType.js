/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * The contents of this file are subject to the terms of the Liferay Enterprise
 * Subscription License ("License"). You may not use this file except in
 * compliance with the License. You can obtain a copy of the License by
 * contacting Liferay, Inc. See the License for the specific language governing
 * permissions and limitations under the License, including but not limited to
 * distribution rights of the Software.
 */

import React from 'react';

import SidebarPanel from '../../../SidebarPanel';
import BaseRoleType from '../../shared-components/BaseRoleType';

const RoleType = (props) => {
	const {actionSectionsIndex, index, setActionSections} = props;
	const updateRoleType = (roleType) => {
		setActionSections((currentSections) => {
			const updatedSections = [...currentSections];

			updatedSections[actionSectionsIndex].assignmentType = 'roleType';
			updatedSections[actionSectionsIndex].roleName =
				roleType[index].roleName;
			updatedSections[actionSectionsIndex].roleType =
				roleType[index].roleType;

			return updatedSections;
		});
	};

	return (
		<SidebarPanel panelTitle={Liferay.Language.get('selected-role')}>
			<BaseRoleType
				buttonName={Liferay.Language.get('new-section')}
				inputLabel={Liferay.Language.get('role')}
				{...props}
				updateSelectedItem={updateRoleType}
			/>
		</SidebarPanel>
	);
};

export default RoleType;
