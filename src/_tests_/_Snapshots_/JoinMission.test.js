import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import JoinMission from '../../components/missions/JoinMission';

// Mock useDispatch to track dispatched actions
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('JoinMission Component', () => {
  it('should render correctly with "Join" button when not joined', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText } = render(<JoinMission isJoined={false} id="mission123" />);

    const joinButton = getByText('Join Mission');
    expect(joinButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(joinButton);
    });

    expect(dispatch).toHaveBeenCalledWith({ type: 'React-Redux-group-project/missions/JOIN_MISSION', id: 'mission123' });
  });

  it('should render correctly with "Leave" button when already joined', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText } = render(<JoinMission isJoined id="mission123" />);

    const leaveButton = getByText('Leave Mission');
    expect(leaveButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(leaveButton);
    });

    expect(dispatch).toHaveBeenCalledWith({ type: 'React-Redux-group-project/missions/LEAVE_MISSION', id: 'mission123' });
  });
});
