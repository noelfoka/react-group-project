import { useSelector } from 'react-redux';
import './profile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.mission.missions);
  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  const { rockets } = useSelector((state) => state.rockets);
  const reserveRocket = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-page">
      <div className="profile-section">
        <h2 className="profile-head">My Missions</h2>
        <ul className="profile-content">
          {reservedMissions.map((mission) => (
            <li className="profile-item" key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="profile-section">
        <h2 className="profile-head">My Rockets</h2>
        <ul className="profile-content">
          {reserveRocket.map((rocket) => (
            <li className="profile-item" key={rocket.id}>
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
