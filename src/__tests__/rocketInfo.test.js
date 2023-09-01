import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import RocketInfo from '../components/rocketInfo';
import { reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

// Mocking react-redux's useDispatch
jest.mock('react-redux');

// Mocking actions
jest.mock('../redux/rockets/rocketsSlice', () => ({
  reserveRocket: jest.fn(),
  cancelRocket: jest.fn(),
}));

describe('RocketInfo component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <RocketInfo
        name="Falcon 9"
        description="A powerful rocket developed by SpaceX."
        image={['image1.jpg', 'image2.jpg']}
        id={1}
        reserved={false}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should call reserveRocket when "Reserve Rocket" button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(
      <RocketInfo
        name="Falcon 9"
        description="A powerful rocket developed by SpaceX."
        image={['image1.jpg', 'image2.jpg']}
        id={1}
        reserved={false}
      />,
    );

    const reserveButton = screen.getByText('Reserve Rocket');
    fireEvent.click(reserveButton);

    expect(mockDispatch).toHaveBeenCalledWith(reserveRocket(1));
  });

  it('should call cancelRocket when "Cancel Reservation" button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(
      <RocketInfo
        name="Falcon 9"
        description="A powerful rocket developed by SpaceX."
        image={['image1.jpg', 'image2.jpg']}
        id={1}
        reserved
      />,
    );

    const cancelButton = screen.getByText('Cancel Reservation');
    fireEvent.click(cancelButton);

    expect(mockDispatch).toHaveBeenCalledWith(cancelRocket(1));
  });
});
