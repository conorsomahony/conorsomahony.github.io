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

  // Lifecycle
  componentDidMount()
  {
    console.log("did mount!");
  }

  /*
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

  /*
  * Update App state to toggle done state
  */
  toggleDone = (key) => {
    // 1. take a copy of state (ES6 copy syntax)
    const myListItems = {
      ...this.state.myListItems
    };
    // 2. toggle done state
    myListItems[key].done = !myListItems[key].done;
    // 3. set the new state
    this.setState(myListItems);
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
            <Box pad='medium'>
              <Box margin="medium" colorIndex="neutral-1-a" pad="medium">
                <Heading margin="none" tag="h4">Add New Todo</Heading>
              </Box>
              <MyTodoForm addListItem={this.addListItem}/>
            </Box>
          </Box>
          <Box flex='grow'>
            {/* Tooo List */}
            <Box pad='medium'>
              <Box margin="medium" colorIndex="neutral-1-a" pad="medium">
                <Heading margin="none" tag="h4">Things To Do</Heading>
              </Box>
              <MyTodoList listItems={this.state.myListItems} toggleDone={this.toggleDone}/>
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
