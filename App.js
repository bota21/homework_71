import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Main from "./containers/Main";
import reducer from "./store/reducer";

export default function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
