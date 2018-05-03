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

/**
 * My Todo List Component
 */
class MyTodoList extends Component {
  render() {
    console.log(this.props.listItems);

    return (
      <Fragment>
        <Heading margin="medium">Things To Do</Heading>
        {/* The list of todo items is displayed in a table */}
        <Table>
          <TableHeader labels={['Todo', 'Priority', 'Done', 'Delete']}/>
          <tbody>
            {/* Loop over our list of items from props to create todo items */}
            {Object
              .keys(this.props.listItems)
              .map(key => <MyTodoItem todoItem={this.props.listItems[key]} key={key}>{key}</MyTodoItem>)}
          </tbody>
        </Table>
      </Fragment>
    )
  }
}

export default MyTodoList;
