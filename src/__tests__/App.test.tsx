/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { act } from "react-dom/test-utils";


test("renders App", () => {
  // @ts-ignore
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );
  act(() => {
    render(<App />);
  })
});
