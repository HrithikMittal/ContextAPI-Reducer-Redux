import React from "react";
import "./App.css";
import "fomantic-ui-css/semantic.min.css";
import _ from "lodash";

import {
  Button,
  Container,
  Form,
  Header,
  Icon,
  Input,
  Segment,
  Table,
} from "semantic-ui-react";

import initialState from "./store";
import reducer from "./reducer";

const ContactContext = React.createContext();

const ContactContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};

const ContactView = () => {
  return (
    <ContactContextProvider>
      <Segment basic>
        <Header as="h3">Contacts</Header>
        <ContactForm />
        <ContactTable />
      </Segment>
    </ContactContextProvider>
  );
};


  return (
    <Segment>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                color="red"
                size="small"
                disabled={!selectedId}
                onClick={onRemoveUser}
              >
                <Icon name="trash" /> Remove User
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
};

const App = () => {
  return (
    <Container>
      <h1>React Hooks Context Demo</h1>
      <ContactView />
    </Container>
  );
};

export default App;
