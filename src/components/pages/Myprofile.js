import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { joinedMissions } = useSelector((store) => store.user); // Assuming joinedMissions are available in Redux store
  const { missions } = useSelector((store) => store.missions); // Assuming missions are available in Redux store

  // Filter joined missions from the missions array
  const joinedMissionsData = missions.filter((mission) =>
    joinedMissions.includes(mission.id)
  );

  return (
    <div className="profile-list">
      <h1>My Profile</h1>
      <h2>Joined Missions:</h2>
      <ul>
        {joinedMissionsData.map((mission) => (
          <li key={mission.id}>
            <h3>{mission.name}</h3>
            <p>{mission.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfile;
