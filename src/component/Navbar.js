import React from "react";
// import './Navbar.css'
import { Link } from "react-router-dom";
import "../asset/Notification.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{ backgroundColor: "white" }}>
          <Link className="navbar-brand" to="/About">
            <img
              src={require("../asset/images/logo.png")}
              style={{ width: "40px" }}
            />
          </Link>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
            <ul className="navbar-nav navbar-nav1">
          <li className="mobviewnav">
              <Link  to="/Notification">
                     <img className="noti"
                  src={require("../asset/images/notification.png")}
                  style={{ color: "gray", cursor: "pointer", marginTop: "6px"}}
                ></img></Link>
              </li> 

              <li className=" mobviewnav">
                <Link
                  
                  to="/MyProfile"
                
                >
                  <img  className="btnnav_mob1"
                    src={require("../asset/images/profile.png")}
                    style={{ color: "gray", cursor: "pointer",marginTop:"6px" }}
                  ></img>
                </Link>
                
              </li>
              <li className="mobviewnav">
                <Link to="/Wallet">
                  <img className="btnnav_mob2"
                    src={require("../asset/images/wallet.png")}
                    style={{
                      color: "gray",
                      cursor: "pointer",
                      marginTop: "6px",
                    //  marginRight:"30px"
                    }}
                  ></img>
                </Link>
              </li>
              </ul>
              {/* </div> */}
              <button
            className=" navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Link to="/Menu">
            
            <span className="navbar-toggler-icon"></span>
            </Link>
          </button>
          <form className="d-flex p-0 m-0 form1">
            <input
              className="form-control form-controlmob "
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                backgroundColor: "#f8f8f8",
                width: "65%",
                height: "35px",
                border: "0",
              }}
            />
            <button
            className="screachbtn"
              style={{
                border: "0",
                width: "35px",
                height: "35px",
                backgroundColor: "#f8f8f8",
                marginLeft: "5px",
              }}
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
         

         

          <div className="collapse navbar-collapse mobcollapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  Marketplace
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  exact
                  to="/LeaderBoard"
                  style={{ fontSize: "16px" }}
                >
                  Leaderboard
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontSize: "16px" }}
                >
                  Resource
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/HelpCenter">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Suggestion">
                      Suggestions
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/CreateNFT">
                  <button
                    type="button"
                    className="btn btn-primary btnnav "
                    style={{ padding: "5px 30px 5px 30px" }}
                  >
                    Create
                  </button>
                </Link>
              </li>
              <li className="removeinmob" style={{ lineHeight: "40px", color: "gray", marginLeft:"30px"}}>|</li>
              <li>
              <Link  to="/Notification">
                     <img className="noti"
                  src={require("../asset/images/notification.png")}
                  style={{ color: "gray", cursor: "pointer", marginTop: "6px" ,marginLeft:"10px"}}
                ></img></Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img  className="btnnav_mob1"
                    src={require("../asset/images/profile.png")}
                    style={{ color: "gray", cursor: "pointer" }}
                  ></img>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{marginLeft:"-3rem"}}>
                  <li>
                    <Link className="dropdown-item" to="/MyProfile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/MyItems">
                      My Items
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Create">
                  <img className="btnnav_mob2"
                    src={require("../asset/images/wallet.png")}
                    style={{
                      color: "gray",
                      cursor: "pointer",
                      marginTop: "6px",
                     marginRight:"30px"
                    }}
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
