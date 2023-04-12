import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { BrowserRouter } from "react-router-dom";

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: { response: { results: [] } } })),
    post: jest.fn(() => Promise.resolve({ data: { user: { username: 'testuser' } } }))
}));

describe('Login component', () => {
    test('should update the username input when it is changed', () => {
        const { getByLabelText } = render(<BrowserRouter><Login /></BrowserRouter>);
        const usernameInput = getByLabelText('Your username:');
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        expect(usernameInput.value).toBe('testuser');
    });

    test('should update the password input when it is changed', () => {
        const { getByLabelText } = render(<BrowserRouter><Login /></BrowserRouter>);
        const passwordInput = getByLabelText('Your password:');
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        expect(passwordInput.value).toBe('testpassword');
    });


});