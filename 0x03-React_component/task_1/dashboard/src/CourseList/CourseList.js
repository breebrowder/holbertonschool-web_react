import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { arrayOf } from 'prop-types';

export default function CourseList({ listCourses }){

  return (
    <div className="wrapper">
      <table id='CourseList' className="coursecontainer">
        <thead>
            <CourseListRow textFirstCell='Available courses' isHeader={true} />
            <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (<CourseListRow textFirstCell="No course available yet" isHeader={false} />) : <></>}
          {listCourses.map((course) => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />))}
        </tbody>
      </table>
    </div>
  );
}

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: arrayOf(CourseShape)
};

