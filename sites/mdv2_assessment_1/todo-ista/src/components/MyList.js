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

/**
 *
 */
class MyList extends Component {
  render() {
    console.log(this.props.listItems);

    return (
      <Fragment>
        <ul>
          {Object
            .keys(this.props.listItems)
            .map(key => <MyListItem listItem={this.props.listItems[key]} key={key}>{key}</MyListItem>)}
        </ul>
      </Fragment>
    )
  }
}

export default MyList;
