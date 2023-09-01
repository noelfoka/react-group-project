import { Outlet, Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import MyProfile from './components/profile';
import Missions from './components/missions';
import Rockets from './components/Rockets';
import { fetchRockets } from './redux/rockets/rocketsSlice';
import { fetchMissionData } from './redux/missions/missionsSlice';

const Home = () => (
  <>
    <Header />
    <Outlet />
  </>
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMissionData());
  });

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
