import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests";
import '@testing-library/jest-dom';

describe('Test CourseListRow.js functions:', () => {
  it("CourseListRow renders without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("When isHeader = true, verify it renders 1 cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').props()).toHaveProperty('colSpan', '2');
  });

  it("When isHeader = true, verify it renders 2 cells when textSecondCell is present", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="second" />);
    expect(wrapper.find("th")).toHaveLength(2);
    expect(wrapper.find("th").first().text()).toEqual("test");
    expect(wrapper.find("th").at(1).text()).toEqual("second");
  });
  it("When isHeader = false, verify it renders correctly 2 td elements within tr", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="second" />);
    expect(wrapper.find("tr")).toHaveLength(1);
    expect(wrapper.find("tr").children("td")).toHaveLength(2);
  });
});