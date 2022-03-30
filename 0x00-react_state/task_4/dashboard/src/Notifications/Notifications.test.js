import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from './NotificationItem'
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("Testing Notifications.js fucntions:", () => {
 const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
  ];

  it("1. Notifications running without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  // it('2. Renders three list items', () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  //   expect(wrapper.find(NotificationItem)).toHaveLength(3);
  // });

  // it('3. Renders the correct default html components', () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
  //   expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  // });

  // it("4. menuItem is not displayed when displayDrawer is false", () => {
  //   const wrapper = shallow(<Notifications />);
  //   expect(wrapper.find('div.menuItem').exists()).toEqual(true);
  // });

  it("5. Notification block is displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("div.Notifications")).toHaveLength(0);
  });

  // it("6. Menuitems are displayed when displayDrawer is true", () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} />);
  //   expect(wrapper.find("div.menuItem")).toHaveLength(1);
  // });
  // it("7. Notification block is displayed when displayDrawer is true", () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} />);
  //   expect(wrapper.find("div.Notifications")).toHaveLength(1);
  // });
  // it('8. Verify that when listNotifications is empty the message "Here is the list of notifications is not displayed", but "No new notification for now" is', (done) => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} />);
  //   expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="no-new">No new notification for now</li>');
  //   done();
  // });
  it("9. when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
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
  // it('10. Checks it does not rerender with the same props', () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  //   const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
  //   expect(shouldComponentUpdate).toHaveBeenCalled();
  //   expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
  // });

  it('11. Checks props of the component with a longer list, the component does rerender', () => {
    const longerList = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: { __html: getLatestNotification() }},
      {id: 4, type: 'default', value: 'Dummy Text'},
      {id: 5, type: 'default', value: 'Testing Text'}
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: longerList});
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
  });
// 0x06. React state tests
  it('12. verify that clicking on the menu item calls handleDisplayDrawer', () => {
  const handleDisplayDrawer = jest.fn();
  const handleHideDrawer = jest.fn();
  const wrapper = shallow(
    <Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer}/>
  );
  wrapper.find("#menuItem").simulate("click");
  expect(handleDisplayDrawer).toHaveBeenCalled();
  expect(handleHideDrawer).not.toHaveBeenCalled();
  jest.restoreAllMocks();
});

it('13. verify that clicking on the button calls handleHideDrawer', () => {
  const handleDisplayDrawer = jest.fn();
  const handleHideDrawer = jest.fn();
  const wrapper = shallow(
    <Notifications displayDrawer handleDisplayDrawer={handleDisplayDrawer}
      handleHideDrawer={handleHideDrawer}/>
  );
  wrapper.find("#closeNotifications").simulate("click");
  expect(handleDisplayDrawer).not.toHaveBeenCalled();
  expect(handleHideDrawer).toHaveBeenCalled();
  jest.restoreAllMocks();
});
});
