import { render, screen, fireEvent } from '../../Testing/testingSetup';
import Header from '../Header';

import { mockUserPlayingState } from '../../mockState/mockUserPlayingState';
import { userFinishedState } from '../../mockState/userFinishedState';


describe("<Header/>", () => {
    let contDiv;
    beforeEach(() => {
        let { container } = render(<Header />);
        contDiv = container;
    })
    test("should render correctly", () => {
        let header = contDiv.querySelector("header");
        expect(header.tagName).toBe("HEADER");
        expect(header).toBeInTheDocument();
    })
    test("render h1 with text", () => {
        let h1 = contDiv.querySelector("h1");
        expect(h1).toBeInTheDocument();
        expect(h1.textContent).toBe('Unsplash')
    })
    test.each([[0, 'Home'], [1, 'Random Image'], [2, 'Result']])
        ("3 anchor links are rendered correctly", (index, textValue) => {
            let links = screen.getAllByRole('link');
            expect(links[index].textContent).toBe(textValue)
        });
    test.each([0, 1, 2])
        ("active anchor href is equal to pathname", (index) => {
            // let activeLink = contDiv.querySelector(".active");
            // expect(activeLink.href).toBe(window.location.href);
            let links = screen.getAllByRole("link");
            fireEvent.click(links[index]);
            expect(links[index].pathname).toBe(window.location.pathname);
            expect(links[index].className).toBe('active');
        });
})

describe('<Header/> with state', () => {
    test.each([0, 1, 2])("Show user on all routes when available", (index) => {

        let { container } = render(<Header />, { initialState: mockUserPlayingState });
        let links = screen.getAllByRole("link");
        fireEvent.click(links[index]);
        expect(screen.getByText(/user:/i)).toBeInTheDocument();
        let h2 = container.querySelector("h2");
        expect(h2.textContent.toLowerCase()).toBe(mockUserPlayingState.userState.currentUser.name);
    })
    test("show user only on /result", () => {
        let { container } = render(<Header />, { initialState: userFinishedState });
        let links = screen.getAllByRole("link");
        //go to /result page
        fireEvent.click(links[2]);
        expect(window.location.pathname).toBe("/result");

        expect(screen.getByText(/user:/i)).toBeInTheDocument();
        let h2 = container.querySelector("h2");
        expect(h2.textContent.toLowerCase()).toBe(userFinishedState.userState.currentUser.name);

        //go to / home page
        fireEvent.click(links[0]);
        // screen.debug();
        expect(window.location.pathname).toBe("/");
        expect(screen.queryByText(/user:/i)).toBeNull();
        h2 = container.querySelector("h2");
        expect(h2).toBeNull();
    })
})