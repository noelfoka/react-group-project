const apiDragons = 'https://api.spacexdata.com/v3/dragons';

const fetchDragons = async () => {
  const get = await fetch(apiDragons);
  const dragons = await get.json();
  return dragons;
};

export default fetchDragons;
