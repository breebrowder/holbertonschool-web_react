import React from "react";
import NotificationItem from './NotificationItem';
import { shallow } from "enzyme";


describe("Testing NotificationItem test functions:", () => {
  it("NotificationItem renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Verify components by passing dummy type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li")).toHaveLength(1);
    expect(wrapper.find("li").text()).toEqual("test");
    expect(wrapper.find("li").prop("data-notification-type")).toEqual("default");
  });

  it("Verify components by passing a dummy html prop", () => {
    const wrapper = shallow(<NotificationItem html={{ __html: "<u>test</u>" }} />);
    expect(wrapper.find("li").html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
  });

  it("When calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    const id = 3;
    const wrapper = shallow(
      <NotificationItem type="default" value="test" id={id} />
    );
    const instance = wrapper.instance();
    instance.markAsRead = jest.fn();
    const listItem = wrapper.find("li").first();
    listItem.simulate("click");
    instance.markAsRead(id);
    expect(instance.markAsRead).toHaveBeenCalledWith(3);
    jest.restoreAllMocks();
  });
});