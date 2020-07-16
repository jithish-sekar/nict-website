import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./side_navigator.scss";
class SideNavPage extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <React.Fragment>
        <div className="sideNavContainer">
         <ul>
           <li><i class="fas fa-home"></i>DashBoard</li>
           <li><i class="fas fa-user"></i>My Account</li>
           <li><i class="fas fa-history"></i>Exam History</li>
           <li><i class="fas fa-user"></i>My Account</li>
           <li><i class="fas fa-question-circle"></i>Help & Documentation</li>
           <li><i class="fas fa-home"></i>DashBoard</li>
           <li onClick={this.onLogoutClick}><i class="fas fa-power-off"></i>Logout</li> 
         </ul>
        </div>
      </React.Fragment>
    );
  }
}

SideNavPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(SideNavPage);