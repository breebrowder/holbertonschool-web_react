import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let cell;
  const style = {
    headerStyle: { backgroundColor: '#deb5b545' },
    bodyStyle: { backgroundColor: '#f5f5f5ab' },
  };

  if (!isHeader) {
    cell = (
      <>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
      </>
    );
  }
  else {
    if (textSecondCell) {
      cell = (
        <>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
        </>
      );
    }
    else cell = (<th colSpan='2'>{textFirstCell}</th>);
  }
  return(<tr style={ isHeader ? style.headerStyle : style.bodyStyle }>{cell}</tr>);
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) 
}

export default CourseListRow;
