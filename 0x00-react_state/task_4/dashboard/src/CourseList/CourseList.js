import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { arrayOf } from 'prop-types';

export default function CourseList({ listCourses }){

  return (
    <div className={css(styles.containerCourse)}>
      <table id='CourseList' className={css(styles.tableStyle)}>
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

const styles = StyleSheet.create({
  containerCourse: {
    minHeight: '26rem',
    padding: '1rem'
  },
  tableStyle: {
    width: '100%',
    borderCollapse: 'collapse'
  }
});

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: arrayOf(CourseShape)
};

