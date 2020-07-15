import React, { Component } from "react";
import { Link } from "react-router-dom";
import Group from '../../components/Group.svg';
import Groupsmob from '../../components/Groupsmob.svg';
import nictland from '../../components/nictland.svg';
import './landingpage_component.scss';

class Landing extends Component {
  render() {
    return (
      // <div style={{ height: "75vh" }} className="container valign-wrapper">
      //   <div className="row">
      //     <div className="col s12 center-align">
      //       <h4>
      //         <b>Build</b> a login/auth app with the{" "}
      //         <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
      //         scratch
      //       </h4>
      //       <p className="flow-text grey-text text-darken-1">
      //         Create a (minimal) full-stack app with user authentication via
      //         passport and JWTs
      //       </p>
      //       <br />
      //       <div className="col s6">
      //         <Link
      //           to="/register"
      //           style={{
      //             width: "140px",
      //             borderRadius: "3px",
      //             letterSpacing: "1.5px"
      //           }}
      //           className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      //         >
      //           Register
      //         </Link>
      //       </div>
      //       <div className="col s6">
      //         <Link
      //           to="/login"
      //           style={{
      //             width: "140px",
      //             borderRadius: "3px",
      //             letterSpacing: "1.5px"
      //           }}
      //           className="btn btn-large btn-flat waves-effect white black-text"
      //         >
      //           Log In
      //         </Link>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <React.Fragment>
        {/* <div className="landingContainer">
          <img src={Group} alt="nict" />
        </div> */}
        <div style={{ display: "flex" }} >
          <div className="containerObjective">
            <h3>OBJECTIVE</h3>
            <p>With Solo Aim of Capacity Building Skill Development in the areas of NICT academic education and professionals for successfull acheivement.</p>
            <div className="courseTypes">
              <img style={{ height: "100px", paddingLeft: "20px", paddingTop: "20px" }} src="nicthome.png" alt="nict" />
              <div className='chevronRight'>
                <i class="fas fa-chevron-right"></i><span>CERTIFICATED COURSES</span><br /><br />
                <i class="fas fa-chevron-right"></i><span style={{ marginTop: "20px" }}>DIPLOMA COURSES</span><br />
              </div>
              <div className='chevronRight'>
                <i class="fas fa-chevron-right"></i><span>PG DIPLOMA COURSES</span><br /><br />
                <i class="fas fa-chevron-right"></i><span>CUSTOMISED COURSES</span><br />
              </div>
            </div>
            <div>
              <h3>METHODOLOGY</h3>
              <div className="courseTypes">
                <img style={{ height: "130px", paddingLeft: "20px", paddingTop: "20px" }} src="nicthome2.png" alt="nict" />
                <div className='chevronRight'>
                  <i class="fas fa-chevron-right"></i><span>CLASS ROOM TRAINING</span><br /><br />
                </div>
                <div className='chevronRight'>
                  <i class="fas fa-chevron-right"></i><span>E-LEARNING<img style={{ height: "11px", paddingLeft: "10px", paddingTop: "" }} src="live.jpg" alt="nict" /></span><br /><br />
                </div>
              </div>
              <div className="studentAdmin">
              <button style={{backgroundColor:"#01112c",color:"#fff"}}>Admin Login</button>
              <button>Students Login</button>
              </div>
            </div>
          </div>
          <div className="brightStudent">
            <h4 className="brightContainer">We help you choose the right talent</h4>

            <img style={{ height: "390px",width:'auto',marginTop: "40px", marginLeft: "auto", marginRight: "auto", display: "block" }} src={nictland} alt='nict' />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
