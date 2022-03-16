import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="root-notifications">
    <Notifications />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     <Notifications />
//   </React.StrictMode>,
//   document.getElementById('root-notifications')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
