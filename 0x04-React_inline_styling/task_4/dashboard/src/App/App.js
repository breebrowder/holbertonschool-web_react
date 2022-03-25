import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { PropTypes, bool } from 'prop-types';
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
]

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#white',
    padding: '3rem',
    minHeight: '55rem',
  },
  footer: {
    backgroundColor: '#white',
    textAlign: 'center',
    width: '100%',
    bottom: '0px',
    borderTop: '3px solid #E0434C',
    fontStyle: 'italic',
    padding: '1rem 0'
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleClick);
  }

  handleClick(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render () {
    return(
    <>
      <Notifications listNotifications={listNotifications}/>
      <div className='App'>
        <Header />
      </div>
      <div className={css(styles.body)}>
        {!this.props.isLoggedIn ?
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom> :
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses}/>
          </BodySectionWithMarginBottom>
        }
        <BodySection title="News from the School">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </BodySection>
      </div>
      <div className={css(styles.footer)}>
        <Footer />
      </div>
    </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => void(0),
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
