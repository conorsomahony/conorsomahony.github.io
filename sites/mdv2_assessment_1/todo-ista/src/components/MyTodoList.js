/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */

// React components
import React, {Component} from "react";

// My components
import MyTodoItem from "./MyTodoItem";

// Grommet components
import Box from "grommet/components/Box";
import List from 'grommet/components/List';
import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';

/**
 * My Todo List Component
 */
class MyTodoList extends Component {

  /**
   * render method - create list (or placeholder if we don't have any items)
   */
  render() {
    if (Object.keys(this.props.listItems).length === 0) {
      return (<ListPlaceholder
        emptyMessage="You have nothing to do at the moment. Why don't you put your feet up?"
        filteredTotal={0}
        unfilteredTotal={0}/>)
    } else {
      return (
        <List>
          {Object
            .keys(this.props.listItems)
            .sort((a, b) => {
              const aItem = this.props.listItems[a];
              const bItem = this.props.listItems[b];
              if (aItem.done === bItem.done) {
                return aItem.priority - bItem.priority;
              } else {
                return (aItem.done
                  ? 1
                  : -1);
              }
            })
            .map(key => <MyTodoItem
              index={key}
              toggleDone={this.props.toggleDone}
              removeListItem={this.props.removeListItem}
              todoItem={this.props.listItems[key]}
              key={key}>{key}</MyTodoItem>)}
        </List>
      )
    }
  }
}

export default MyTodoList;
