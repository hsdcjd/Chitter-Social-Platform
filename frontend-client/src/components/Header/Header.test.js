import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component tests', () => {
  test('displays the Chitter logo', () => {
    render(<Header loggedIn={false} />);
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });

  // test.('displays the current date', () => {
  //   render(<Header loggedIn={false} />);
  //   const dateElement = screen.getByText(/Today's Chitter/);
  //   expect(dateElement).toBeInTheDocument();
  // });

  test('displays Home link', () => {
    render(<Header loggedIn={false} />);
    const homeLinkElement = screen.getByText('Home');
    expect(homeLinkElement).toBeInTheDocument();
  });

  test('displays Login link if not logged in', () => {
    render(<Header loggedIn={false} />);
    const loginLinkElement = screen.getByText('Login');
    expect(loginLinkElement).toBeInTheDocument();
  });

  test('displays Register link if not logged in', () => {
    render(<Header loggedIn={false} />);
    const registerLinkElement = screen.getByText('Register');
    expect(registerLinkElement).toBeInTheDocument();
  });

  test('displays Add Peep link if logged in', () => {
    render(<Header loggedIn={true} />);
    const addPeepLinkElement = screen.getByText('Add Peep');
    expect(addPeepLinkElement).toBeInTheDocument();
  });

  test('displays Log Out link if logged in', () => {
    render(<Header loggedIn={true} />);
    const logoutLinkElement = screen.getByText('Log Out');
    expect(logoutLinkElement).toBeInTheDocument();
  });
});
