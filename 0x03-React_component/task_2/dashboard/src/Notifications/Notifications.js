import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem'
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import { arrayOf, bool } from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

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

class Notifications extends React.Component {
  constructor (props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  render () {
    return (
      <>
        <div className="menuItem">Your notifications</div>
        { this.props.displayDrawer ?
          (<div className="Notifications">
            <button aria-label="Close" style={buttonStyle}
              onClick={() => console.log("Close button has been clicked")}>
              <img src={close_icon} alt="close button icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length === 0 ? (<NotificationItem value='No new notification for now' type='no-new' />) : <></>}
              {this.props.listNotifications.map((not) => (<NotificationItem key={not.id} type={not.type} value={not.value} html={not.html} markAsRead={() => {this.markAsRead(not.id)}} />))}
            </ul>
          </div>)
          : <></>
        }
      </>
    );
  }
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
