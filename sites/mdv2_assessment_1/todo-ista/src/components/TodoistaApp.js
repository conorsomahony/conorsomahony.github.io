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
import MyList from "./MyList";
import MyListItemForm from "./MyListItemForm";

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

class TodoistaApp extends Component {

  render() {
    return (
      <App centered={false}>
        <Box full={true} flex={false}>
          {/* Main Header */}
          <Header
            pad='medium'
            colorIndex='neutral-2'
            primary={true}
            appCentered={true}
            size="large">
            <CheckboxSelected/>&nbsp;
            <Title>
              Todo-ista
            </Title>
          </Header>

          {/* Main App Area */}
          <Box>
            {/* <Header pad='medium'>
              <Title>
                Add an item
              </Title>
            </Header> */}
            <Box pad='medium'>
              <MyListItemForm/>
            </Box>
          </Box>
          <Box flex='grow' colorIndex='light-2'>
            <Header pad='medium'>
              <Title>
                Things to Do
              </Title>
            </Header>
            <Box pad='medium'>
              <MyList/>
            </Box>
          </Box>

          {/* Main Footer */}
          <Footer
            primary={true}
            appCentered={true}
            direction="column"
            align="center"
            pad="small"
            colorIndex="grey-1">
            <Box
              direction='row'
              align='center'
              pad={{
              "between": "medium"
            }}>
              <Paragraph margin='none'>
                © 2018 Todo-ista
              </Paragraph>
            </Box>
          </Footer>
        </Box>
      </App>
    );
  }
}

export default TodoistaApp;
