/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */

// React Components
import React from "react";

// My Components
import TodoistaAppHeader from "./TodoistaAppHeader";

// Grommet Components
import App from "grommet/components/App";

// Functional component, with implicit return
const TodoistaNotFound = () => (
  <App centered={false}>
    <TodoistaAppHeader/>
  </App>
);

export default TodoistaNotFound;