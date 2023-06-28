import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe('<Button/>', () =>{
    it('should funtion Button corretly', () => {
        render(<Button texto="Load More"/>);

        const button = screen.getByRole('button', {name : /load more/i})

        expect(button).toBeInTheDocument();
    })
    it('should call funtion on button click', () => {

        const fn = jest.fn()
        render(<Button texto="Load More" onClick={fn}/>);

        const button = screen.getByRole('button', {name : /load more/i})
        fireEvent.click(button)
        expect(fn).toHaveBeenCalledTimes(1)
    })
    it('should be disabled when disabled is true', () => {
        render(<Button texto="Load More" disabled={true}/>);

        const button = screen.getByRole('button', {name : /load more/i})
        expect(button).toBeDisabled()
    })
    it('should be enabled when disabled is false', () => {
        render(<Button texto="Load More" disabled={false}/>);

        const button = screen.getByRole('button', {name : /load more/i})
        expect(button).toBeEnabled()
    })
})