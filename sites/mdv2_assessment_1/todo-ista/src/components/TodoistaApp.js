/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */

// React Components
import React, {Component} from "react";

// My Components
import MyTodoList from "./MyTodoList";
import MyTodoForm from "./MyTodoForm";
import TodoistaAppHeader from "./TodoistaAppHeader";
import TodoistaAppFooter from "./TodoistaAppFooter";

// Grommet Components
import App from "grommet/components/App";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";

/**
 * Todoista App top-level component.
 */
class TodoistaApp extends Component {

  // React application state
  state = {
    myListItems: {}
  };

  /**
   * Lifecycle method - store items in localStorage when state is updated.
   */
  componentDidUpdate() {
    localStorage.setItem('myListItems', JSON.stringify(this.state.myListItems));
  }

  /**
   * Lifecycle method -restore items from localStorage when mounting.
   */
  componentDidMount() {
    const localStorageRef = localStorage.getItem('myListItems');
    if (localStorageRef) {
      this.setState({
        myListItems: JSON.parse(localStorageRef)
      });
    }
  }

  /**
  * Update App state to add a new list item
  */
  addListItem = (listItem) => {
    console.log("Adding a list item");
    // 1. take copy of existing state (ES6 copy syntax)
    const listItems = {
      ...this.state.myListItems
    };
    // 2. Add new list item
    listItems[`listItem${Date.now()}`] = listItem;
    // 3. set the new state
    this.setState({myListItems: listItems});
  }

  /**
   * Update App state to delete a list item
   */
  removeListItem = (key) => {
    console.log("Remove a list item");
    // 1. take copy of state
    const listItems = {
      ...this.state.myListItems
    };
    // 2. delete the item (Note, won't work for firebase)
    delete listItems[key];
    // 3. update state
    this.setState({myListItems: listItems});
  }

  /*
  * Update App state to toggle done state of an item
  */
  toggleDone = (key) => {
    // 1. take a copy of state (ES6 copy syntax)
    const myListItems = {
      ...this.state.myListItems
    };
    // 2. toggle done state
    myListItems[key].done = !myListItems[key].done;
    // 3. set the new state
    this.setState({myListItems});
  }

  /**
   * render method
   */
  render() {
    return (
      <App centered={false}>
        <Box full={true}>
          {/* App Header */}
          <TodoistaAppHeader/>
          <Box>
            {/* Todo Form */}
            <Box>
              <Box pad="medium" margin="large">
                <MyTodoForm addListItem={this.addListItem}/>
              </Box>
            </Box>
          </Box>
          <Box flex='grow'>
            {/* Tooo List - flex='grow'  */}
            <Box colorIndex="neutral-4-a" pad="medium" margin="medium">
              <Heading margin="none" tag="h4">Things To Do</Heading>
            </Box>
            <Box pad={{
              vertical: "none"
            }}>
              <MyTodoList
                listItems={this.state.myListItems}
                toggleDone={this.toggleDone}
                removeListItem={this.removeListItem}/>
            </Box>
          </Box>

          {/* Main App Footer */}
          <TodoistaAppFooter/>
        </Box>
      </App>
    );
  }
}

export default TodoistaApp;
