import { render, screen, fireEvent } from '../../Testing/testingSetup';
import ImageBox from '../ImageBox';
import { mockUserPlayingState } from '../../mockState/mockUserPlayingState';

describe("<ImageBox/> component", () => {
    test("should render correctly", () => {
        let { container } = render(<ImageBox />);
        let div = container.querySelector(".image-box");
        expect(div).toBeInTheDocument();
    })
    test("should render img with correct src", () => {
        let { container } = render(<ImageBox />, { initialState: mockUserPlayingState });
        let img = container.querySelector("img");
        expect(img).toBeInTheDocument();
        expect(img.src).toBe(mockUserPlayingState.imageState.imageUrl);
    })
})