/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */
import React, {Component} from "react";
import MyList from "./MyList";
import MyListItemForm from "./MyListItemForm";
import GrommetApp from "grommet/components/App";

class TodoistaApp extends Component {
  render() {
    return (
      <GrommetApp>
        <p>Welcome to TodoistaApp</p>
        <MyListItemForm/>
        <MyList/>
      </GrommetApp>
    );
  }
}

export default TodoistaApp;
