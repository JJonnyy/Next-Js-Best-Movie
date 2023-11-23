import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

jest.mock('next/image', () => function Image({src, alt}) {
    return <img src={src} alt={alt} />
    },
)
describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading');
        const headerTest = "Pick your favorite movie";

        expect(heading).toBeInTheDocument(headerTest);
    })
});