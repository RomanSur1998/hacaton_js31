import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CollectionContextProvider from "./context/CollectionContextProvider";
import CartContextProvider from "./context/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <CollectionContextProvider>
        <App />
      </CollectionContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);
