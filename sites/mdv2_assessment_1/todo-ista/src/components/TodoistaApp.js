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
import Article from "grommet/components/Article";

class TodoistaApp extends Component {
  render() {
    return (
      <App>
        <Article>
          <Header pad='medium' colorIndex='neutral-2-t'>
            <Title>
              Todo-ista
            </Title>
          </Header>
          <Section margin='none' pad='none'>
            <Box colorIndex='light-1' justify='center' align='center' pad='medium'>
              <MyListItemForm/>
              <MyList/>
            </Box>
          </Section>
          <Footer justify='between' colorIndex='light-2'>
            <Title>
              Todo-ista
            </Title>
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
        </Article>
      </App>
    );
  }
}

export default TodoistaApp;
