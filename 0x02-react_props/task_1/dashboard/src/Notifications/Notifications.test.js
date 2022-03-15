import { shallow } from 'enzyme';
import Notification from './Notifications';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests"


describe('Enzyme - Testing Notification.js Functions:', () => {
  it('1. Notification running without crashing', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('2. renders 3 list items', () => {
    const wrapper = shallow(<Notification />);
    wrapper.update();
    expect(wrapper.find("li")).toHaveLength(3);
  });

  it('3. renders the text "Here is the list of notifications"', () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(<Notification />);
    wrapper.update();
    expect(wrapper.find(".Notifications p").text()).toEqual(text);
  });
});
