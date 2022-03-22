import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
  constructor (props) {
    super(props)
  }
  render(){
    if (this.props.value) {
      return (<li data-notification-type={this.props.type} onClick={() => {this.props.markAsRead(this.props.id)}} >{this.props.value}</li>);
    } else {
      return (
        <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => {this.props.markAsRead(this.props.id)}}></li>
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
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
   markAsRead: () => {},
};

export default NotificationItem;