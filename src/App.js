import React from "react";
import "./App.css";
import "fomantic-ui-css/semantic.min.css";

import { Container } from "semantic-ui-react";

import ContactContextProvider from "./Provider";
import ContactView from "./ContactView";

const App = () => {
  return (
    <Container>
      <ContactContextProvider>
        <h1>React Hooks Context Demo</h1>
        <ContactView />
      </ContactContextProvider>
    </Container>
  );
};

export default App;
