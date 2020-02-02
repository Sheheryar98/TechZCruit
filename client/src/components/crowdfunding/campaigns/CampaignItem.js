import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import placeholder from '../../../img/placeholder.png';

const CampaignItem = ({
  campaign: { _id, title, description, supporters, fundsRequired }
}) => {
  return (
    <Fragment>
      <Col md={3}>
        <Card className='mb-3'>
          <Card.Img variant='top' src={placeholder} />
          <Card.Body>
            <Card.Title>
              <Link
                to={`/crowdfunding/campaign/${_id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {title}
              </Link>
            </Card.Title>
            <Card.Text className='text-truncate'>{description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <strong>Funds raised:</strong>{' '}
            {Math.round(
              (supporters
                .map(supporter => supporter.amount)
                .reduce((a, b) => a + b, 0) /
                fundsRequired) *
                100
            )}
            {'%'}
          </Card.Footer>
        </Card>
      </Col>
    </Fragment>
  );
};

CampaignItem.propTypes = {
  campaign: PropTypes.object.isRequired
};

export default CampaignItem;