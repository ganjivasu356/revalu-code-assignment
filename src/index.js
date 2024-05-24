import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CollectionProvider } from "./context/CollectionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CollectionProvider>
      <App />
    </CollectionProvider>
  </React.StrictMode>
);
reportWebVitals();
