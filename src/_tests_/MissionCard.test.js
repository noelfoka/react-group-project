import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MissionCard from '../components/missions/MissionCard';

const mockStore = configureStore([]);

describe('MissionCard', () => {
  test('MissionCard rendered correctly', () => {
    const initialState = {
      missions: [
        {
          name: 'Test Mission',
          mission_description: 'Test Description',
          isJoined: false,
          mission_id: 'test-id',
        },
      ],
    };

    const store = mockStore(initialState);

    const { asFragment } = render(
      <Provider store={store}>
        <MissionCard mission={store.getState().missions[0]} />
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
