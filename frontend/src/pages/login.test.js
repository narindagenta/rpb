import {render, screen, cleanup} from '@testing-library/react'
import Login from './login'


afterEach(()=>{
    cleanup();
})

test('check email', ()=>{
    render(<Login/>)
    const todoInputEmail = screen.getByLabelText('Email Address')
    expect(todoInputEmail).toBeInTheDocument()
})

test('check password', ()=>{
    render(<Login/>)
    const todoInputPassword = screen.getAllByLabelText('Password')
    expect(todoInputPassword).toBeInTheDocument()
})

test('check button', ()=> {
    render(<Login/>)
    const buttonInput = screen.getByRole("button")
    expect(buttonInput).toBeInTheDocument()
})