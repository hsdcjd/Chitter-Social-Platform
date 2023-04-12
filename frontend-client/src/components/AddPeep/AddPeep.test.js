import React from 'react';
import { render } from '@testing-library/react';
import Peep from './AddPeep';

// test('renders Peep component without crashing', () => {
//   render(<Peep />);
// });

// test('form renders and accepts input', () => {
//   const { getByLabelText } = render(<Peep />);
//   const input = getByLabelText('Add peep:');
//   fireEvent.change(input, { target: { value: 'Hello, world!' } });
//   expect(input.value).toBe('Hello, world!');
// });

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     ok: true,
//     json: () => Promise.resolve({}),
//   })
// );

// test('form submits and sends a POST request', async () => {
//   const { getByLabelText, getByRole } = render(<Peep />);
//   const input = getByLabelText('Add peep:');
//   fireEvent.change(input, { target: { value: 'Hello, world!' } });
//   fireEvent.submit(getByRole('button'));

//   await waitFor(() => {
//     expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/posts', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ content: 'Hello, world!', username: null }),
//     });
//   });
// });