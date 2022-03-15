import React from "react";
import "./App.css";
import logo from '../assets/holberton-logo.jpg';
import Header from "../Header/Header";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <>
      <Notifications />
      <Header />
      <body className='App-body'>
        <Login />
      </body>
      <Footer />
    </>
  );
}