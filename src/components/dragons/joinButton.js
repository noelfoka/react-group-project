import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { reserveDragon, unreserveDragon } from '../../redux/dragons/Dragons';

const JoinButton = (props) => {
  const { dragon } = props;
  const { id, reserved } = dragon;
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (!reserved) {
      dispatch(reserveDragon(id));
    } else {
      dispatch(unreserveDragon(id));
    }
  };

  return (
    <Button
      onClick={clickHandler}
      type="button"
      variant={reserved ? 'outline-danger' : 'outline-primary'}
    >
      Cancel Reservation
    </Button>
  );
};

JoinButton.propTypes = {
  dragon:
        PropTypes.objectOf(
          {
            id: PropTypes.number,
            reserved: PropTypes.string,
          },
        ).isRequired,
};

export default JoinButton;
