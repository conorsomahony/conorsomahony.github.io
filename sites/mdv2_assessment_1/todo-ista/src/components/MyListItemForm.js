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
import Form from "grommet/components/Form";
import FormFields from "grommet/components/FormFields";
import Header from "grommet/components/Header";
import Heading from "grommet/components/Heading";
import TextInput from "grommet/components/TextInput";
import Button from "grommet/components/Button";
import Add from "grommet/components/icons/base/Add"

class MyListItemForm extends Component {
  render() {
    return (
      <Box pad="medium">
        <Form onSubmit={this.handleClick}>
          <TextInput
            required
            placeHolder="Add new item"
            suggestions={['Feed the dog', 'Put out the cat', 'Make a list']}/>
          <Button type='submit' icon={< Add />}/>
        </Form>
      </Box>
    );
  }
  handleClick(event) {
    event.preventDefault();
    console.log("clicked!");
  }
}

export default MyListItemForm;