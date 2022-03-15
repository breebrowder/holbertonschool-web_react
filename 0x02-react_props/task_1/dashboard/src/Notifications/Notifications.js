import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';


function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
      <button onClick={buttonClick()} aria-label="Close" style={buttonStyle}>
        <img src={close_icon} alt="closeIcon" style={imageStyle}/>
      </button>
    </div>
  );
}

const buttonClick = () => {
  console.log('Close button has been clicked');
}

const imageStyle = {
  width: '15px',
  height: '15px',
}

const buttonStyle = {
  border: 'none',
  position: 'absolute',
  top: '25px',
  right: '25px',
  background: 'transparent',
}
export default Notifications;
