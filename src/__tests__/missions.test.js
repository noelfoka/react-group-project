import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Missions from '../components/missions';

// Mocking react-redux's useSelector
jest.mock('react-redux');

// Mocking axios
jest.mock('axios', () => ({
  get: jest.fn(),
}));

test('Missions component renders correctly', () => {
  // Mock the useSelector behavior
  useSelector.mockReturnValue([
    {
      mission_id: '9D1B7E0',
      mission_name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications ... Thailand and modern communications technology.',
      reserved: true,
    },
    {
      mission_id: 'F4F83DE',
      mission_name: 'Telstar',
      description: 'Telstar 19V (Telstar 19 Vantage) is a communicatio ... launched by Ariane 5ECA on 1 July 2009.',
      reserved: true,
    },
    // Add more mission objects as needed
  ]);

  const { container } = render(<Missions />);

  expect(container).toMatchSnapshot();
});
