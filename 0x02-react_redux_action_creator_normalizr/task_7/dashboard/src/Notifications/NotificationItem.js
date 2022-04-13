import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  urgent: {
    color: '#ff0000',
    borderBottom: 'black',

  },
  default: {
    color: '#0000ff',

  },
  styleSmall : {
    '@media (max-width: 900px)': {
      borderBottom:'1px solid black',
      padding: '10px 8px',
    }
  }
})


class NotificationItem extends React.PureComponent {
  constructor (props) {
    super(props)
  }
  render(){

    if (this.props.value) {
      return (<li data-notification-type={this.props.type} className={css(this.props.type === 'urgent' ? styles.urgent : styles.default, styles.styleSmall)} onClick={() => {this.props.markAsRead(this.props.id)}} >{this.props.value}</li>);
    } else {
      return (
        <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} className={css(this.props.type === 'urgent' ? styles.urgent : styles.default, styles.styleSmall)} onClick={() => {this.props.markAsRead(this.props.id)}}></li>
      );
    }
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {},
};

export default NotificationItem;
