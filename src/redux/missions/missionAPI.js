const missionsAPI = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  const response = await fetch(missionsAPI);
  const data = await response.json();
  return data;
};

export default fetchMissions;
