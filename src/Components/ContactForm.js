import React from "react";
import _ from "lodash";
import { Button, Form, Input, Segment } from "semantic-ui-react";

import useFormInput from "./UserFormInput";
import ContactContext from "../VersionContext";

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

export default ContactForm;
