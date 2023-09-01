import React from 'react';
import { render } from '@testing-library/react';
import Rocket from './Rocket';

// Mock useSelector and useDispatch
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Rocket Component', () => {
  it('renders the component without errors', () => {
    const { container } = render(<Rocket />);
    expect(container).toBeTruthy();
  });

  it('displays a list of rockets', () => {
    // Mock the useSelector hook to return some sample data
    const mockList = [
      {
        id: 1,
        rocketName: 'Falcon 9',
        description: 'Sample description',
        flickrImages: 'sample-image-url',
        reserved: 'false',
      },
      // Add more rocket objects as needed
    ];

    // Mock the useSelector hook to return the sample data
    jest.spyOn(require('react-redux'), 'useSelector').mockReturnValue(mockList);

    const { getByText } = render(<Rocket />);

    // You can test for the presence of specific text or elements here
    expect(getByText('Falcon 9')).toBeInTheDocument();
    // Add more assertions as needed
  });
});
