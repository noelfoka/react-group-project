import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore'; // Import your Redux store
import MyProfile from './Myprofile';

test('renders MyProfile component without errors', () => {
  const root = document.createElement('div'); // Create a DOM element for rendering
  root.id = 'root'; // Match the ID to your HTML file
  document.body.appendChild(root); // Append the root element to the document body

  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <MyProfile />
    </Provider>
  );
});
