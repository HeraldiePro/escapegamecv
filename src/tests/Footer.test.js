import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer'
import { text } from '../theme/text'

describe('Footer', () =>{
    test('Should have footer',() => {
        render(<Footer />)
        expect(screen.getByTestId('ContainerFooter')).toBeTruthy()
    })
    test('Should have text Footer is textFooter value',() => {
        render(<Footer />)
        expect(screen.getByTestId('TextFooter')).toBeTruthy()
        expect(screen.getByTestId('TextFooter').innerHTML).toBe(text.find((text) => text.name === 'textFooter').value)
    })
})