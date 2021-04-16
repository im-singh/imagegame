import { render, screen, fireEvent } from '../../Testing/testingSetup';
import RandomPage from '../RandomPage';
import { mockUserPlayingState } from '../../mockState/mockUserPlayingState';

describe("<RandomPage/> component", () => {
    test("not render without state", () => {
        let { container } = render(<RandomPage />);
        let div = screen.queryByTestId('random-page');
        expect(div).toBeNull();
    })
})
describe("<RandomPage/> with state", () => {
    let contDiv;
    beforeEach(() => {
        let { container } = render(<RandomPage />, { initialState: mockUserPlayingState })
        contDiv = container;
    })
    test("render correctly", () => {
        let div = screen.queryByTestId("random-page");
        expect(div).toBeInTheDocument();
        let img = contDiv.querySelector("img");
        expect(img).toBeInTheDocument();
        expect(img.src).toBe(mockUserPlayingState.imageState.imageUrl);
        let btns = contDiv.querySelectorAll("button");
        expect(btns.length).toBe(4)
    })

    test("click on finish render null", () => {
        let btn = screen.getByText("Finish");
        fireEvent.click(btn);
        let div = screen.queryByTestId("random-page");
        expect(div).toBeNull();
    })

})
