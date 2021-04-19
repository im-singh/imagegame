import { capFirstLtr } from '../../Helpers/helper';
import { userFinishedState2 } from '../../mockState/userFinishedState';
import { render, screen, fireEvent } from '../../Testing/testingSetup';
import UserLists from '../UserLists';

describe('<UserLists/> component', () => {
    test('should render correctly', () => {
        let { container } = render(<UserLists />);
        expect(container.querySelector("h4")).toBeInTheDocument();
    })
    test('should render user unavailable', () => {
        let { container } = render(<UserLists />);
        expect(container.querySelector("p").textContent).toBe("No user available");
    })
})

describe('<UserLists/> with state', () => {
    test('should render finished users', () => {
        let { container } = render(<UserLists />, { initialState: userFinishedState2 });
        userFinishedState2.userState.users.forEach(ele => {
            let p = screen.getByText(capFirstLtr(ele.name));
            expect(p).toBeInTheDocument();
        })
    })
    test('should render current user as active', () => {
        let { container } = render(<UserLists />, { initialState: userFinishedState2 });
        let activeUser = container.querySelector(".active");
        expect(activeUser.textContent).toBe(capFirstLtr(userFinishedState2.userState.currentUser.name));
    })
    test('shoud render user reversly', () => {
        let { container } = render(<UserLists />, { initialState: userFinishedState2 });
        let pTags = container.querySelectorAll("p");
        let { users } = userFinishedState2.userState;
        //expect first to be last in the array
        expect(pTags[0].textContent).toBe(capFirstLtr(users[users.length - 1].name));

        //expect last to be first in the array
        expect(pTags[pTags.length - 1].textContent).toBe(capFirstLtr(users[0].name));
    })
    test('should toggle active on click on user', () => {
        let { container } = render(<UserLists />, { initialState: userFinishedState2 });
        let pTags = container.querySelectorAll("p");
        expect(pTags[0].className).toContain("active");

        //click on second user
        fireEvent.click(pTags[1]);
        expect(pTags[1].className).toContain('active');
        expect(pTags[0].className).not.toContain('active')
    })

})
