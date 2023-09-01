import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/configureStore';
import { fetchAPI } from './redux/rocket/Rocket';

test('renders learn react link', async () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  );

  // Attendez que la requête API soit terminée avant de continuer le test
  await store.dispatch(fetchAPI());

  const linkElement = screen.queryByText(/learn react/i);
  expect(linkElement).toBeNull();
});
