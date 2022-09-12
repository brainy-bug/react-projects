// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Import styles
import "./index.css";

// Import Context
import { AppProvider } from "./context";

// Import App Component
import App from "./Components/App";

// Render App Component
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
