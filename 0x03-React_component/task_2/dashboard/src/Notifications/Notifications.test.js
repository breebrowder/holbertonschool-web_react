import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from './NotificationItem'


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

  it("when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    console.log = jest.fn();
    const instance = wrapper.instance();
    const id = 5;
    instance.markAsRead(id);
    expect(console.log).toHaveBeenCalledWith(
      `Notification ${id} has been marked as read`
    );
    jest.restoreAllMocks();
  });
});