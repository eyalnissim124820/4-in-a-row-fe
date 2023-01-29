import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContext from "./contexts/AuthContext";
import AppContext from "./contexts/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <AuthContext>
      <AppContext>
        <App />
      </AppContext>
    </AuthContext>
  /* </React.StrictMode> */
);

reportWebVitals();
