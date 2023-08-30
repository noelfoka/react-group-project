const FETCH_DATA = 'my-app/rocket/FETCH';
const RESERVE_ROCKET = 'my-app/rocket/RESERVE';
const CANCEL_BOOKING_ROCKET = 'my-app/rocket/CANCEL';

const initialState = [];

const fetchData = (payload) => (
  {
    type: FETCH_DATA,
    payload,
  }
);

// add reserve
export const reserve = (list, id) => {
  const newState = list.map((rocket) => (
    (rocket.id !== id)
      ? rocket
      : { ...rocket, reserved: 'true' }
  ));
  return ({
    type: RESERVE_ROCKET,
    payload: newState,
  });
};

// add concel

export const cancel = (list, id) => {
  const newState = list.map((rocket) => (
    (rocket.id !== id)
      ? rocket
      : { ...rocket, reserved: 'false' }
  ));
  return ({
    type: RESERVE_ROCKET,
    payload: newState,
  });
};
export const fetchAPI = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const newArr = [];
  data.map((each) => {
    const {
      id,
      rocket_name: rocketName,
      description,
    } = each;
    const obj = {
      id,
      rocketName,
      description,
      flickrImages: each.flickr_images[0],
    };
    return newArr.push(obj);
  });
  dispatch(fetchData(newArr));
};

// modify reducer to add concel and reserve
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case RESERVE_ROCKET:
      return action.payload;
    case CANCEL_BOOKING_ROCKET:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
