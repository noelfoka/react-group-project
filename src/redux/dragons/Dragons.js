import fetchDragons from './api';

const FETCHDRAGONS = 'FETCHDRAGONS';
const RESERVEDRAGON = 'RESERVEDRAGON';
const UNRESERVEDRAGON = 'UNRESERVEDRAGON';

export const getDragons = () => async (dispatch) => {
  const newState = await fetchDragons();
  const dragons = [];
  newState.forEach((dragon) => {
    dragons.push({
      id: dragon.id,
      name: dragon.name,
      description: dragon.description,
      image: dragon.flickr_images[0],
      reserved: false,
    });
  });
  dispatch({
    type: FETCHDRAGONS,
    dragons,
  });
};

export const reserveDragon = (id) => ({
  type: RESERVEDRAGON,
  id,
});

export const unreserveDragon = (id) => ({
  type: UNRESERVEDRAGON,
  id,
});

const dragonReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHDRAGONS:
      return action.dragons;
    case RESERVEDRAGON: {
      const valState = state.map((dragon) => {
        if (dragon.id !== action.id) {
          return dragon;
        }
        return { ...dragon, reserved: true };
      });
      return valState;
    }
    case UNRESERVEDRAGON: {
      const valState = state.map((dragon) => {
        if (dragon.id !== action.id) {
          return dragon;
        }
        return { ...dragon, reserved: false };
      });
      return valState;
    }
    default:
      return state;
  }
};

export default dragonReducer;
