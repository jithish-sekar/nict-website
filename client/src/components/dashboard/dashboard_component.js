import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./dashboard_component.scss"
import SideNavPage from '../side_navigator/side_navigator_component';
import tablebg from '../../components/tablebg.svg';


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <React.Fragment>
        <div className="displayDashboard">
          <div className="dashboardContainer">
            <SideNavPage />
            {/* <h5>Online Examintaion</h5> */}
            {/* <b><i style={{ marginRight: "5px" }} class="fas fa-user"></i>{user.name.split(" ")[0]}</b> */}
            <table style={{ width: "70%", marginLeft: "auto", marginRight: "auto", marginTop: "20px" }}>
              <tr style={{ backgroundColor: "#e2e2e2" }}>
                <th>Exam id</th><th>Exam Name</th><th>Duration</th><th><b style={{ outline: "2px solid black", padding: "10px" }}><i style={{ marginRight: "5px" }} class="fas fa-user"></i>{user.name.split(" ")[0]}</b> </th>
              </tr>
              <tbody>
                <tr>
                  <th scope="row">4321</th>
                  <td>Commputer Application</td>
                  <td>20 min</td>
                  <td><button className="startTest">Start Test</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <img src={tablebg} alt="table"/> */}
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
