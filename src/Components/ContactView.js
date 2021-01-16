import React from "react";
import { Segment, Header } from "semantic-ui-react";

import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";

const ContactView = () => {
  return (
    <Segment basic>
      <Header as="h3">Contacts</Header>
      <ContactForm />
      <ContactTable />
    </Segment>
  );
};

export default ContactView;
