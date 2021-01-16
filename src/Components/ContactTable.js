import React from "react";
import { Table } from "semantic-ui-react";

import ContactContext from "../VersionContext";

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
};

export default ContactTable;
