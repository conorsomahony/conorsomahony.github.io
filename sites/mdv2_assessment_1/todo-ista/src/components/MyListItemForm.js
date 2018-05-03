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
* MyListItemFrom Component
*/
class MyListItemForm extends Component {

  listItemTitle = React.createRef();
  listItemPriority = React.createRef();

  /**
   * Process the list item form
   */
  handleClick = event => {
    // stop the form submitting
    event.preventDefault();
    // create list item from form data
    const listItem = {
      listItemTitle: this.listItemTitle.current.componentRef.value
    }
    // update the state via method passed down via props
    this
      .props
      .addListItem(listItem);
    // reset the form
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
              ref={this.listItemTitle}
              name="todoItem"
              id=""
              required
              placeHolder="Add new item"/>
          </Box>
          <Box direction='row' justify='between' align='center' responsive={false}>
            {/* <Label>Priority&nbsp;</Label> */}
            <Box direction="row" align='center' responsive={false}>
              <input type="radio" name="priority" value="1"/>&nbsp;<Flag colorIndex="critical"/>&nbsp;
              <input type="radio" name="priority" value="2"/>&nbsp;<Flag colorIndex="warning"/>&nbsp;
              <input type="radio" name="priority" value="3"/>&nbsp;<Flag colorIndex="ok"/>
            </Box>
            <Box direction="row" align="center" responsive={false}>
              <Button label="Add" icon={< Add />} type='submit'/>
            </Box>
          </Box>
        </Box>
      </Form>
    )
  }
}

export default MyListItemForm;