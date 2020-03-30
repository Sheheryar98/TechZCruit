import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getConversationById } from '../../../actions/chat/conversation';
import { setAlert } from '../../../actions/alert';
import styles from '../../../css/chat/conversation/style.module.css';
import Footer from '../../layout/Footer';
import Alert from '../../layout/Alert';
import SideNav from '../../layout/SideNav';
import Message from './Message';
import { Form, InputGroup, Button } from 'react-bootstrap';
import socketIOClient from 'socket.io-client';

const Conversation = ({
  conversation: { loading, conversation },
  auth,
  getConversationById,
  match,
  setAlert
}) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Only get the conversation once not more that once
    if (socket === null && auth.user === null) {
      getConversationById(match.params.id);
    }
    if (socket === null) {
      // If the socket is not initalized then create a new socket connection
      setSocket(socketIOClient());
    } else if (socket !== null && auth.user !== null) {
      // If the socket is initilaized and the user is loaded then add the user to the current room
      socket.emit('joinRoom', { user: auth.user, room: match.params.id });
    }
  }, [getConversationById, match.params.id, socket, auth.loading]);

  const [formData, setFormData] = useState({
    message: ''
  });

  const { message } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (message === '') {
      setAlert('Message is required', 'danger');
    } else {
      socket.emit('message', {
        room: match.params.id,
        user: auth.user._id,
        message
      });
      setFormData({ ...formData, message: '' });
    }
  };

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i>{' '}
            {!loading &&
              auth.user !== null &&
              conversation !== null &&
              conversation.users.filter(
                item => item.user._id !== auth.user._id
              )[0].user.name}
          </div>
          <div className={styles.message_box}>
            {!loading &&
            auth.user !== null &&
            conversation !== null &&
            conversation.messages.length > 0 ? (
              conversation.messages.map(message => (
                <Message
                  key={message._id}
                  message={message}
                  auth={auth}
                  styles={styles}
                />
              ))
            ) : (
              <div className={styles.sub_heading}>No messages found</div>
            )}
          </div>
          <div className={styles.input_box}>
            <Form onSubmit={e => onSubmit(e)}>
              <Form.Group style={{ marginBottom: '0' }}>
                <InputGroup>
                  <Form.Control
                    type='text'
                    name='message'
                    value={message}
                    onChange={e => onChange(e)}
                    placeholder='Enter message here'
                  />
                  <InputGroup.Append>
                    <Button
                      variant='success'
                      type='submit'
                      style={{ width: '150px' }}
                    >
                      <i className='fas fa-paper-plane'></i> Send
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Conversation.propTypes = {
  conversation: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getConversationById: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  conversation: state.conversation,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getConversationById,
  setAlert
})(Conversation);
