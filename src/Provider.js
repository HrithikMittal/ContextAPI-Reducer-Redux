import React, { useReducer } from "react";

import ContactContext from "./VersionContext";
import reducer from "./reducer";
import initialState from "./store";
import actions from "./actions";

const ContactContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    contacts: state.contacts,
    start: (value) => {
      dispatch({ type: actions.START, value });
    },
    complete: (value) => {
      dispatch({ type: actions.COMPLETE, value });
    },
    addContact: (value) => {
      dispatch({ type: actions.ADD_CONTACT, value });
    },
    delContact: (value) => {
      dispatch({ type: actions.DEL_CONTACT, value });
    },
  };

  return (
    <ContactContext.Provider value={value}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
