import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem'
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import { arrayOf, bool } from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer, listNotifications }) {
  const buttonClick = () => {
    console.log('Close button has been clicked');
  }
  const buttonStyle = {
    background: 'transparent',
    border: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  }

  const imageStyle = {
    width: '15px',
    height: '15px',
  }
  return (
    <>
    <div className="menuItem">Your notifications</div>
    {displayDrawer ?
      <div className="Notifications">
        <button onClick={() => buttonClick()} aria-label="Close" style={buttonStyle}>
          <img alt="close icon" src={close_icon} style={imageStyle}/>
        </button>
        <p>Here is the list of notifications</p>
        <ul style={{position: 'relative'}}>
          {listNotifications.length === 0 ? (<NotificationItem value="No new notification for now" type='no-new' />) : <></>}
          {listNotifications.map((notification) => (<NotificationItem key={ notification.id } type={ notification.type } value={ notification.value } html={ notification.html } />))}
        </ul>
      </div>
      : <></>
    }
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: bool,
  listNotifications: arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
