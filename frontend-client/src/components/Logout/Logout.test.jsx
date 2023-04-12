import { render } from '@testing-library/react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Logout from './Logout';

// test('calls setLoggedIn with false', () => {
//   const setLoggedInMock = jest.fn();
//   render(<Logout setLoggedIn={setLoggedInMock} />);
//   expect(setLoggedInMock).toHaveBeenCalledWith(false);
// });

// test('renders Navigate component with to="/" prop', () => {
//   const { container } = render(<Logout setLoggedIn={jest.fn()} />);
//   expect(container.querySelector('nav')).toBeInTheDocument();
//   expect(container.querySelector('nav')).toHaveAttribute('to', '/');
//   expect(container.querySelector('nav')).toHaveAttribute('replace', '');
// });

// test('should redirect to home page after logout', () => {
//   const setLoggedIn = jest.fn();
//     const { container } = render(
//         <BrowserRouter>
//             <Logout setLoggedIn={setLoggedIn} />
//         </BrowserRouter>);
//   expect(container.innerHTML).toMatch('Redirecting to /');
// });