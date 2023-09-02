import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

const RocketInfo = ({
  name, description, image, id, reserved,
}) => {
  const dispatch = useDispatch();

  const toggleReservedStatus = () => {
    if (reserved) {
      dispatch(cancelRocket(id));
    } else {
      dispatch(reserveRocket(id));
    }
  };

  const buttonClass = reserved ? 'reserved-button' : 'reserve-rocket';

  return (
    <div className="rockets-container">
      <div>
        <img className="rockets-pictures" src={image[0]} alt="rockets-pictures" />
      </div>
      <div className="rockets-info">
        <h2>{name}</h2>
        <p>
          {reserved ? <span className="reserved-tag">Reserved</span> : null}
          {description}
        </p>
        <button
          type="button"
          className={buttonClass}
          onClick={toggleReservedStatus}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

export default RocketInfo;

RocketInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

RocketInfo.defaultProps = {
  reserved: false,
};
