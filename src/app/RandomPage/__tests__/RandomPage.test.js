import { render, screen, fireEvent, waitFor, cleanup } from '../../Testing/testingSetup';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import axiosMock from 'axios';

import RandomPage from '../RandomPage';
import { mockUserPlayingState } from '../../mockState/mockUserPlayingState';
import { getRandomImage } from '../../../redux/Api/api'

// jest.mock('../../../redux/Api/api', () => {
//     return {
//         getRandomImage: jest.fn(() => Promise.resolve({ imgUrl: 'https://d.com/m.img' }))
//     }
// });

describe("<RandomPage/> component", () => {
    test.only("not render without state", () => {
        let { container } = render(<RandomPage />);
        let div = screen.queryByTestId('random-page');
        expect(div).toBeNull();
    })
})

describe("<RandomPage/> with state", () => {
    let contDiv, Store;
    beforeEach(() => {
        let { container, store } = render(<RandomPage />, { initialState: mockUserPlayingState, route: "/random-image" })
        contDiv = container;
        Store = store;
    })
    test("render correctly", () => {
        expect(window.location.pathname).toBe("/random-image");
        let div = screen.queryByTestId("random-page");
        expect(div).toBeInTheDocument();
        let img = contDiv.querySelector("img");
        expect(img).toBeInTheDocument();
        expect(img.src).toBe(mockUserPlayingState.imageState.imageUrl);
        let btns = contDiv.querySelectorAll("button");
        expect(btns.length).toBe(4)
    })

    test("click on finish render null", () => {
        expect(window.location.pathname).toBe("/random-image");
        let btn = screen.getByText("Finish");
        fireEvent.click(btn);
        expect(window.location.pathname).toBe("/")
        let div = screen.queryByTestId("random-page");
        expect(div).toBeNull();
    })

})

describe.only("<RandomPage/> with server", () => {
    let initState = {
        imageState: {
            imageUrl: null,
            isError: false,
            needFetch: false,
            error: '',
            isLoading: true
        },
        userState: {
            users: [],
            currentUser: {
                id: 0,
                email: 'ms@d.com',
                name: 'ms'
            },
            imageCount: 0,
            userCount: 1,
            images: [],
            likes: 0,
            dislikes: 0
        },
        gameState: {
            isPlaying: true,
            isFinished: false
        }
    }
    let url = "https://api.unsplash.com/photos/random";
    const server = setupServer(
        // capture "GET /greeting" requests
        rest.get(url, (req, res, ctx) => {
            // respond using a mocked JSON body
            return res(ctx.json({ imgUrl: 'https://kjdf.com/i.jpg' }))
        })
    )

    // establish API mocking before all tests
    beforeAll(() => server.listen())
    // reset any request handlers that are declared as a part of our tests
    // (i.e. for testing one-time error scenarios)
    afterEach(() => server.resetHandlers())
    // clean up once the tests are done
    afterAll(() => server.close())

    test('should call api', async () => {
        let { container, store } = render(<RandomPage />, { initialState: mockUserPlayingState });
        screen.debug();
        await waitFor(() =>
            // getByRole throws an error if it cannot find an element
            screen.getByTestId("img-tag")
        )
        fireEvent.click(screen.getByText("Next"));
        await waitFor(() =>
            // getByRole throws an error if it cannot find an element
            screen.getByTestId("img-tag")
        )
        screen.debug();

    })

})