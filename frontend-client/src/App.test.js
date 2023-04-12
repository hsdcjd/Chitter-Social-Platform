
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import {BrowserRouter} from "react-router-dom";

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: { response: { results: [] } } }))
}));

test('renders App without crashing', async () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>);
});


test('renders App component', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>);
    const linkElement = screen.getByText(/Today's Chitter/i);
    expect(linkElement).toBeInTheDocument();
});

