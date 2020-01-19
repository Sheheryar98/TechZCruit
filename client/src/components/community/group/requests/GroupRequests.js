import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GroupRequestItem from './GroupRequestItem';

const GroupRequests = ({ group }) => {
  return (
    <Fragment>
      {group !== null && group.requests.length > 0
        ? group.requests.map(request => (
            <GroupRequestItem
              key={request._id}
              request={request}
              groupId={group._id}
            />
          ))
        : 'No requests found'}
    </Fragment>
  );
};

GroupRequests.propTypes = {
  group: PropTypes.object.isRequired
};

export default GroupRequests;