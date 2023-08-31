import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import JoinMission from './JoinMission';

const MissionCard = (props) => {
  const { mission } = props;
  const switchBadge = () => {
    if (mission.isJoined) {
      return <Badge bg="info">Active Member</Badge>;
    }
    return <Badge bg="secondary">Not A Member</Badge>;
  };

  return (
    <tr>
      <th>
        <h5>{mission.mission_name}</h5>
      </th>
      <th className="description">
        <p>{mission.mission_description}</p>
      </th>
      <th className="mission-status">
        {switchBadge()}
        <div>
          <JoinMission
            isJoined={mission.isJoined}
            id={mission.mission_id}
          />
        </div>
      </th>
    </tr>
  );
};

MissionCard.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    mission_description: PropTypes.string,
    isJoined: PropTypes.bool,
  }).isRequired,
};

export default MissionCard;
