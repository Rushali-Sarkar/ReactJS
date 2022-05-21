import {render} from "@testing-library/react";
import React from "react";
import App2 from "./App2.js";

test("renders an h1", () => {
    const { getByText } = render(<App2 />);
    const h1 = getByText(/Hello React Testing Library/);
    expect(h1).toHaveTextContent("Hello React Testing Library");
});