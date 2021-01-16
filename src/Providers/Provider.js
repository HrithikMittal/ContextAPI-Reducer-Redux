import React, { useReducer } from "react";

import ContactContext from "../Context/Context";
import reducer from "../Reducers/reducer";
import initialState from "../Stores/store";
import actions from "../Actions/actions";

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
