import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/pages/Navbar';
import Dragon from './components/pages/Dragon';
import Missions from './components/pages/Missions';
import MyProfile from './components/pages/Myprofile';
import Rocket from './components/pages/Rocket';
import { fetchAPI } from './redux/rocket/Rocket';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAPI());
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragon />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
