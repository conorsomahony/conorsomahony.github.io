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
import Heading from "grommet/components/Heading";
import TextInput from "grommet/components/TextInput";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import Label from "grommet/components/Label";
import RadioButton from "grommet/components/RadioButton";
import Add from "grommet/components/icons/base/Add"
import Flag from "grommet/components/icons/base/Flag"

/*
* My Todo Form Component
*/
class MyTodoForm extends Component {

  // Refs
  todoTitle = React.createRef();
  priority = React.createRef();

  /**
   * Process the item form, adding new todo item to the todo list.
   * Note - No need to bind method in a constructor, as we create a property handleClick,
   * set to an arrow function, which is bound.
   */
  handleClick = (event) => {
    // 1. stop the form submitting
    event.preventDefault();
    console.log(this.todoTitle.current.value);
    console.log(this.priority.current.value);
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
   * render method
   */
  render() {
    return (
      <Fragment>
        <Form onSubmit={this.handleClick}>
          <Box
            direction='row'
            justify='start'
            align='center'
            appCentered={true}
            responsive={true}>
            <Box>
              <input
                type="text"
                ref={this.todoTitle}
                name="todoTitle"
                id="todoFormTextInput"
                required
                placeholder="Add new todo"/>
            </Box>
            <Box direction='row' justify='between' align='center' responsive={false}>
              {/* <Label>Priority&nbsp;</Label> */}
              <Box direction="row" align='center' responsive={false}>
                <select ref={this.priority} name="priority">
                  <option value="1">Priority 1</option>
                  <option value="2">Priority 2</option>
                  <option value="3">Priority 3</option>
                </select>
              </Box>
              <Box direction="row" align="center" responsive={false}>
                <Button label="Add" icon={< Add />} type='submit' secondary={true}/>
              </Box>
            </Box>
          </Box>
        </Form>
      </Fragment>
    )
  }
}

export default MyTodoForm;