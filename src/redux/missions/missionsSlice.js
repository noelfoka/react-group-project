import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
};

export const fetchMissionData = createAsyncThunk(
  'mission/fetchMissionData',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  },
);

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    markMissionAsReserved: (state, action) => {
      const { missionId } = action.payload;

      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    },

    leaveMission: (state, action) => {
      const { missionId } = action.payload;

      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissionData.fulfilled, (state, action) => {
      const missionsData = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
      state.missions = missionsData;
    });
  },
});

export const { markMissionAsReserved, leaveMission } = missionSlice.actions;

export default missionSlice.reducer;
