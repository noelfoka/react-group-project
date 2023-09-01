import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const rootReducer = combineReducers({
  mission: missionReducer,
  rockets: rocketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
