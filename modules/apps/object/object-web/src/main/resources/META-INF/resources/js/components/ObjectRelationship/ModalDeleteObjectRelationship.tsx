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

import {ClayModalProvider, useModal} from '@clayui/modal';
import {Observer} from '@clayui/modal/lib/types';
import {API} from '@liferay/object-js-components-web';
import {sub} from 'frontend-js-web';
import React, {useCallback, useEffect, useState} from 'react';

import DangerModal from '../DangerModal';
import WarningModal from '../WarningModal';

interface ModalDeleteObjectRelationshipProps {
	objectRelationship: ObjectRelationship;
	setModalVisibility: (value: boolean) => void;
	setObjectRelationship: (values: ObjectRelationship | null) => void;
	showDeletionNotAllowedModal: boolean;
}



export default function ModalDeleteObjectRelationship({
	objectRelationship,
	setModalVisibility,
	setObjectRelationship,
	showDeletionNotAllowedModal,
}: ModalDeleteObjectRelationshipProps) {

	const {observer, onClose, open} = useModal({
		onClose: () => setModalVisibility(false),
	});

	return ( 
		<ClayModalProvider>
			{objectRelationship.reverse ? (
				<WarningModal
					observer={observer}
					onClose={onClose}
					title={Liferay.Language.get('deletion-not-allowed')}
				>
					<div>
						{Liferay.Language.get(
							'you-do-not-have-permission-to-delete-this-relationship'
						)}
					</div>

					<div>
						{Liferay.Language.get(
							'you-cannot-delete-a-relationship-from-here'
						)}
					</div>
				</WarningModal>
			) : (
				<DangerModal
					errorMessage={Liferay.Language.get(
						'input-and-relationship-name-do-not-match'
					)}
					observer={observer}
					onClose={onClose}
					onDelete={() => {}}
					placeholder={Liferay.Language.get('confirm-relationship-name')}
					title={Liferay.Language.get('delete-relationship')}
					token={objectRelationship.name}
				>
					<p>
						{Liferay.Language.get(
							'this-action-cannot-be-undone-and-will-permanently-delete-all-related-fields-from-this-relationship'
						)}
					</p>

					<p>{Liferay.Language.get('it-may-affect-many-records')}</p>

					<p
						dangerouslySetInnerHTML={{
							__html: sub(
								Liferay.Language.get(
									'please-type-the-relationship-name-x-to-confirm'
								),
								`<strong>${objectRelationship.name}</strong>`
							),
						}}
					/>
				</DangerModal>)}
				</ClayModalProvider>
		
	);
}
