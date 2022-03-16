import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList'
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests";

describe('Test CourseList.js functions:', () => {
   it("1. CourseList running without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists());
  });

   it("2. Verify if CourseList renders the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    wrapper.update();
    const courseItem = wrapper.find("CourseListRow");
    expect(courseItem).toHaveLength(5);

    expect(courseItem.at(0).prop("textFirstCell")).toEqual("Available courses");
    expect(courseItem.at(0).prop("isHeader")).toEqual(true);

    expect(courseItem.at(1).prop("textFirstCell")).toEqual("Course name");
    expect(courseItem.at(1).prop("textSecondCell")).toEqual("Credit");
    expect(courseItem.at(1).prop("isHeader")).toEqual(true);

    expect(courseItem.at(2).prop("textFirstCell")).toEqual("ES6");
    expect(courseItem.at(2).prop("textSecondCell")).toEqual("60");
    expect(courseItem.at(2).prop("isHeader")).toEqual(false);

    expect(courseItem.at(3).prop("textFirstCell")).toEqual("Webpack");
    expect(courseItem.at(3).prop("textSecondCell")).toEqual("20");
    expect(courseItem.at(3).prop("isHeader")).toEqual(false);

    expect(courseItem.at(4).prop("textFirstCell")).toEqual("React");
    expect(courseItem.at(4).prop("textSecondCell")).toEqual("40");
    expect(courseItem.at(4).prop("isHeader")).toEqual(false);
  });
});