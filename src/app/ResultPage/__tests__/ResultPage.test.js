import { mockUserPlayingState2 } from '../../mockState/mockUserPlayingState';
import { render, fireEvent, screen } from '../../Testing/testingSetup';
import ResultPage from '../ResultPage';

describe('<ResultPage> component', () => {
    let contDiv;
    beforeEach(() => {
        let { container, history } = render(<ResultPage />);
        contDiv = container;
    })
    test('should render correctly', () => {
        let div = screen.getByTestId("result-page");
        expect(div).toBeInTheDocument();
        // expect(window.location.pathname).toBe('/result');
    })
    test('should render h2 correctly', () => {
        let h2 = contDiv.querySelector("h2");
        expect(h2).toBeInTheDocument();
        expect(h2.textContent).toBe("Result !");
    })
    test('should render hr', () => {
        let hr = contDiv.querySelector("hr");
        expect(hr).toBeInTheDocument();
    })
    test('should render user div', () => {
        let userDiv = contDiv.querySelector(".user-list");
        expect(userDiv).toBeInTheDocument();
    })
    test.each([
        [0, 'Player: Unknown'],
        [1, 'Total Images: 0'],
        [2, 'Likes: 0'],
        [3, 'Dislikes: 0']
    ])
        ('should render default info', (index, value) => {
            let pTags = contDiv.querySelectorAll(".info p");
            expect(pTags[index].textContent).toBe(value)
        })

})
describe('<ResultPage> with state', () => {
    test('should show current user details', () => {
        let { container, history } = render(<ResultPage />, { initialState: mockUserPlayingState2, route: "/result" });
        let pTags = container.querySelectorAll(".info p");
        expect(pTags[0].textContent).toBe("Player: " + mockUserPlayingState2.userState.currentUser.name)
        expect(pTags[1].textContent).toBe("Total Images: " + mockUserPlayingState2.userState.imageCount)
        expect(pTags[2].textContent).toBe("Likes: " + mockUserPlayingState2.userState.likes)
        expect(pTags[3].textContent).toBe("Dislikes: " + mockUserPlayingState2.userState.dislikes)
    })

})