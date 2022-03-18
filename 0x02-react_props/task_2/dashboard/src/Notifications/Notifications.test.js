import { shallow } from 'enzyme';
import Notifications from './Notifications';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests"


describe('Enzyme - Testing Notification.js Functions:', () => {
  it('Notification running without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Checks the text 'Here is the list of Notifications'", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".Notifications p").text()).toEqual("Here is the list of notifications");
  });

  it("Checks Item and correct html components", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("NotificationItem")).toBeDefined();
    expect(wrapper.find("NotificationItem").first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
});
