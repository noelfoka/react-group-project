import { createStore } from 'redux';
import rootReducer from '../../redux/configureStore'; // Import your actual reducer

const mockInitialState = {
  missions: missionReducer,
  rocket: rocketsReducer,
};

const store = createStore(rootReducer, mockInitialState);

export default store;
