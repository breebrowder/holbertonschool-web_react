/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { user, logOut } from "../App/AppContext";

StyleSheetTestUtils.suppressStyleInjection();

describe('Test Header.js functions:', () => {

  it('Mounts the Header component with a default context value. Verify that the logoutSection is not created', () => {
    const value = { user: { email: '', password: '', isLoggedIn: false }, logOut: () => { } }
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('Mounts the Header component with a user defined (isLoggedIn is true and an email is set). Verify that the logoutSection is created', () => {
    const value = { user: { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true }, logOut: () => { } }
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('Mounts the Header component with a user defined (isLoggedIn is true and an email is set) and the logOut is linked to a spy. Verify that clicking on the link is calling the spy', () => {
    const value = { user: { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true }, logOut: () => { } }
    const spy = jest.spyOn(value, 'logOut');
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    wrapper.find('#logoutSection span').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});