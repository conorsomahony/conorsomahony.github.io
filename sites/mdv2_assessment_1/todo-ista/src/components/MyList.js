/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */
import React, {Component, Fragment} from "react";
import MyListItem from "./MyListItem";

class MyList extends Component {
  render() {
    return (
      <Fragment>
        <h1>
          Things to Do
        </h1>
        <MyListItem todoTitle="Feed the Dog"/>
        <MyListItem todoTitle="Put out the Cat"/>
      </Fragment>
    )
  }
}

export default MyList;
