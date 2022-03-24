import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types'
import BodySection from './BodySection';

class BodySectionWithMarginBottom extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
             <div className={css(styles.bodySectionWithMargin)}>
                <BodySection {...this.props}/>
            </div>
        )
    }
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginTop: '40px'
  }
});

BodySectionWithMarginBottom.defaultProps = {
    title: ''
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string
}

export default BodySectionWithMarginBottom;
