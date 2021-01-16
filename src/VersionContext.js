import React, { createContext, useReducer } from "react";

import initialState from "./store";
import actions from "./actions";
import reducer from "./reducer";

const ContactContext = createContext();

export default ContactContext;
