import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dragonReducer from './dragons/Dragons';
import missionReducer from './missions/missions';
import rocketsReducer from './rocket/Rocket';

const rootReducer = combineReducers({
  missions: missionReducer,
  dragons: dragonReducer,
  rocket: rocketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
