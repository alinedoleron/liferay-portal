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

import React, { useState } from 'react';
import {ClayButtonWithIcon} from '@clayui/button';
import {ClayInput} from '@clayui/form';
import {useModal} from '@clayui/modal';
import ClayManagementToolbar from '@clayui/management-toolbar';
import ClayEmptyState from '@clayui/empty-state';
import ClayButton from '@clayui/button';

import Card from '../Card/Card';
import ModalAddObjectLayout from '../ModalAddObjectLayout';

import './ViewBuilderScreen.scss';
import Panel from '../Panel/Panel';

const ViewBuilderScreen = () => {

	const [visibleModal, setVisibleModal] = useState(false);
	const {observer, onClose} = useModal({
		onClose: () => setVisibleModal(false),
	});

    const columnList: Array<any> = [
        {
            title: "Name"
        },
        {
            title: "Age"
        },
        {
            title: "Description"
        },
        {
            title: "City"
        },
        {
            title: "Email"
        },
    ];

	return (
        <>
            <Card>
                <Card.Header title="Columns"/>

                <Card.Body >
                    <ClayManagementToolbar >
                        <ClayManagementToolbar.ItemList expand>
                            <ClayManagementToolbar.Search>
                            <ClayInput.Group>
                                <ClayInput.GroupItem>
                                <ClayInput
                                    aria-label="Search"
                                    className="form-control input-group-inset input-group-inset-after"
                                    defaultValue="Search"
                                    type="text"
                                />
                                <ClayInput.GroupInsetItem after tag="span">
                                    <ClayButtonWithIcon
                                    className="navbar-breakpoint-d-none"
                                    displayType="unstyled"
                                    onClick={() => {}}
                                
                                    symbol="times"
                                    />
                                    <ClayButtonWithIcon
                                    displayType="unstyled"
                                
                                    symbol="search"
                                    type="submit"
                                    />
                                </ClayInput.GroupInsetItem>
                                </ClayInput.GroupItem>
                            </ClayInput.Group>
                            </ClayManagementToolbar.Search>

                            <ClayManagementToolbar.Item>
                            <ClayButtonWithIcon
                                className="nav-btn nav-btn-monospaced"
                                symbol="plus"
                                onClick={() => setVisibleModal(true)}
                            />
                            </ClayManagementToolbar.Item>
                        </ClayManagementToolbar.ItemList>
                    </ClayManagementToolbar>

                    {columnList.length > 0 ? (
                        columnList.map(element => {
                            return (
                                <div>
                                    <Panel>
                                        <Panel.SimpleBody 
                                            title={element.title}
                                            contentRight={
                                                <ClayButtonWithIcon displayType="unstyled" symbol="times"/>
                                            }
                                        >
                                        </Panel.SimpleBody>
                                    </Panel>
                                </div>
                            )
                        })
                    ) : (
                        <div className="object-web__custom-view-view-builder--empty-space">
                            <ClayEmptyState 
                                title='No coluns added yet.' 
                                description='Add Columns to start creating a View'
                            >
                                <ClayButton 
                                    displayType="secondary"
                                    onClick={() => setVisibleModal(true)}
                                >
                                    {"Add Column"}
                                </ClayButton>
                            </ClayEmptyState>
                        </div>
                    )}

                </Card.Body>
            </Card>
            
            {visibleModal && (
                    <ModalDeAlininha
                        observer={observer}
                        onClose={onClose}
                    />
                )} 
        </>
    )
};

export default ViewBuilderScreen;
