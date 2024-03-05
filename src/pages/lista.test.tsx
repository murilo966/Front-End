import Lista from "./lista";
import {render, screen} from '@testing-library/react'


import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'

it ('bla bla bla',() => {

    render(
        <MemoryRouter>
            <Lista />
        </MemoryRouter>
    );


    let button = screen.getByText('Listas');
    expect(button).toBeInTheDocument();
})

export{}