import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Rocket from './components/pages/Rocket';
import Missions from './components/pages/Missions';
import Myprofile from './components/pages/Myprofile';
import Dragons from './components/pages/Dragons';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="rocket" element={<Rocket />} exact="true" />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Myprofile />} />
        <Route path="dragons" element={<Dragons />} />
      </Routes>
    </div>
  );
}

export default App;
