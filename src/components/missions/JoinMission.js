import React from 'react';
import { bool, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const JoinMission = (props) => {
  const { isJoined, id } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isJoined) {
      dispatch(joinMission(id));
    } else {
      dispatch(leaveMission(id));
    }
  };

  return (
    <Button
      type="button"
      variant={isJoined ? 'outline-danger' : 'outline-primary'}
      onClick={handleClick}
    >
      { isJoined ? 'Leave' : 'Join' }
      {' '}
      {' '}
      Mission
    </Button>
  );
};

JoinMission.propTypes = { isJoined: bool.isRequired, id: string.isRequired };

export default JoinMission;
