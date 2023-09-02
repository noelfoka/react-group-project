import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Profile from '../components/profile';
import store from '../redux/store';

describe('Profile page', () => {
  it('it renders', () => {
    const profile = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(profile).toMatchSnapshot();
  });
});
