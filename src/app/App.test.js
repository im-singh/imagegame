import { render, screen } from "./Testing/testingSetup";
import App from "./App.js";

describe("<App/>: ", () => {
  test("render correctly", () => {
    let { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
