import React, { useReducer } from "react";

import ContactContext from "./VersionContext";
import reducer from "./reducer";
import initialState from "./store";

const ContactContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
