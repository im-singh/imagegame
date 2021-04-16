import { render, screen, fireEvent } from "./Testing/testingSetup";
import App from "./App.js";

describe("<App/>: ", () => {
  test("render correctly", () => {
    let { container } = render(<App />);
    let app = screen.getByTestId("app");

    expect(app).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  });



  test("render play game on submit email", () => {
    let { container } = render(<App />);
    // let input = screen.getByPlaceholderText("email")
    let input = screen.getByPlaceholderText(/email/i)
    fireEvent.change(input, { target: { value: "ms@d.com" } });

    fireEvent.click(screen.getByText("Submit"), { button: 0 });
    let playgame = screen.getByTestId("play-game");

    expect(playgame).toBeInTheDocument();
  })
  test("render play game with state", () => {
    let mockState = {
      userState: {
        users: [],
        userCount: 1,
        currentUser: { id: 0, name: "mohinder", email: "mohinder@d.com" },
      },
    };
    let { container } = render(<App />, { initialState: mockState });
    let playgame = screen.getByTestId("play-game");
    expect(playgame).toBeInTheDocument();
  });
  test("random-image route is disabled", () => {
    let { container } = render(<App />);
    let linkBtn = screen.getByText('Random Image');
    // console.log("lin: ", linkBtn)
    fireEvent.click(linkBtn, { button: 0 });
    let randomPage = screen.queryByTestId("random-page");
    expect(randomPage).toBeNull();
  })
  test("random-image route is enabled", async () => {
    let { container } = render(<App />);
    //input email and submit
    let input = screen.getByLabelText("Email :");
    fireEvent.change(input, { target: { value: "ms@d.com" } });
    fireEvent.click(screen.getByText("Submit"), { button: 0 });

    //check for playGame componenet 
    let playgame = screen.getByTestId("play-game");
    expect(playgame).toBeInTheDocument();
    let playBtn = screen.getByText("Play Game");
    expect(playBtn.type).toBe('submit');

    //click on play and start game and check random page is rendered
    fireEvent.click(playBtn);
    let randomPage = await screen.findByTestId("random-page");
    expect(randomPage).toBeInTheDocument();

    //click on home link and test home page rendered
    let linkBtn = screen.getByText("Home");
    fireEvent.click(linkBtn);
    let homePage = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();

    //click on randomimage link and test route is enable now
    linkBtn = screen.getByText("Random Image");
    fireEvent.click(linkBtn);
    randomPage = screen.getByTestId("random-page");
    expect(randomPage).toBeInTheDocument();
  })
  test.each([
    ["Home", "home-page"],
    ["Result", "result-page"],
  ])("render pages on clicking header links", (label, expected) => {
    let { container } = render(<App />);
    let linkBtn = screen.getByText(label);
    fireEvent.click(linkBtn, { button: 0 });
    let resultPage = screen.getByTestId(expected);
    expect(resultPage).toBeInTheDocument();
  });
});
