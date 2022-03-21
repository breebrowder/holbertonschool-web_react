import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests"
import { getLatestNotification } from "../utils/utils";


describe("Testing Notifications.js fucntions:", () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
  ];

  it("Notifications running without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('Renders the correct default html components', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

  it("menuItem is not displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("div.menuItem")).toHaveLength(1);
  });

  it("Notification block is displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("div.Notifications")).toHaveLength(0);
  });

  it("Menuitems are displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("div.menuItem")).toHaveLength(1);
  });
  it("Notification block is displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("div.Notifications")).toHaveLength(1);
  });
  it('Verify that when listNotifications is empty the message "Here is the list of notifications is not displayed", but "No new notification for now" is', (done) => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="no-new">No new notification for now</li>');
    done();
  });
});