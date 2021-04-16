import { render, screen, fireEvent } from '../../Testing/testingSetup';
import Buttons from '../Buttons';

describe("<Buttons/> component", () => {
    let contDiv;
    beforeEach(() => {
        let { container } = render(<Buttons />);
        contDiv = container;
    })
    test("should render button-box", () => {
        let div = contDiv.querySelector(".button-box");
        expect(div).toBeInTheDocument();
    })
    test.each([[0, 'Like'], [1, 'Dislike'], [2, 'Next'], [3, 'Finish']])
        ('should render four buttons with text', (index, label) => {
            let btns = contDiv.querySelectorAll("button");
            expect(btns[index].textContent).toBe(label);
        })
    test("buttons should toggle active class on click", () => {
        let btns = contDiv.querySelectorAll("button");
        //trigger like btn
        fireEvent.click(btns[0]);
        expect(btns[0].className).toContain("active");
        expect(btns[1].className).not.toContain("active");
        //trigger dislike btn
        fireEvent.click(btns[1]);
        expect(btns[1].className).toContain("active");
        expect(btns[0].className).not.toContain("active");
    })
})