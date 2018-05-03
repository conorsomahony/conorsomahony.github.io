/**
 * Author: Conor O'Mahony
 * Assignment: Mobile and Device Development II - Assessment 1
 * Student ID: STU-00001490
 * Date: 02/05/2018
 * Refs:
 */

// React components
import React, {Component} from "react";

// Grommet components
import Box from "grommet/components/Box";
import Button from "grommet/components/Button";
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

  /**
   * Process the item form, adding new todo item to the todo list.
   */
  handleClick = event => {
    // 1. stop the form submitting
    event.preventDefault();
    // 2. create list item from form data
    const listItem = {
      todoTitle: this.todoTitle.current.componentRef.value,
      priority: "1",
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
      <Form onSubmit={this.handleClick}>
        <Box
          direction='row'
          justify='start'
          align='center'
          appCentered={true}
          responsive={true}>
          <Box>
            <TextInput
              ref={this.todoTitle}
              name="todoTitle"
              id="todoFormTextInput"
              required
              placeHolder="Add new todo"/>
          </Box>
          <Box direction='row' justify='between' align='center' responsive={false}>
            {/* <Label>Priority&nbsp;</Label> */}
            <Box direction="row" align='center' responsive={false}>
              <input type="radio" name="priority" value="1"/>&nbsp;<Flag colorIndex="critical"/>&nbsp;
              <input type="radio" name="priority" value="2"/>&nbsp;<Flag colorIndex="warning"/>&nbsp;
              <input type="radio" name="priority" value="3"/>&nbsp;<Flag colorIndex="ok"/>
            </Box>
            <Box direction="row" align="center" responsive={false}>
              <Button label="Add" icon={< Add />} type='submit' secondary={true}/>
            </Box>
          </Box>
        </Box>
      </Form>
    )
  }
}

export default MyTodoForm;