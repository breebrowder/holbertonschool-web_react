import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from 'aphrodite';
import NotificationItem from "./NotificationItem";
import close_icon from '../assets/close-icon.png';
import NotificationItemShape from "./NotificationItemShape";


const buttonStyle = {
  background: 'transparent',
  border: 'none',
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
}

const imgStyle = {
  width: '15px',
  height: '15px',
}

const styles = StyleSheet.create({
  notifications: {
    border: '1px dashed #E0434C',
    padding: '1em',
    float: 'right',
    display:'block',
    margin: '10px 30px 0 0'
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '30px'
  },
  notificationsButtonImage: {
    width: '20px'
  }
})


class Notifications extends React.Component {
  constructor (props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
      )
  }

  render () {
    return (
      <>
        <div className='menuItem'><div className={css(styles.menuItem)}>Your notifications</div></div>

        { this.props.displayDrawer ?
          (<div className='Notifications'>
            <div className={css(styles.notifications)}>
              <button aria-label="Close" style={buttonStyle} onClick={() => console.log("Close button has been clicked")}>
                <img src={close_icon} style={imgStyle} className={css(styles.notificationsButtonImage)} alt="close button icon" />
              </button>
              <p>Here is the list of notifications</p>
              <ul>
                {this.props.listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={this.markAsRead} />) : <></>}
                {this.props.listNotifications.map((list) => (<NotificationItem id={list.id} key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.markAsRead} />))}
              </ul>
            </div>
          </div>)
          : <></>
        }
      </>
    );
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

export default Notifications;
