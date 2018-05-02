/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */
import React, {Component, Fragment} from "react";
import MyList from "./MyList";
import MyListForm from "./MyListForm";
import '../semantic/dist/semantic.min.css';

class TodoistaApp extends Component {
  render() {
    return (
      <Fragment>
        <p>Welcome to TodoistaApp</p>
        <MyListForm/>
        <MyList/>
      </Fragment>
    );
  }
}

export default TodoistaApp;
