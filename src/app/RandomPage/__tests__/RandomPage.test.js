import { render, screen, fireEvent, waitFor, cleanup } from '../../Testing/testingSetup';
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import RandomPage from '../RandomPage';
import { mockUserPlayingState } from '../../mockState/mockUserPlayingState';
import { getRandomImage } from '../../../redux/Api/api'


describe("<RandomPage/> component", () => {
    test.only("not render without state", () => {
        let { container } = render(<RandomPage />);
        let div = screen.queryByTestId('random-page');
        expect(div).toBeNull();
    })
})

describe("<RandomPage/> with state", () => {
    let contDiv, History, Store;
    beforeEach(() => {
        let { container, history, store } = render(<RandomPage />, { initialState: mockUserPlayingState, route: "/random-image" })
        contDiv = container;
        History = history;
        Store = store;
    })
    test("render correctly", () => {
        expect(History.location.pathname).toBe("/random-image");
        let div = screen.queryByTestId("random-page");
        expect(div).toBeInTheDocument();
        let img = contDiv.querySelector("img");
        expect(img).toBeInTheDocument();
        expect(img.src).toBe(mockUserPlayingState.imageState.imageUrl);
        let btns = contDiv.querySelectorAll("button");
        expect(btns.length).toBe(4)
    })

    test("click on finish render null", () => {
        expect(History.location.pathname).toBe("/random-image");
        let btn = screen.getByText("Finish");
        fireEvent.click(btn);
        expect(History.location.pathname).toBe("/")
        let div = screen.queryByTestId("random-page");
        expect(div).toBeNull();
    })

})
describe.skip("<RandomImage/> with server request", () => {
    let url =
        "https://api.unsplash.com/photos/random?client_id=4RcG_5MyWoVgAbK7BPVNadf5LtkpA6dj9GUIo1z9uhA";
    let imgurl = "https://images.unsplash.com/photo-1618510120934-8e95e3ee8033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc3MDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTg4MDY0OTM&ixlib=rb-1.2.1&q=80&w=400";
    const server = setupServer(
        rest.get("https://api.unsplash.com/photos/random", (req, res, ctx) => {
            return res(ctx.json({ imgUrl: imgurl }))
        })
    )
    let contDiv, History, Store;
    beforeEach(() => {
        let { container, history, store } = render(<RandomPage />, { initialState: mockUserPlayingState, route: "/random-image" })
        contDiv = container;
        History = history;
        Store = store;
    })

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    test("click on next added new image", async () => {
        let btn = screen.getByText("Next");
        let img = contDiv.querySelector("img");
        let imgUrl1 = img.src;
        // console.log("Store: ", Store.getState());
        fireEvent.click(btn);
        // img = await waitFor(() => contDiv.querySelector("img"));
        // console.log(img.src);
        console.log("Store: ", Store.getState());
    })
})