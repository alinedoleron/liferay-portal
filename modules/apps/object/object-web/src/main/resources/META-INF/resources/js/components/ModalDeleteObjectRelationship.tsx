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
import ClayModal, {ClayModalProvider, useModal} from '@clayui/modal';
import {fetch} from 'frontend-js-web';
import React, {useEffect, useState} from 'react';

import useForm from '../hooks/useForm';
import Input from './Form/Input';

const ModalWithProvider = ({isApproved}: any) => {
	const [visibleModal, setVisibleModal] = useState<boolean>(false);
	const [relationshipId, setRelationshipId] = useState('');
	const {observer, onClose} = useModal({
		onClose: () => {
			setVisibleModal(false);
			setRelationshipId('');
		},
	});

	const [objectRelationship, setObjectRelationship] = useState<any>({});

	const [error, setError] = useState('');

	const openDeleteObjectRelationshipModal = async ({itemId}: any) => {
		const objectRelationshipResponse = await fetch(
			`/o/object-admin/v1.0/object-relationships/${itemId}`,
			{
				headers: new Headers({
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}),
				method: 'GET',
			}
		);

		setObjectRelationship((await objectRelationshipResponse.json()) as any);
		setRelationshipId(itemId);
	};

	type TInitialValues = {
		name: string;
	};

	const onValidate = (values: TInitialValues) => {
		const errors: any = {};

		if (!values.name) {
			errors.name = Liferay.Language.get('required');
		}

		return errors;
	};

	const initialValues: TInitialValues = {
		name: '',
	};

	const openToast = (options: {
		message: string;
		type?: 'danger' | 'success';
	}) => {
		const parentWindow = Liferay.Util.getOpener();
		parentWindow.Liferay.Util.openToast(options);
	};

	const deleteRelationship = async () => {
		const response = await fetch(
			`/o/object-admin/v1.0/object-relationships/${relationshipId}`,
			{
				headers: new Headers({
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}),
				method: 'DELETE',
			}
		);

		if (response.ok) {
			openToast({
				message: Liferay.Language.get(
					'relationship-deleted-successfully'
				),
				type: 'success',
			});

			setTimeout(() => {
				window.location.reload();
			}, 500);

			return;
		}
		onClose();
	};

	const {handleChange, handleSubmit, values} = useForm({
		initialValues,
		onSubmit: deleteRelationship,
		validate: onValidate,
	});

	const handleBlur = () => {
		values.name.toLowerCase() !== objectRelationship?.name.toLowerCase()
			? setError(
					Liferay.Language.get(
						'input-and-relationship-name-does-not-match'
					)
			  )
			: setError('');
	};

	const getDangerMessages = () => {
		return (
			<>
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
							objectRelationship?.name
						),
					}}
				/>
			</>
		);
	};

	const getWarningMessages = () => {
		return (
			<>
				<div>
					{Liferay.Language.get(
						'you-do-not-have-permission-to-delete-this-relationship'
					)}
				</div>
				<div>
					{Liferay.Language.get(
						'to-delete-this-relationship-you-need-to-go-to-parent-relationship-side'
					)}
				</div>
			</>
		);
	};

	useEffect(() => {
		Liferay.on(
			'deleteObjectRelationship',
			openDeleteObjectRelationshipModal
		);

		return () => {
			Liferay.detach('deleteObjectRelationship');
		};
	}, []);

	useEffect(() => {
		if (!isApproved && !objectRelationship?.isReverse) {
			deleteRelationship();

			return;
		}
		else if (relationshipId) {
			setVisibleModal(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setVisibleModal, relationshipId]);

	return (
		<ClayModalProvider>
			{visibleModal && (
				<ClayModal
					center
					observer={observer}
					status={
						objectRelationship?.isReverse ? 'warning' : 'danger'
					}
				>
					<ClayForm onSubmit={handleSubmit}>
						<ClayModal.Header>
							{objectRelationship?.isReverse
								? Liferay.Language.get('deletion-not-allowed')
								: Liferay.Language.get('delete-relationship')}
						</ClayModal.Header>

						<ClayModal.Body>
							<>
								{objectRelationship?.isReverse ? (
									getWarningMessages()
								) : (
									<>
										{getDangerMessages()}
										<Input
											error={error}
											id="objectRelationshipName"
											label=""
											name="name"
											onBlur={handleBlur}
											onChange={handleChange}
											value={values.name}
										/>
									</>
								)}
							</>
						</ClayModal.Body>

						<ClayModal.Footer
							last={
								objectRelationship?.isReverse ? (
									<ClayButton
										displayType="warning"
										onClick={() => onClose()}
									>
										{Liferay.Language.get('done')}
									</ClayButton>
								) : (
									<ClayButton.Group key={1} spaced>
										<ClayButton
											displayType="secondary"
											onClick={() => onClose()}
										>
											{Liferay.Language.get('cancel')}
										</ClayButton>

										<ClayButton
											disabled={
												!values.name || error
													? true
													: false
											}
											displayType="danger"
											type="submit"
										>
											{Liferay.Language.get('delete')}
										</ClayButton>
									</ClayButton.Group>
								)
							}
						/>
					</ClayForm>
				</ClayModal>
			)}
		</ClayModalProvider>
	);
};

export default ModalWithProvider;
