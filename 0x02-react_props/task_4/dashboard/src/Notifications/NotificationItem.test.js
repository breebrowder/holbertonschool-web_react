import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests"

describe("Testing NotificationItem test functions:", () => {
  it("NotificationsItem renders without crashing", () => {
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
    expect(wrapper.find("li").html()).toEqual("<li><u>test</u></li>");
  });
});
