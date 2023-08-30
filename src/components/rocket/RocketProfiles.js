import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancel } from '../../redux/rocket/Rocket';

const RocketProfiles = () => {
  const list = useSelector((state) => state.rocket);
  const filteredRockets = list.filter((each) => each.reserved === 'true');
  const dispatch = useDispatch();
  const leave = (id) => {
    dispatch(cancel(list, id));
  };

  return (

    <div className="rockets">
      <h2>MY ROCKETS</h2>
      <ul className="profile-lists">
        {filteredRockets.map((reserved) => (
          <li key={reserved.id} className="list">
            <p className="name">{reserved.rocketName}</p>
            <button type="submit" className="btn btn-outline-danger text" onClick={() => leave(reserved.id)}>Cancel Reservation</button>
          </li>
        ))}
      </ul>
      {(!filteredRockets.length >= 1)
        ? <p className="no-mission">Please Reserve a Rocket </p>
        : null}
    </div>

  );
};

export default RocketProfiles;
