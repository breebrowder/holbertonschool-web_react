import React from 'react'
import './Notifications.css'
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'

export default function Notifications() {

  function closeBtn() {
    console.log('Close button has been clicked')
  }

  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
      <button aria-label='Close' onClick={closeBtn} style={{ border: 0, background: 'white', position: 'absolute', right: 75, top: 75 }}>
        <img src={closeIcon} border='0' height='15px' width='15px' alt='Close'></img>
      </button>
    </div>
  )
}
