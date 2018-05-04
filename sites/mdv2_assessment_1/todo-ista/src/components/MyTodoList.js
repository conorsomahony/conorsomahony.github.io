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
import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';

/**
 * My Todo List Component
 */
class MyTodoList extends Component {

  render() {
    console.log(Object.keys(this.props.listItems).length);
    if (Object.keys(this.props.listItems).length === 0) {
      return (<ListPlaceholder emptyMessage='You do not have any items at the moment.'/>)
    } else {
      return (
        <Fragment>
          <List>
            {Object
              .keys(this.props.listItems)
              .sort((a, b) => {
                return this.props.listItems[a].priority > this.props.listItems[b].priority;
              })
              .map(key => <MyTodoItem
                index={key}
                toggleDone={this.props.toggleDone}
                todoItem={this.props.listItems[key]}
                key={key}>{key}</MyTodoItem>)}
          </List>
        </Fragment>
      )

    }

  }
}

export default MyTodoList;
