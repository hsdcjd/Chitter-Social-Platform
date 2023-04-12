import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AllPeeps from './AllPeeps';

// describe('AllPeeps component tests', () => {
//   it('renders a list of peeps with correct data', async () => {
//     const peeps = [
//       {
//         _id: '1',
//         username: 'testuser1',
//         content: 'This is test peep #1.',
//         createdAt: new Date('2022-03-30T12:34:56Z').toISOString(),
//       },
//       {
//         _id: '2',
//         username: 'testuser2',
//         content: 'This is test peep #2.',
//         createdAt: new Date('2022-03-31T12:34:56Z').toISOString(),
//       },
//     ];

//     jest.spyOn(global, 'fetch').mockImplementation(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(peeps),
//       })
//     );

//     render(<AllPeeps />);

//     await waitFor(() => {
//       expect(screen.getByText(/testuser1/i)).toBeInTheDocument();
//       expect(screen.getByText(/This is test peep #1./i)).toBeInTheDocument();
//       expect(screen.getByText(/March 30th 2022, 12:34:56 pm/i)).toBeInTheDocument();
//       expect(screen.getByText(/testuser2/i)).toBeInTheDocument();
//       expect(screen.getByText(/This is test peep #2./i)).toBeInTheDocument();
//       expect(screen.getByText(/March 31st 2022, 12:34:56 pm/i)).toBeInTheDocument();
//     });

//     global.fetch.mockRestore();
//   });
// });