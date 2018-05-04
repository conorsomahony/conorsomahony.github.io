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
import Header from "grommet/components/Header";
import Footer from "grommet/components/Footer";
import Section from "grommet/components/Section";
import Title from "grommet/components/Title";
import Paragraph from "grommet/components/Paragraph";
import Split from "grommet/components/Split";
import Sidebar from "grommet/components/Sidebar";
import CheckboxSelected from 'grommet/components/icons/base/CheckboxSelected';
import Button from "grommet/components/Button";
import Task from "grommet/components/icons/base/Task"

/**
 * Todoista App top-level component.
 */
class TodoistaApp extends Component {

  // React application state
  state = {
    myListItems: {}
  };

  /*
  * Update App state to add a new list item
  */
  addListItem = (listItem) => {
    console.log("Adding a list item");
    // 1. take copy of existing state
    const listItems = {
      ...this.state.myListItems
    };
    // 2. Add new list item
    listItems[`listItem${Date.now()}`] = listItem;
    // 3. set the new state
    this.setState({myListItems: listItems});
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
              <MyTodoForm addListItem={this.addListItem}/>
            </Box>
          </Box>
          <Box flex='grow'>
            {/* Tooo List */}
            <Box pad='medium'>
              <MyTodoList listItems={this.state.myListItems}/>
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
