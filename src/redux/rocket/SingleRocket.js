import PropTypes from 'prop-types';

const SingleRocket = ({
  name,
  description,
  image,
  reserve,
  id,
  rocket,
}) => {
  let status = 'Reserve Rocket';
  let nameOfClass = 'rocket-reserve-btn';
  if (rocket.reserved) {
    if (rocket.reserved === 'true') {
      status = 'Cancel Reservation';
      nameOfClass = 'rocket-cancel-btn';
    }
  }

  return (
    <div className="each-rocket">
      <div className="rocket-img">
        <img src={image} alt={name} className="img-size" />
      </div>
      <div className="rocket-details">
        <h2>{name}</h2>
        <div>
          <p>
            {(rocket.reserved && rocket.reserved === 'true') ? (<span className="reserve-status">Reserved</span>) : null}
            {description}
          </p>
        </div>
        <button type="submit" className={nameOfClass} onClick={() => reserve(id)}>{status}</button>
      </div>
    </div>
  );
};

SingleRocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserve: PropTypes.func.isRequired,
  rocket: PropTypes.instanceOf(Object).isRequired,
};

export default SingleRocket;
