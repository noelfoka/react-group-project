import { useSelector } from 'react-redux';
import JoinMission from './JoinMission';

const MissionProfiles = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.isJoined);

  const displayJoinedMissions = () => {
    if (joinedMissions.length > 0) {
      return joinedMissions.map((mission) => (
        <div key={mission.mission_id} className="joined-3">
          <h6>{ mission.mission_name }</h6>
          <JoinMission isJoined={mission.isJoined} id={mission.mission_id} />
        </div>
      ));
    }
    return <p>No missions joined</p>;
  };
  return (
    <div className="joined-1">
      <h2>MY MISSIONS</h2>
      <div className="joined-2">{displayJoinedMissions()}</div>
    </div>
  );
};

export default MissionProfiles;
