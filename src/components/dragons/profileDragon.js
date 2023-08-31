import React from 'react';
import './dragon-profile.css';
import { useSelector } from 'react-redux';
import JoinButton from './joinButton';

const Profile = () => {
  const dragonsList = useSelector((newState) => newState.dragons);
  const myDragons = dragonsList.filter((dragon) => dragon.reserved === true);
  return (
    <section className="profile">
      <div className="profDragons">
        <h2>MY DRAGONS</h2>
        <ul className="my">
          {myDragons.map((dragon) => (
            <div className="MyReserved" key={dragon.id}>
              <h6>{dragon.name}</h6>
              <JoinButton dragon={dragon} />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
