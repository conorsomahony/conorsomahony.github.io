/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */
import React, { Component, Fragment } from "react";

class MyListForm extends Component {
  render() {
    return (
      <Fragment>
        <form action="">
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Enter new item"
          />
          <button type="submit">+</button>
        </form>
      </Fragment>
    );
  }
}

export default MyListForm;
