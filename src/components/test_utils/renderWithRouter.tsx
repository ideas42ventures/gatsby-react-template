import React from "react";
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from "@reach/router";
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from "@testing-library/react";

// Taken from https://testing-library.com/docs/example-reach-router/
function renderWithRouter(
  ui: React.ReactElement,
  {
    route = "/ventures-for-shared-prosperity/meow",
    history = createHistory(createMemorySource(route)),
  } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}

export default renderWithRouter;
