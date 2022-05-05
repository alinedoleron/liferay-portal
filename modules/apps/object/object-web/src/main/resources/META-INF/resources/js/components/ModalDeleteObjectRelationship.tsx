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
import {fetch} from 'frontend-js-web';
import React, {useEffect, useState} from 'react';

import DangerModal from './DangerModal';

function ModalDeleteObjectRelationship({
	objectRelationship,
	observer,
	onClose,
	onDelete,
}: IProps) {

	// const WarningMessages = () => (
	// 	<>
	// 		<div>
	// 			{Liferay.Language.get(
	// 				'you-do-not-have-permission-to-delete-this-relationship'
	// 			)}
	// 		</div>
	// 		<div>
	// 			{Liferay.Language.get(
	// 				'to-delete-this-relationship-you-need-to-go-to-parent-relationship-side'
	// 			)}
	// 		</div>
	// 	</>
	// );

	return objectRelationship.reverse ? (
		<div />
	) : (
		<DangerModal
			errorMessage={Liferay.Language.get(
				'input-and-relationship-name-does-not-match'
			)}
			observer={observer}
			onClose={onClose}
			onDelete={onDelete(objectRelationship.objectRelationshipId)}
			title="delete-relationship"
			token={objectRelationship.name}
		>
			<p>
				{Liferay.Language.get(
					'this-action-cannot-be-undone-and-will-delete-permanently-all-related-fields-from-this-relationship'
				)}
			</p>

			<p>{Liferay.Language.get('it-may-affect-many-records')}</p>

			<p
				dangerouslySetInnerHTML={{
					__html: Liferay.Util.sub(
						Liferay.Language.get(
							'please-type-the-relationship-name-x-to-confirm'
						),
						`<strong>${objectRelationship.name}</strong>`
					),
				}}
			/>
		</DangerModal>
	);
}

interface IProps {
	objectRelationship: ObjectRelationship;
	observer: Observer;
	onClose: () => void;
	onDelete: any;
}

export default function ModalWithProvider({isApproved}: {isApproved: boolean}) {
	const [
		objectRelationship,
		setObjectRelationship,
	] = useState<ObjectRelationship | null>();

	const {observer, onClose} = useModal({
		onClose: () => setObjectRelationship(null),
	});

	const deleteRelationship = async (id: string) => {
		const response = await fetch(
			`/o/object-admin/v1.0/object-relationships/${id}`,
			{
				headers: new Headers({
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}),
				method: 'DELETE',
			}
		);

		if (response.ok) {
			Liferay.Util.openToast({
				message: Liferay.Language.get(
					'relationship-deleted-successfully'
				),
				type: 'success',
			});

			window.location.reload();

			return;
		}
		onClose();
	};

	const fetchObjectRelationship = async ({itemId}: {itemId: string}) => {
		const response = await fetch(
			`/o/object-admin/v1.0/object-relationships/${itemId}`,
			{
				headers: new Headers({
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}),
				method: 'GET',
			}
		);

		const objectRelationship = (await response.json()) as ObjectRelationship;

		if (isApproved || objectRelationship.reverse) {
			setObjectRelationship(objectRelationship);
		}
		else {
			deleteRelationship(itemId);
		}
	};

	useEffect(() => {
		Liferay.on('deleteObjectRelationship', fetchObjectRelationship);

		return () => {
			Liferay.detach('deleteObjectRelationship');
		};
	}, []);

	return (
		<ClayModalProvider>
			{objectRelationship && (
				<ModalDeleteObjectRelationship
					objectRelationship={objectRelationship}
					observer={observer}
					onClose={onClose}
					onDelete={deleteRelationship}
				/>
			)}
		</ClayModalProvider>
	);
}
