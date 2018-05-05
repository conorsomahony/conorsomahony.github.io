/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs: see MyReferences.md
 */

// React Components
import React from "react";

// My Components
import TodoistaAppHeader from "./TodoistaAppHeader";

// Grommet Components
import App from "grommet/components/App";
import Box from "grommet/components/Box";
import Title from "grommet/components/Title";

/**
 * TodoistaNotFound Functional component, with implicit return
 */
const TodoistaNotFound = () => (
  <App centered={false}>
    <TodoistaAppHeader/>
    <Box pad="medium" margin="medium" appCentered={true}>
      <Title>Page Not Found</Title>
    </Box>
  </App>
);

export default TodoistaNotFound;