import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Rockets from '../components/Rockets';

// Mocking react-redux's useSelector
jest.mock('react-redux');

// Mocking axios
jest.mock('axios', () => ({
  get: jest.fn(),
}));

test('Rockets component renders correctly', () => {
  // Mock the useSelector behavior
  useSelector.mockReturnValue({
    rockets: [
      {
        id: 1,
        name: 'Falcon 9',
        description: 'A powerful rocket developed by SpaceX.',
        flickr_images: ['image1.jpg', 'image2.jpg'],
        reserved: false,
      },
      // Add more mock rockets as needed
    ],
  });

  const { container } = render(<Rockets />);

  expect(container).toMatchSnapshot();
});
