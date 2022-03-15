import React from 'react';

export default function NotificationItem({ type, value, html }) {
  if (value) {
    return <li data-notification-type={type}>{value}</li>;
  } else {
    return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
  }
}
