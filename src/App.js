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

const ContactContext = React.createContext();

const initialState = {
  contacts: [
    {
      id: "007",
      name: "Adhikansh Mittal",
      email: "amittal@dashclicks.com",
    },
    {
      id: "008",
      name: "Devandra Prajapat",
      email: "dprajapat@dashclicks.com",
    },
    {
      id: "009",
      name: "Vikas Agarwal",
      email: "vagarwal@dashclicks.com",
    },
  ],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.payload],
      };
    case "DEL_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "START":
      return {
        loading: true,
      };
    case "COMPLETE":
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

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

const useFormInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset,
  };
};

const ContactForm = () => {
  const name = useFormInput("");
  const email = useFormInput("");
  const [state, dispatch] = React.useContext(ContactContext);

  const onSubmit = () => {
    dispatch({
      type: "ADD_CONTACT",
      payload: { id: _.uniqueId(10), name: name.value, email: email.value },
    });
    // Reset Form
    name.onReset();
    email.onReset();
  };

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            <Input placeholder="Enter Name" {...name} required />
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Enter Email" {...email} type="email" required />
          </Form.Field>
          <Form.Field width={4}>
            <Button fluid primary>
              New Contact
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
};

const ContactTable = () => {
  // Subscribe to `contacts` state and access dispatch function
  const [state, dispatch] = React.useContext(ContactContext);
  // Declare a local state to be used internally by this component
  const [selectedId, setSelectedId] = React.useState();

  const delContact = (id) => {
    dispatch({
      type: "DEL_CONTACT",
      payload: id,
    });
  };

  const onRemoveUser = () => {
    delContact(selectedId);
    setSelectedId(null); // Clear selection
  };

  const rows = state.contacts.map((contact) => (
    <Table.Row
      key={contact.id}
      onClick={() => setSelectedId(contact.id)}
      active={contact.id === selectedId}
    >
      <Table.Cell>{contact.id}</Table.Cell>
      <Table.Cell>{contact.name}</Table.Cell>
      <Table.Cell>{contact.email}</Table.Cell>
    </Table.Row>
  ));

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
