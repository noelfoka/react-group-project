import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import configureStore from 'redux-mock-store';
import MissionCard from '../components/missions/MissionCard';

const mockStore = configureStore([]);

describe('MissionCard', () => {
  test('MissionCard rendered correctly', () => {
    const store = mockStore({
      missions: {
        missions: [
          {
            name: 'Test Mission',
            description: 'Test Description',
            reserved: false,
            id: 'test-id',
          },
        ],
        pending: false,
        error: false,
      },
    });

    const myMissions = render(
      <Provider store={store}>
        <MissionCard props={store.getState().missions.missions[0]} />
      </Provider>,
    );
    expect(myMissions).toMatchSnapshot();
  });
});
