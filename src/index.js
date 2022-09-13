import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ClassBased from "./ClassBased";
import { store } from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <ClassBased />
    </StrictMode>
  </Provider>,
  rootElement
);
