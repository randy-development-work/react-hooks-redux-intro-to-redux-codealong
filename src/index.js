import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/ShoppingList/shoppingListSlice";
import App from "./App";
import "./index.css";

const store = configureStore({
  reducer: counterReducer,

},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
