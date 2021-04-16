import { render, screen, fireEvent } from '../../Testing/testingSetup';
import FormComponent from '../Form';

describe('<Form/> componenet', () => {
    test('render form when isShow==true', () => {
        let { container } = render(<FormComponent isShow={true} />);
        let form = container.querySelector("form");
        expect(form).toBeInTheDocument();
    })
    test('not render form when isShow==false', () => {
        let { container } = render(<FormComponent isShow={false} />);
        let form = container.querySelector("form");
        expect(form).toBeNull();
    })
    test('render email input field', () => {
        let { container } = render(<FormComponent isShow={true} />);
        let input = screen.getByPlaceholderText("email");
        expect(input).toBeInTheDocument();
        expect(input.type).toBe("email");
    })
    test("render submit btn", () => {
        let { container } = render(<FormComponent isShow={true} />);
        let submitBtn = screen.getByText(/submit/i);
        expect(submitBtn).toBeInTheDocument();
        expect(submitBtn.type).toBe("submit");
    })

})