import React from "react";
import { createStore } from 'redux';
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { rootReducer } from "../../redux/store";

function render(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Router>
      <Provider store={store}>{children}</Provider>
    </Router>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}
// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
