/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */

// React Components
import React from "react";

// React Router Components
import {BrowserRouter, Switch, Route} from "react-router-dom";

// My Components
import TodoistaApp from "./TodoistaApp";
import TodoistaNotFound from "./TodoistaNotFound";

const MyRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TodoistaApp}/>
      <Route component={TodoistaNotFound}/>
    </Switch>
  </BrowserRouter>
);

export default MyRouter;
