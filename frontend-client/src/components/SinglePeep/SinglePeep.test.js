import React from 'react';
import { render, screen } from '@testing-library/react';
import SinglePeep from './SinglePeep';

describe('SinglePeep component tests', () => {
    it('renders the peep username, content, and date', () => {
        const peep = {
            username: 'testuser',
            content: 'This is a test peep.',
            createdAt: new Date('2022-03-30T12:34:56Z').toISOString()
        };

        const { getByText } = render(<SinglePeep {...peep} />);

        expect(getByText(peep.content)).toBeInTheDocument();

    });
});


