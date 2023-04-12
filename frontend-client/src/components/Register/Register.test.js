import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from './Register';

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: { response: { results: [] } } }))
}));

test('renders the Register component', () => {
    const { getByText, getByLabelText } = render(<Register />);

    const header = getByText(/create new account/i);
    expect(header).toBeInTheDocument();

    const nameInput = getByLabelText(/full name:/i);
    expect(nameInput).toBeInTheDocument();

    const usernameInput = getByLabelText(/username:/i);
    expect(usernameInput).toBeInTheDocument();

    const emailInput = getByLabelText(/email address:/i);
    expect(emailInput).toBeInTheDocument();

    const passwordInput = getByLabelText(/password:/i);
    expect(passwordInput).toBeInTheDocument();

    const registerButton = getByText(/register/i);
    expect(registerButton).toBeInTheDocument();
});