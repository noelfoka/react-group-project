import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const req = axios.get('https://api.spacexdata.com/v3/missions');
    const { data } = await req;
    const result = [];
    data.forEach((mission) => {
      result.push({
        name: mission.mission_name,
        description: mission.description,
        id: mission.mission_id,
        reserved: false,
      });
    });
    return result;
  },
);

const initialState = {
  missions: [],
  pending: false,
  error: false,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    handleMission: (state, { payload }) => {
      const missions = [];
      state.missions.forEach((mission) => {
        if (mission.id === payload) {
          missions.push({
            ...mission,
            reserved: !mission.reserved,
          });
        } else {
          missions.push({ ...mission });
        }
      });
      return {
        ...state,
        missions,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, { payload }) => ({
      ...state,
      missions: payload,
      pending: false,
      error: false,
    }));
    builder.addCase(fetchMissions.pending, (state) => ({
      ...state,
      pending: true,
      error: false,
    }));

    builder.addCase(fetchMissions.rejected, (state) => ({
      ...state,
      pending: false,
      error: true,
    }));
  },
});

export default missionsSlice.reducer;
export const { handleMission } = missionsSlice.actions;
