/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */

// React Components
import React, {Component} from "react";

// Grommet Components
import TableRow from "grommet/components/TableRow";
import Button from "grommet/components/Button";
import Checkmark from "grommet/components/icons/base/Checkmark"
import Close from "grommet/components/icons/base/Close"

/**
 * My Todo Item Component
 */
class MyTodoItem extends Component {
    render() {
        // ES6 "destructuring"
        const {todoTitle, priority} = this.props.todoItem;
        // each todo item is a row in a table
        return (
            <TableRow>
                <td>{todoTitle}</td>
                <td>{priority}</td>
                <td><Button secondary={true} icon={< Checkmark />}/></td>
                <td><Button secondary={true} icon={< Close />}/></td>
            </TableRow>
        )
    }
}

export default MyTodoItem;
