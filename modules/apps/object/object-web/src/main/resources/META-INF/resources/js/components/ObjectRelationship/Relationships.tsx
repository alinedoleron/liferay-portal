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

import {
	FrontendDataSet,

	// @ts-ignore

} from '@liferay/frontend-data-set-web';
import {
	API,
	ObjectVerticalBar,
	getLocalizableLabel,
} from '@liferay/object-js-components-web';
import React, {useEffect, useState} from 'react';

import {IFDSTableProps, defaultDataSetProps, fdsItem} from '../../utils/fds';
import ModalDeleteObjectRelationship from './ModalDeleteObjectRelationship';
import EditRelationship from './EditRelationship';
import {ModalAddObjectRelationship} from './ModalAddObjectRelationship';
import objectRelationshipHierarchyDataRenderer from './FDSDataRenderers/ObjectRelationshipHierarchyDataRenderer';

interface IRelationship extends IFDSTableProps {
	deletionTypes: any;
	ffOneToOneRelationshipConfigurationEnabled: boolean;
	hasUpdateObjectDefinitionPermission: boolean;
	parameterEndpoint: any;
	parameterRequired: boolean;
}

export default function Relationships({
	apiURL,
	creationMenu,
	deletionTypes,
	ffOneToOneRelationshipConfigurationEnabled,
	formName,
	hasUpdateObjectDefinitionPermission,
	id,
	items,
	objectDefinitionExternalReferenceCode,
	parameterEndpoint,
	parameterRequired,
}: IRelationship) {
	const [showAddModalRelationship, setShowAddModalRelationship] = useState<boolean>(false);
	const [showVerticalBar, setShowVerticalBar] = useState<boolean>(false);
	const [showDeletionModal, setShowDeletionModal] = useState<boolean>(false);
	const [
		showDeletionNotAllowedModal,
		setShowDeletionNotAllowedModal,
	] = useState<boolean>(false);
	const [
		deletedObjectRelationship,
		setDeletedObjectRelationship,
	] = useState<ObjectRelationship | null>(null);
	const [triggerSideBarAnimation, setTriggerSideBarAnimation] = useState<
		boolean
	>(false);

	const [creationLanguageId, setCreationLanguageId] = useState<
		Liferay.Language.Locale
	>();

	const [objectRelationshipEdited, setObjectRelationshipEdited] = useState<
		ObjectRelationship
	>();

	const verticalBarItems = [
		{
			title: 'editObjectFieldSideBar',
		},
	];

	useEffect(() => {
		Liferay.on('addObjectRelationship', () => setShowAddModalRelationship(true));

		return () => Liferay.detach('addObjectRelationship');
	}, []);

	useEffect(() => {
		const makeFetch = async () => {
			const objectDefinition = await API.getObjectDefinitionByExternalReferenceCode(
				objectDefinitionExternalReferenceCode
			);

			setCreationLanguageId(objectDefinition.defaultLanguageId);
		};

		makeFetch();
	}, [objectDefinitionExternalReferenceCode]);


	function closeVerticalBar() {
		setTriggerSideBarAnimation(false);
		setTimeout(() => {
			setShowVerticalBar(false);
		}, 500);
	}

	const handleEditField = (itemData: ObjectRelationship) => {
		setShowVerticalBar(true);
		setTriggerSideBarAnimation(true);
		setObjectRelationshipEdited(itemData);
	};

	function objectRelationshipLabelDataRenderer({
		itemData,
		value,
	}: fdsItem<ObjectRelationship>) {
		return (
			<div className="table-list-title">
				<a href="#" onClick={() => handleEditField(itemData)}>
					{getLocalizableLabel(
						creationLanguageId as Liferay.Language.Locale,
						value
					)}
				</a>
			</div>
		);
	}

	const dataSetProps = {
		...defaultDataSetProps,
		apiURL,
		creationMenu,
		customDataRenderers: {
			objectRelationshipHierarchyDataRenderer,
			objectRelationshipLabelDataRenderer,
		},
		formName,
		id,
		itemsActions: items,
		namespace:
			'_com_liferay_object_web_internal_object_definitions_portlet_ObjectDefinitionsPortlet_',
		onActionDropdownItemClick({
			action,
			itemData,
		}: {
			action: {data: {id: string}};
			itemData: ObjectRelationship;
		}) {
			if (action.data.id === 'deleteObjectRelationship') {
				const makeFetch = async () => {
						await API.deleteObjectRelationships(itemData.id);
		
						Liferay.Util.openToast({
							message: Liferay.Language.get(
								'relationship-was-deleted-successfully'
							),
						});
		
						setTimeout(() => window.location.reload(), 1500);
					}

				makeFetch();

			}

			if (action.data.id === 'editRelationship') {
				handleEditField(itemData);
			}
		},
		portletId:
			'com_liferay_object_web_internal_object_definitions_portlet_ObjectDefinitionsPortlet',
		showManagementBar: true,
		showPagination: true,
		showSearch: true,
		style: 'fluid' as 'fluid',
		views: [
			{
				contentRenderer: 'table',
				label: 'Table',
				name: 'table',
				schema: {
					fields: [
						{
							contentRenderer: 'objectRelationshipLabelDataRenderer',
							expand: false,
							fieldName: 'label',
							label: Liferay.Language.get('label'),
							localizeLabel: true,
							sortable: false,
						},
						{
							expand: false,
							fieldName: 'objectDefinitionName2',
							label: Liferay.Language.get('related-object'),
							localizeLabel: true,
							sortable: false,
						},
						{
							expand: false,
							fieldName: 'type',
							label: Liferay.Language.get('type'),
							localizeLabel: true,
							sortable: false,
						},
						{
							contentRenderer: 'objectRelationshipHierarchyDataRenderer',
							expand: false,
							fieldName: 'hierarchy',
							label: Liferay.Language.get('hierarchy'),
							localizeLabel: true,
							sortable: false,
						},
					],
				},
				thumbnail: 'table',
			},
		],
	};

	return (
		<>
			<FrontendDataSet {...dataSetProps} />
			{showVerticalBar && (
				<ObjectVerticalBar
					triggerSideBarAnimation={triggerSideBarAnimation}
					verticalBaritems={verticalBarItems}
				>
					<EditRelationship
						closeVerticalBar={closeVerticalBar}
						deletionTypes={deletionTypes}
						hasUpdateObjectDefinitionPermission={
							hasUpdateObjectDefinitionPermission
						}
						objectRelationshipEdited={
							objectRelationshipEdited as ObjectRelationship
						}
						parameterEndpoint={parameterEndpoint}
						parameterRequired={parameterRequired}
					/>
				</ObjectVerticalBar>
			)}
			{showAddModalRelationship && (
				<ModalAddObjectRelationship
					ffOneToOneRelationshipConfigurationEnabled={
						ffOneToOneRelationshipConfigurationEnabled
					}
					objectDefinitionExternalReferenceCode={
						objectDefinitionExternalReferenceCode
					}
					onVisibilityChange={setShowAddModalRelationship}
					parameterRequired={parameterRequired}
				/>
			)}

			{showDeletionModal && (
				<ModalDeleteObjectRelationship
					objectRelationship={deletedObjectRelationship as ObjectRelationship}
					setModalVisibility={setShowDeletionModal}
					setObjectRelationship={setDeletedObjectRelationship}
					showDeletionNotAllowedModal={showDeletionNotAllowedModal}
				/>
			)}
		</>
	);
}
