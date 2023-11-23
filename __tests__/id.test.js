import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Movie from '../pages/movies/[id]';

jest.mock('next/image', () => function Image({src, alt}) {
        return <img src={src} alt={alt} />
    },
)
describe('Movie', () => {
    it('renders a heading', () => {
        render(<Movie />)

        const heading = screen.getByRole('heading');
        const headerTest = "You've chosen";

        expect(heading).toBeInTheDocument(headerTest);
    })
});