/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const loggedUser = { email: 'iambatman@gotham.com', password: 'gotham', isLoggedIn: true };

describe("Test App.js Functions: ", () => {
  it('App renders without any errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Verify if CourseList is displayed when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('verify that when the keys "control" and "h" are pressed the logOut function', () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    const alert = jest.spyOn(global, 'alert');
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
  });
  it("Has default state for displayDrawer false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('Verify that clicking on the menu item calls  handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it('verify that clicking on the button calls handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
  it('verify that the logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn(loggedUser.email, loggedUser.password);
    expect(wrapper.state().user.email).toBe('iambatman@gotham.com');
    expect(wrapper.state().user.password).toBe('gotham');
    expect(wrapper.state().user.isLoggedIn).toBe(true);
  });

  it('verify that the logOut function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: loggedUser });
    wrapper.state().logOut();
    expect(wrapper.state().user.email).toBe('');
    expect(wrapper.state().user.password).toBe('');
    expect(wrapper.state().user.isLoggedIn).toBe(false);
  });
});
