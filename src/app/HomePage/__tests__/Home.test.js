import { render, screen, fireEvent } from '../../Testing/testingSetup';
import HomePage from '../HomePage';
import { mockUserPlayingState } from '../../mockState/mockUserPlayingState';
import { userFinishedState } from '../../mockState/userFinishedState';
describe("<HomePage/>", () => {
    let contDiv;
    beforeEach(() => {
        let { container } = render(<HomePage />);
        contDiv = container;
    })
    test("render home page", () => {
        let homeDiv = screen.getByTestId("home-page");
        expect(homeDiv.tagName).toBe("DIV");
    })
    test("should have form component", () => {
        let form = contDiv.querySelector("form");
        expect(form).toBeInTheDocument();
    })
})

describe('<HomePage/> with state', () => {
    test('render <Playgame/> when user available and game is not finished', () => {
        let { container } = render(<HomePage />, { initialState: mockUserPlayingState });
        let playGame = screen.getByTestId("play-game");
        expect(playGame).toBeInTheDocument();
    })
    test("render form when game is finished", () => {
        let { container } = render(<HomePage />, { initialState: userFinishedState })
        let form = container.querySelector("form");
        expect(form).toBeInTheDocument();
        let playGame = screen.queryByTestId("play-game");
        expect(playGame).toBeNull();
    })
})
