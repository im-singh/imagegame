import { render, screen, fireEvent } from "./Testing/testingSetup";
import App from "./App.js";

describe("<App/>: ", () => {
  test.skip("render correctly", () => {
    let { container } = render(<App />);
    let app = screen.getByTestId("app");

    expect(app).toBeInTheDocument("div");
    expect(container).toBeInTheDocument();
  });

  test.skip.each([
    ["Home", "home-page"],
    ["Result", "result-page"],
  ])("render pages on clicking header links", (label, expected) => {
    let { container } = render(<App />);
    let linkBtn = screen.getByText(label);
    fireEvent.click(linkBtn, { button: 0 });
    let resultPage = screen.getByTestId(expected);
    expect(resultPage).toBeInTheDocument();
  });
  test.skip("render play game", () => {
    let mockState = {
      userState: {
        userCount: 1,
        currentUser: { id: 0, name: "mohinder", email: "mohinder@d.com" },
      },
    };
    let { container } = render(<App />, { intialState: mockState });
    let playgame = screen.getByTestId("play-game");
    screen.debug();
    expect(playgame).toBeInTheDocument();
  });
});
