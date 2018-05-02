/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */
import React, {Component} from "react";

class MyListItem extends Component {
    render() {
        return (
            <div>{this.props.todoTitle}</div>
        )
    }
}

export default MyListItem;
