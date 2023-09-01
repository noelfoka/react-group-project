import fetchMissions from './missionAPI';

const GET_MISSIONS = 'React-Redux-group-project/missions/GET_MISSIONS';
const JOIN_MISSION = 'React-Redux-group-project/missions/JOIN_MISSION';
const LEAVE_MISSION = 'React-Redux-group-project/missions/LEAVE_MISSION';

const initialState = [];

let Loading = false;

export const getMissions = () => async (dispatch) => {
  if (Loading) return;
  const response = await fetchMissions();
  const missions = response.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    mission_description: mission.description,
    isJoined: false,
  }));
  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
  Loading = true;
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const missionStatus = (state, id, status) => {
  const newState = state.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return {
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      mission_description: mission.mission_description,
      wikipedia: mission.wikipedia,
      isJoined: status,
    };
  });
  return newState;
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return missionStatus(state, action.id, true);
    case LEAVE_MISSION:
      return missionStatus(state, action.id, false);
    default:
      return state;
  }
};

export { GET_MISSIONS, JOIN_MISSION, LEAVE_MISSION };
export default missionsReducer;
