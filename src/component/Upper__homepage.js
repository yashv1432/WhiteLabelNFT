import React, { Component } from "react";
// import './Upper__homepage.css'
import { Link } from "react-router-dom";

export class Upper__homepage extends Component {
  render() {
    return (
      <div>
        <div id="upper__home" className="container">
          <div className="upper__homepage">
            <h1 className="font-20 font-weight-700 mt-4">Marketplace</h1>
          </div>

          <div className="middle__homepage">
            <Link
              className="font-18 font-weight-700"
              style={{ textDecoration: "none", color: "#000" }}
              to="/nfts"
            >
              NFTS
            </Link>
            <Link
              className="font-18 font-weight-700"
              style={{
                textDecoration: "none",
                color: "#000",
                marginLeft: "2em",
              }}
              to="/MarketPlace/collections"
            >
              Collections
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Upper__homepage;
