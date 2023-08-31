import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Missions from '../components/missions/MissionsContainer';

const MissionList = () => {
  <Router>
    <Missions />
  </Router>;
};

test('should render missions', () => {
  const tree = renderer.create(<MissionList />).toJSON();
  expect(tree).toMatchSnapshot();
});
