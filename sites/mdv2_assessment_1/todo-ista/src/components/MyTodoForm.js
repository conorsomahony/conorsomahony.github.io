/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */

// React components
import React, {Component, Fragment} from "react";

// Grommet components
import Box from "grommet/components/Box";
import Button from "grommet/components/Button";
import Form from "grommet/components/Form";
import Add from "grommet/components/icons/base/Add";
import AddCircle from "grommet/components/icons/base/AddCircle";

/*
* My Todo Form Component
*/
class MyTodoForm extends Component {

  // Refs
  todoTitle = React.createRef();
  priority = React.createRef();

  /**
   * Process the item form, adding new todo item to the todo list.
   * (Note - No need to bind method to this, in a constructor, since we create a property handleClick,
   * set to an arrow function, which is bound.)
   */
  handleClick = (event) => {
    // 1. stop the form submitting
    event.preventDefault();
    // 2. create list item from form data
    const listItem = {
      todoTitle: this.todoTitle.current.value,
      priority: Number(this.priority.current.value),
      done: false
    }
    // 3. update the state via method passed down via props
    this
      .props
      .addListItem(listItem);
    // 4. reset the form
    event
      .currentTarget
      .reset();
  }

  /**
   * render method - create form for entering a list item
   */
  render() {
    return (
      <Form plain={true} onSubmit={this.handleClick}>
        <div className="wrapper">
          <input
            type="text"
            ref={this.todoTitle}
            name="todoTitle"
            id="todoFormTextInput"
            required
            placeholder="Add New Todo"/>
          <select ref={this.priority} name="priority">
            <option value="1">Priority 1</option>
            <option value="2">Priority 2</option>
            <option value="3">Priority 3</option>
          </select>
          <Button className="formButton" icon={< Add />} type='submit' secondary={true}/>
        </div>
      </Form>
    )
  }
}

export default MyTodoForm;