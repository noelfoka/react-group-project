import MissionProfiles from '../missions/MissionProfiles';
import RocketProfiles from '../rocket/RocketProfiles';

import Profile from '../dragons/profileDragon';

const MyProfile = () => (
  <div className="profile-list">
    <MissionProfiles />
    <Profile />
    <RocketProfiles />
  </div>
);

export default MyProfile;
