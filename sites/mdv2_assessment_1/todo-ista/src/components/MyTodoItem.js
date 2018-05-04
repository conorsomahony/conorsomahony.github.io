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
import Button from "grommet/components/Button";
import Box from "grommet/components/Box";
import Checkmark from "grommet/components/icons/base/Checkmark"
import CheckboxSelected from "grommet/components/icons/base/CheckboxSelected"
import Close from "grommet/components/icons/base/Close"
import ListItem from 'grommet/components/ListItem';
import Flag from "grommet/components/icons/base/Flag"

/**
 * My Todo Item Component
 */
class MyTodoItem extends Component {

    /**
     * Toggle whether item is done or not when it is clicked.
     */
    handleClick = () => {
        this
            .props
            .toggleDone(this.props.index);
    }
    /**
     * render the todo item
     */
    render() {
        // ES6 "destructuring"
        if (this.props.todoItem) {
            const {todoTitle, priority, done} = this.props.todoItem;
            return (
                <ListItem>
                    <Box
                        direction='row'
                        justify='start'
                        align='center'
                        wrap={false}
                        responsive={false}
                        pad='none'
                        margin='none'>
                        <Box>
                            <span>{getIcon(done, priority)}</span>&nbsp;
                        </Box>
                        <Box>
                            <span
                                className={done
                                ? "doneItem"
                                : ""}>{todoTitle}</span>
                        </Box>
                        <Box>
                            <span>
                                <Button
                                    icon={< Checkmark />}
                                    onClick={() => this.props.toggleDone(this.props.index)}/>
                            </span>
                        </Box>
                        <Box>
                            <span>
                                <Button
                                    icon={< Close />}
                                    onClick={() => this.props.removeListItem(this.props.index)}/>
                            </span>
                        </Box>
                    </Box>
                </ListItem>
            )
        } else {
            return null;
        }
    }
}

/*
* Helper function: Return colored flag based on done state and priority.
*/
function getIcon(done, priority) {
    if (done) {
        return <CheckboxSelected colorIndex="unknown"/>
    } else {
        switch (priority) {
            case 1:
                return <Flag colorIndex="critical"/>
            case 2:
                return <Flag colorIndex="warning"/>
            case 3:
                return <Flag colorIndex="ok"/>
            default:
                return <Flag/>
        }
    }
}

export default MyTodoItem;
