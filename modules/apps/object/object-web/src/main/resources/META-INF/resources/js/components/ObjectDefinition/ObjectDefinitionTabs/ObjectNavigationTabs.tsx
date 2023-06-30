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

import ClayTabs from '@clayui/tabs';
import {FormError, SidebarCategory} from '@liferay/object-js-components-web';
import React, {useState} from 'react';

import './ObjectNavigationTabs.scss';
import Layouts from '../../Layout/Layouts';
import EditObjectDetails, {
	KeyValuePair,
} from '../../ObjectDetails/EditObjectDetails';
import Fields from '../../ObjectField/Fields';
import {CreationMenu} from '../EditObjectDefinition';
import Relationships from '../../ObjectRelationship/Relationships';

interface ObjectNavigationProps {
	baseResourceURL: string;
	companyKeyValuePair: KeyValuePair[];
	creationLanguageId: Liferay.Language.Locale;
	dbTableName: string;
	deletionTypes: any;
	errors: FormError<ObjectDefinition>;
	externalReferenceCode: string;
	ffOneToOneRelationshipConfigurationEnabled: boolean;
	fieldDropdownItems: [];
	fieldId: string;
	fieldsApiURL: string;
	fieldsCreationMenu: CreationMenu;
	filterOperators: TFilterOperators;
	forbiddenChars: string[];
	forbiddenLastChars: string[];
	forbiddenNames: string[];
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
	hasPublishObjectPermission: boolean;
	hasUpdateObjectDefinitionPermission: boolean;
	isDefaultStorageType: boolean;
	isApproved: boolean;
	isDefaultStorageType: boolean;
	label: LocalizedValue<string>;
	layoutDropdownitems: [];
	layoutFDSId: string;
	layoutsApiURL: string;
	layoutsCreationMenu: CreationMenu;
	nonRelationshipObjectFieldsInfo: {
		label: LocalizedValue<string>;
		name: string;
	}[];
	objectDefinitionId: number;
	objectFieldTypes: ObjectFieldType[];
	objectFields: ObjectField[];
	objectFieldId: number;
	parameterEndpoint: string;
	parameterRequired: boolean;
	pluralLabel: LocalizedValue<string>;
	portletNamespace: string;
	readOnly: boolean;
	relationshipCreationMenu: {
		primaryItems?: any[];
		secondaryItems?: any[];
	};
	relationshipDropdownItems: [];
	relationshipId: string;
	relationshipsApiURL: string;
	screenNavigationCategoryKey: string;
	setValues: (values: Partial<ObjectDefinition>) => void;
	shortName: string;
	sidebarElements: SidebarCategory[];
	siteKeyValuePair: KeyValuePair[];
	storageTypes: LabelValueObject[];
	system: boolean;
	values: Partial<ObjectDefinition>;
	workflowStatusJSONArray: LabelValueObject[];
}

export function ObjectNavigationTabs({
	baseResourceURL,
	companyKeyValuePair,
	creationLanguageId,
	dbTableName,
	deletionTypes,
	errors,
	externalReferenceCode,
	ffOneToOneRelationshipConfigurationEnabled,
	fieldDropdownItems,
	fieldId,
	fieldsApiURL,
	fieldsCreationMenu,
	filterOperators,
	forbiddenChars,
	forbiddenLastChars,
	forbiddenNames,
	handleChange,
	hasPublishObjectPermission,
	hasUpdateObjectDefinitionPermission,
	isApproved,
	isDefaultStorageType,
	label,
	layoutDropdownitems,
	layoutFDSId,
	layoutsApiURL,
	layoutsCreationMenu,
	nonRelationshipObjectFieldsInfo,
	objectDefinitionId,
	objectFieldTypes,
	objectFields,
	parameterEndpoint,
	parameterRequired,
	pluralLabel,
	portletNamespace,
	readOnly,
	relationshipCreationMenu,
	relationshipDropdownItems,
	relationshipId,
	relationshipsApiURL,
	setValues,
	shortName,
	sidebarElements,
	siteKeyValuePair,
	storageTypes,
	values,
	workflowStatusJSONArray,
}: ObjectNavigationProps) {
	const [active, setActive] = useState(2);

	return (
		<>
			<div className="lfr__objects-navigation-tabs">
				<ClayTabs
					active={active}
					className="container-fluid container-fluid-max-xl"
					onActiveChange={setActive}
				>
					<ClayTabs.Item
						innerProps={{
							'aria-controls': 'tabpanel-1',
						}}
					>
						{Liferay.Language.get('details')}
					</ClayTabs.Item>

					<ClayTabs.Item
						innerProps={{
							'aria-controls': 'tabpanel-2',
						}}
					>
						{Liferay.Language.get('fields')}
					</ClayTabs.Item>

					<ClayTabs.Item
						innerProps={{
							'aria-controls': 'tabpanel-3',
						}}
					>
						{Liferay.Language.get('layouts')}
					</ClayTabs.Item>

					<ClayTabs.Item
						innerProps={{
							'aria-controls': 'tabpanel-4',
						}}
					>
						{Liferay.Language.get('relationships')}
					</ClayTabs.Item>
				</ClayTabs>
			</div>

			<div className="lfr__objects-navigation-tabs-content">
				<ClayTabs.Content activeIndex={active} fade>
					<ClayTabs.TabPane aria-labelledby="details-tab">
						<EditObjectDetails
							companyKeyValuePair={companyKeyValuePair}
							dbTableName={dbTableName}
							errors={errors}
							externalReferenceCode={externalReferenceCode}
							handleChange={handleChange}
							hasPublishObjectPermission={
								hasPublishObjectPermission
							}
							hasUpdateObjectDefinitionPermission={
								hasUpdateObjectDefinitionPermission
							}
							isApproved={isApproved}
							label={label}
							nonRelationshipObjectFieldsInfo={
								nonRelationshipObjectFieldsInfo
							}
							objectDefinitionId={objectDefinitionId}
							objectFields={objectFields}
							pluralLabel={pluralLabel}
							portletNamespace={portletNamespace}
							setValues={setValues}
							shortName={shortName}
							siteKeyValuePair={siteKeyValuePair}
							storageTypes={storageTypes}
							values={values}
						/>
					</ClayTabs.TabPane>

					<ClayTabs.TabPane aria-labelledby="fields-tab">
						<Fields
							apiURL={fieldsApiURL}
							baseResourceURL={baseResourceURL}
							creationLanguageId={creationLanguageId}
							creationMenu={fieldsCreationMenu}
							filterOperators={filterOperators}
							forbiddenChars={forbiddenChars}
							forbiddenLastChars={forbiddenLastChars}
							forbiddenNames={forbiddenNames}
							id={fieldId}
							isApproved={isApproved}
							isDefaultStorageType={isDefaultStorageType}
							items={fieldDropdownItems}
							objectDefinitionExternalReferenceCode={
								externalReferenceCode
							}
							objectFieldTypes={objectFieldTypes}
							objectName={shortName}
							readOnly={readOnly}
							sidebarElements={sidebarElements}
							workflowStatusJSONArray={workflowStatusJSONArray}
						/>
					</ClayTabs.TabPane>

					<ClayTabs.TabPane aria-labelledby="layouts-tab">
						<Layouts
							apiURL={layoutsApiURL}
							creationMenu={layoutsCreationMenu}
							id={layoutFDSId}
							items={layoutDropdownitems}
							objectDefinitionExternalReferenceCode={
								externalReferenceCode
							}
							objectFieldTypes={objectFieldTypes}
							readOnly={readOnly}/>
					</ClayTabs.TabPane>
							
					<ClayTabs.TabPane aria-labelledby="relationships-tab">
						<Relationships
							apiURL={relationshipsApiURL}
							creationMenu={relationshipCreationMenu}
							deletionTypes={deletionTypes}
							ffOneToOneRelationshipConfigurationEnabled={
								ffOneToOneRelationshipConfigurationEnabled
							}
							hasUpdateObjectDefinitionPermission={
								hasPublishObjectPermission
							}
							id={relationshipId}
							items={relationshipDropdownItems}
							objectDefinitionExternalReferenceCode={
								externalReferenceCode
							}
							parameterEndpoint={parameterEndpoint}
							parameterRequired={parameterRequired}
						/>
					</ClayTabs.TabPane>
				</ClayTabs.Content>
			</div>
		</>
	);
}
