import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList'
import CourseListRow from './CourseListRow';
import Adapter from 'enzyme-adapter-react-16';
import "../../config/setupTests";

describe('Testing CourseList.js Functions:', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  it('CourseList without crashing', () => {
    expect(shallow(<CourseList />).exists());

  });

  it('renders 5 rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);

  });

  it('Verify that CourseList renders correctly', () => {
    let wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
    wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });

  it('verify the CourseList renders input courses correctly without errors', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow).first().html()).toEqual('<tr><th colSpan="2">Available courses</th></tr>');
    expect(wrapper.find(CourseListRow)).toHaveLength(5);

  });
});