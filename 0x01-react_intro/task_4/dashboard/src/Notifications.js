import React from 'react';
import './Notifications.css';
import closeicon from './close-icon.png';
import { getLatestNotification } from './utils';
const Notifications = () => {
    return (
        <div className='Notifications'>
            <button style={{
                top: '10px',
                right: '50px',
                width: '32px',
                height: '32px',
                position: 'absolute',
                background: 'none',
                border: 'none',
            }}
                aria-label="Close"
                onClick={() => {
                    console.log("Close button has been clicked");
                }}
            ><img src={closeicon} alt='close-icon' id="button-img"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default" id="default">New course available</li>
                <li data-priority="urgent" className='urgent'>New resume available</li>
                <li data-priority="urgent" className='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
};


export default Notifications;