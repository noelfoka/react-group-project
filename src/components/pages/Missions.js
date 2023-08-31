import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionsSlice';
import '../Styles/Missions.css';
import MissionCard from './MissionCard';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, pending, error } = useSelector((store) => store.missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  let content;

  if (!pending && !error && Array.isArray(missions)) {
    content = (
      <table className="missions-table">
        <tbody>
          <tr key="missions">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{' '}</th>
          </tr>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <MissionCard props={mission} />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (pending) {
    content = (
      <h1>Fetching Missions</h1>
    );
  }
  if (error) {
    content = (
      <h1>Error occured while fetching missions</h1>
    );
  }
  return (
    <section className="missions">
      {content}
    </section>
  );
};

export default Missions;
