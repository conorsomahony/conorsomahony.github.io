/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */

// React components
import React, {Component, Fragment} from "react";

// My components
import MyListItem from "./MyListItem";

// Grommet components
import Box from "grommet/components/Box";

class MyList extends Component {
  render() {
    return (
      <Fragment>
        <MyListItem todoTitle="Feed the Dog"/>
        <MyListItem todoTitle="Put out the Cat"/>
      </Fragment>
    )
  }
}

export default MyList;
