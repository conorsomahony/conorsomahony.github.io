/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import TodoistaApp from "./TodoistaApp";
import NotFound from "./NotFound";

const MyRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TodoistaApp}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default MyRouter;
