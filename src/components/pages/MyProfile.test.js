import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import store from '../../redux/configureStore'; // Import your Redux store
import MyProfile from './Myprofile';

test('renders MyProfile component without errors', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  act(() => {
    createRoot(root).render( // Use createRoot from react-dom/client
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
  });
});
