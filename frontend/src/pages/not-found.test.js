import {render, screen, cleanup} from '@testing-library/react'
import NotFound from './not-found'

afterEach(()=>{
    cleanup();
})

test('check', ()=>{
    render(<NotFound/>)
    const todoElement = screen.getByText('404 Error')
    expect(todoElement).toHaveTextContent('404 Error')
})