import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markMissionAsReserved, leaveMission } from '../redux/missions/missionsSlice';
import './missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission.missions);

  const handleMissionAction = (missionId) => {
    const mission = missions.find((mission) => mission.mission_id === missionId);

    if (mission) {
      if (mission.reserved) {
        dispatch(leaveMission({ missionId }));
      } else {
        dispatch(markMissionAsReserved({ missionId, reserved: true }));
      }
    }
  };

  return (
    <div className="missions-page">
      <h1>Missions</h1>
      <div className="mission-container">
        <ul className="mission-set mission-head">
          <li className="mission-name">Mission Name</li>
          <li className="mission-description">Description</li>
          <li className="mission-status">Status</li>
          <li className="mission-action">Action</li>
        </ul>
        {missions.map((mission) => (
          <ul className="mission-set" key={mission.mission_id}>
            <li className="mission-name">{mission.mission_name}</li>
            <li className="mission-description">{mission.description}</li>
            <li className="mission-status">
              <button type="submit" id="membership" className={mission.reserved ? 'membership_on' : 'membership'}>
                {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
              </button>
            </li>
            <li className="mission-action">
              <button type="submit" id="join" className={mission.reserved ? 'join_on' : 'join'} onClick={() => handleMissionAction(mission.mission_id)}>
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Missions;
