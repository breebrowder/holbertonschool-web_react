import React from 'react';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const btnStyle = {
  justifyContent: 'flex-end',
  background: 'transparent',
  border: 'none',
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
};

const imgStyle = {
  width: '15px',
  height: '15px',
}
class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.listNotifications.length < nextProps.listNotifications.length) return true
    return false;
  }

  render() {
    return (
      <div className={css(styles.notificationContainer, styles.mobileNotiContainer)}>
        <div className={css(styles.menuItem, this.props.displayDrawer ? styles.hideElement : '')} id="menuItem">Your notifications</div>
        {this.props.displayDrawer ?
          (<div className={css(styles.notifications, styles.moblieNotification)} id="notifications">
            <button style={btnStyle} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
              <img src={close_icon} style={imgStyle} />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.mobileText)}>
              {this.props.listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={this.markAsRead} />) : <></>}
              {this.props.listNotifications.map((list) => (<NotificationItem id={list.id} key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.markAsRead} />))}
            </ul>
          </div>)
          : <></>
        }
      </div>
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

const opacityItem = {
  'from': {
    opacity: 0.5,
  },

  'to': {
    opacity: 1,
  }
};

const animationItem = {
  '0%': {
    transform: 'translateY(0)',
  },

  '50%': {
    transform: 'translateY(-5px)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
};

const styles = StyleSheet.create({
  notifications: {
    border: '3px dashed #e1354b',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    background: 'white none repeat scroll 0% 0%',
  },
  moblieNotification: {
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      border: 'none',
    }
  },
  menuItem: {
    backgroundColor: '#fff8f8',
    width: '160px',
    marginBottom: '10px',
    textAlign: 'end',
    float: 'right',
    fontSize: '20px',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityItem, animationItem],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
  notificationContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    right: '12px',
    textDecoration: 'none',
    position: 'absolute',
  },
  mobileNotiContainer: {
    '@media (max-width: 900px)': {
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: '2',
      display: 'block !important',
      fontSize: '20px',
    }
  },
  hideElement: {
    display: 'none',
  },
  mobileText: {
    '@media (max-width: 900px)': {
      fontSize: '20px',
      padding: '0',
    }
  }
});

export default Notifications;