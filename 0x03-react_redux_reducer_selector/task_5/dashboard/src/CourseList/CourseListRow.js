import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: '#f5f5f5ab'
  },
  headerStyle: {
    backgroundColor: '#deb5b545'
  },
  text: {
    textAlign: 'center',
    border: '1px solid lightgray'
  }
})

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(styles.headerStyle)}>
          <th colSpan="2" className={css(styles.text)}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={css(styles.headerStyle)}>
          <th className={css(styles.text)}>{textFirstCell}</th>
          <th className={css(styles.text)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(styles.rowStyle)}>
        <td className={css(styles.text)}>{textFirstCell}</td>
        <td className={css(styles.text)}>{textSecondCell}</td>
      </tr>
    );
  }
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
