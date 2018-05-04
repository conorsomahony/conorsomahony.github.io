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
import Box from "grommet/components/Box";
import Checkmark from "grommet/components/icons/base/Checkmark"
import Close from "grommet/components/icons/base/Close"
import ListItem from 'grommet/components/ListItem';
import Flag from "grommet/components/icons/base/Flag"

/**
 * My Todo Item Component
 */
class MyTodoItem extends Component {

    handleClick = () => {
        console.log("item clicked");
        this
            .props
            .toggleDone(this.props.index);
    }
    /**
     * render the todo item
     */
    render() {
        // ES6 "destructuring"
        const {todoTitle, priority, done} = this.props.todoItem;
        return (
            <ListItem onClick={this.handleClick}>
                <Box direction='row' justify='start' align='center' wrap={true}>{this.getFlag(priority)}
                    <span
                        className={done
                        ? "doneItem"
                        : ""}>{todoTitle}</span>
                </Box>
            </ListItem>
        )
    }

    getFlag(priority) {
        switch (priority) {
            case 1:
                return <Flag colorIndex="critical"/>
            case 2:
                return <Flag colorIndex="warning"/>
            case 3:
                return <Flag colorIndex="ok"/>
        }
    }

}

export default MyTodoItem;
