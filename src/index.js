import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/reducer";
import { initialState } from "./context/initalState";

const renderApp = () => {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(
    <Router>
      <StateProvider inttialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Router>
  );
};

renderApp();
