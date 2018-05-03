/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */
import React, {Component, Fragment} from "react";

class MyListItemForm extends Component {
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleClick}>
          <input type="text" name="itemText" required placeholder="Enter new item"/>
          <button type="submit">+</button>
        </form>
      </Fragment>
    );
  }
  handleClick(event) {
    event.preventDefault();
    console.log("clicked!");
  }
}

export default MyListItemForm;