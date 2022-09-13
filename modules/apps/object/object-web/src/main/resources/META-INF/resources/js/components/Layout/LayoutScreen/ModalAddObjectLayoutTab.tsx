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

import ClayButton from '@clayui/button';
import ClayForm from '@clayui/form';
import ClayLabel from '@clayui/label';
import ClayModal from '@clayui/modal';
import {Observer} from '@clayui/modal/lib/types';
import {
	AutoComplete,
	FormError,
	Input,
	SingleSelect,
	stringIncludesQuery,
	useForm,
} from '@liferay/object-js-components-web';
import React, {useEffect, useMemo, useState} from 'react';

import {separateCamelCase} from '../../../utils/string';
import {TYPES as EVENT_TYPES, useLayoutContext} from '../objectLayoutContext';
import {TabType, TObjectLayoutTab, TObjectRelationship} from '../types';

import './ModalAddObjectLayoutTab.scss';

type TTabTypes = {
	description: string;
	disabled: boolean;
	label: string;
	type: TabType;
};
type TLabelInfo = {
	displayType: 'info' | 'secondary' | 'success';
	labelContent: string;
};

const TYPES = {
	ENTRY_HISTORY: 'entry-history',
	FIELDS: 'fields',
	RELATIONSHIPS: 'relationships',
};

const types: TTabTypes[] = [
	{
		description: Liferay.Language.get(
			'display-fields-and-one-to-one-relationships'
		),
		disabled: false,
		label: Liferay.Language.get('fields'),
		type: 'fields',
	},
	{
		description: Liferay.Language.get('display-multiple-relationships'),
		disabled: true,
		label: Liferay.Language.get('relationships'),
		type: 'relationship',
	},
	{
		description: Liferay.Language.get(
			'display-the-history-of-changes-of-the-object-entry'
		),
		disabled: true,
		label: Liferay.Language.get('entry-history'),
		type: 'history',
	},
];

interface IModalAddObjectLayoutTabProps
	extends React.HTMLAttributes<HTMLElement> {
	observer: Observer;
	onClose: () => void;
}

const defaultLanguageId = Liferay.ThemeDisplay.getDefaultLanguageId();

function getRelationshipInfo(reverse: boolean, type: string): TLabelInfo {
	if (Liferay.FeatureFlags['LPS-158478']) {
		return {
			displayType: reverse ? 'info' : 'success',
			labelContent: reverse
				? Liferay.Language.get('child')
				: Liferay.Language.get('parent'),
		};
	}
	else {
		return {
			displayType: 'secondary',
			labelContent: type,
		};
	}
}

const ModalAddObjectLayoutTab: React.FC<IModalAddObjectLayoutTabProps> = ({
	observer,
	onClose,
}) => {
	const [
		{

			// enableEntryHistory,

			objectLayout: {objectLayoutTabs},
			objectRelationships,
		},
		dispatch,
	] = useLayoutContext();
	const [selectedType, setSelectedType] = useState(TYPES.FIELDS);
	const [query, setQuery] = useState<string>('');
	const [selectedRelationship, setSelectedRelationship] = useState<
		TObjectRelationship
	>();

	const filteredRelationships = useMemo(() => {
		return objectRelationships.filter(
			({inLayout, label, name}) =>
				(stringIncludesQuery(
					label[defaultLanguageId] as string,
					query
				) ??
					stringIncludesQuery(name, query)) &&
				!inLayout
		);
	}, [objectRelationships, query]);

	useEffect(() => {
		types.map((type, index) => {
			if (index > 0) {
				type.disabled = !objectLayoutTabs.length;
			}
		});
	}, [objectLayoutTabs]);

	const selectedRelationshipInfo: TLabelInfo = useMemo(() => {
		return getRelationshipInfo(
			selectedRelationship?.reverse ?? false,
			selectedRelationship?.type ?? ''
		);
	}, [selectedRelationship]);

	const onSubmit = (values: TObjectLayoutTab) => {
		dispatch({
			payload: {
				name: {
					[defaultLanguageId]: values.name[defaultLanguageId],
				},
				objectRelationshipId: values.objectRelationshipId,
				type: values.type,
			},
			type: EVENT_TYPES.ADD_OBJECT_LAYOUT_TAB,
		});

		onClose();
	};

	const onValidate = (values: Partial<TObjectLayoutTab>) => {
		const errors: FormError<TObjectLayoutTab> = {};

		if (!values.name?.[defaultLanguageId]) {
			errors.name = Liferay.Language.get('required');
		}

		if (
			!values.objectRelationshipId &&
			selectedType === TYPES.RELATIONSHIPS
		) {
			errors.objectRelationshipId = Liferay.Language.get('required');
		}

		return errors;
	};

	const {errors, handleSubmit, setValues, values} = useForm<TObjectLayoutTab>(
		{
			initialValues: {},
			onSubmit,
			validate: onValidate,
		}
	);

	const handleTypeChange = async (option: TTabTypes) => {
		setSelectedType(option.label.toLocaleLowerCase());
		setValues({
			type: option.type
		})
	};

	return (
		<ClayModal observer={observer}>
			<ClayForm onSubmit={handleSubmit}>
				<ClayModal.Header>
					{Liferay.Language.get('add-tab')}
				</ClayModal.Header>

				<ClayModal.Body>
					<Input
						error={errors.name}
						id="inputName"
						label={Liferay.Language.get('label')}
						name="name"
						onChange={({target: {value}}) => {
							setValues({
								name: {
									[defaultLanguageId]: value,
								},
							});
						}}
						required
						value={values.name?.[defaultLanguageId]}
					/>

					<ClayForm.Group>
						<SingleSelect<TTabTypes>
							label={Liferay.Language.get('type')}
							onChange={handleTypeChange}
							options={types}
							required
							value={
								types.find(
									({label}) =>
										label.toLocaleLowerCase() ===
										selectedType
								)?.label
							}
						/>
					</ClayForm.Group>

					{selectedType === TYPES.RELATIONSHIPS && (
						<AutoComplete
							contentRight={
								<ClayLabel
									className="label-inside-custom-select"
									displayType={
										selectedRelationshipInfo.displayType
									}
								>
									{selectedRelationshipInfo.labelContent}
								</ClayLabel>
							}
							emptyStateMessage={Liferay.Language.get(
								'there-are-no-relationship-for-this-object'
							)}
							error={errors.objectRelationshipId}
							items={filteredRelationships}
							label={Liferay.Language.get('relationship')}
							onChangeQuery={setQuery}
							onSelectItem={(item) => {
								const {type} = item;
								const selectedItem = {
									...item,
									type: separateCamelCase(type),
								};

								setSelectedRelationship(selectedItem);
								setValues({
									objectRelationshipId: selectedItem.id,
								});
							}}
							query={query}
							required
							value={
								selectedRelationship?.label[
									defaultLanguageId
								] ?? selectedRelationship?.name
							}
						>
							{({label, name, reverse, type}) => {
								const relationshipInfo = getRelationshipInfo(
									reverse,
									type
								);

								return (
									<div className="d-flex justify-content-between">
										<div>
											{label[defaultLanguageId] ?? name}
										</div>

										<div className="object-web-relationship-item-label">
											<ClayLabel
												displayType={
													relationshipInfo.displayType
												}
											>
												{relationshipInfo.labelContent}
											</ClayLabel>
										</div>
									</div>
								);
							}}
						</AutoComplete>
					)}
				</ClayModal.Body>

				<ClayModal.Footer
					last={
						<ClayButton.Group spaced>
							<ClayButton
								displayType="secondary"
								onClick={onClose}
							>
								{Liferay.Language.get('cancel')}
							</ClayButton>

							<ClayButton type="submit">
								{Liferay.Language.get('save')}
							</ClayButton>
						</ClayButton.Group>
					}
				/>
			</ClayForm>
		</ClayModal>
	);
};

export default ModalAddObjectLayoutTab;
