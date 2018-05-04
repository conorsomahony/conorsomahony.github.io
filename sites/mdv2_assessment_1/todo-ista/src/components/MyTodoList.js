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
import MyTodoItem from "./MyTodoItem";

// Grommet components
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import List from 'grommet/components/List';

/**
 * My Todo List Component
 */
class MyTodoList extends Component {
  render() {
    return (
      <Fragment>
        <Box margin="none" colorIndex="neutral-1-a" pad="medium">
          <Heading margin="none">Things To Do</Heading>
        </Box>
        <List>
          {Object
            .keys(this.props.listItems)
            .map(key => <MyTodoItem todoItem={this.props.listItems[key]} key={key}>{key}</MyTodoItem>)}
        </List>
      </Fragment>
    )
  }
}

export default MyTodoList;
