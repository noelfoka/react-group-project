import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rocket/Rocket';

const rootReducer = combineReducers({
  rocket: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
