import { screen, fireEvent, render } from '../../Testing/testingSetup';
import PlayGame from '../PlayGame';
import { mockUserPlayingState } from '../../mockState/mockUserPlayingState'
import { capFirstLtr } from '../../Helpers/helper';

describe("<PlayGame/> component", () => {

    test("should render if isShow===true", () => {
        let { container } = render(<PlayGame isShow={true} />);
        expect(screen.getByTestId("play-game")).toBeInTheDocument();
        let playBtn = container.querySelector("button");
        expect(playBtn).toBeInTheDocument();
        expect(playBtn.textContent).toBe("Play Game")
    })
    test("should not render if isShow==false", () => {
        let { container } = render(<PlayGame isShow={false} />);
        expect(screen.queryByTestId("play-game")).toBeNull();
    })
    test("should render user when user available", () => {
        let { container } = render(<PlayGame isShow={true} />, { initialState: mockUserPlayingState });
        let h2 = container.querySelector("h2");
        expect(h2).toBeInTheDocument();
        expect(h2.textContent).toBe(capFirstLtr(mockUserPlayingState.userState.currentUser.name))
        let strong = container.querySelector("strong");
        expect(strong).toBeInTheDocument();
        expect(strong.textContent).toBe("Hi, ")
    });




})

