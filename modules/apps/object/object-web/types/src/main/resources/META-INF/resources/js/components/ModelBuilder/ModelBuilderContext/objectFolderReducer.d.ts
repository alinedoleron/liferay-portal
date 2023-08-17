/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {Node} from 'react-flow-renderer';
import {
	LeftSidebarItemType,
	ObjectDefinitionNodeData,
	ObjectFieldNode,
	RightSidebarType,
	TAction,
	TState,
} from '../types';
export declare function ObjectFolderReducer(
	state: TState,
	action: TAction
):
	| {
			elements: Node<ObjectDefinitionNodeData>[];
			leftSidebarItems: LeftSidebarItemType[];
			selectedDefinitionNode: {
				data: {
					creationLanguageId: Liferay.Language.Locale;
					externalReferenceCode: string;
					hasObjectDefinitionDeleteResourcePermission: boolean;
					hasObjectDefinitionManagePermissionsResourcePermission: boolean;
					hasObjectDefinitionUpdateResourcePermission: boolean;
					hasObjectDefinitionViewResourcePermission: boolean;
					id: number;
					isLinkedNode: boolean;
					label: string;
					name: string;
					nodeSelected: boolean;
					objectFields: ObjectFieldNode[];
					status: {
						code: number;
						label: string;
						label_i18n: string;
					};
					system: boolean;
				};
				id: string;
				position: {
					x: number;
					y: number;
				};
				type: string;
			};
			showChangesSaved: boolean;
			objectDefinitions: ObjectDefinition[];
			objectFolders: ObjectFolder[];
			rightSidebarType: RightSidebarType;
			selectedFolderERC: string;
			selectedObjectRelationship: ObjectRelationship;
			storages: LabelTypeObject[];
			viewApiUrl: string;
	  }
	| {
			elements: any;
			leftSidebarItems: LeftSidebarItemType[];
			objectDefinitions: ObjectDefinition[];
			objectFolders: ObjectFolder[];
			rightSidebarType: RightSidebarType;
			selectedDefinitionNode: Node<ObjectDefinitionNodeData>;
			selectedFolderERC: string;
			selectedObjectRelationship: ObjectRelationship;
			showChangesSaved: boolean;
			storages: LabelTypeObject[];
			viewApiUrl: string;
	  };
