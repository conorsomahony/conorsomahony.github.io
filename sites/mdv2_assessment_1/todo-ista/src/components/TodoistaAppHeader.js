/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */

// React Components
import React from "react";

// Grommet Components
import Header from "grommet/components/Header";
import CheckboxSelected from 'grommet/components/icons/base/CheckboxSelected';
import Title from "grommet/components/Title";

/**
 * Component for the App Header
 */
const TodoistaAppHeader = () => (
    <Header
        pad='medium'
        colorIndex='neutral-2'
        primary={true}
        appCentered={true}
        size="large">
        <CheckboxSelected/>&nbsp;
        <Title>
            Todo-ista
        </Title>
    </Header>
);

export default TodoistaAppHeader;