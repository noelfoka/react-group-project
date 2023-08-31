import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { handleMission } from '../../redux/missions/missionsSlice';

const MissionCard = ({ props }) => {
  const {
    name, description, reserved, id,
  } = props;
  const dispatch = useDispatch();

  const getButton = (reserved, btn) => {
    let button;
    if (btn === 'member') {
      button = reserved ? (
        <button className="active-member-btn" type="button">active member</button>
      ) : (
        <button className="not-member-btn" type="button">Not a member</button>
      );
    }
    if (btn === 'mission') {
      button = reserved ? (
        <button className="leave-mission-btn" type="button" onClick={() => dispatch(handleMission(id))}>Leave Mission</button>
      ) : (
        <button className="join-mission-btn" type="button" onClick={() => dispatch(handleMission(id))}>Join Mission</button>
      );
    }
    return button;
  };

  return (
    <>
      <td className="mission-name">{name}</td>
      <td className="mission-description">{description}</td>
      <td className="table-btns">{getButton(reserved, 'member')}</td>
      <td className="table-btns">{getButton(reserved, 'mission')}</td>
    </>
  );
};

MissionCard.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
export default MissionCard;
