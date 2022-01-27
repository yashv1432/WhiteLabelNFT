import React from "react";
import { Link } from "react-router-dom";
import buying from "../asset/images/buying.PNG";
import selling from "../asset/images/selling.PNG";
import creating from "../asset/images/creation.PNG";
import adding from "../asset/images/adding.PNG";
function HelpCenter() {
  return (
    <div>
      <div className="container">
        <h1 style={{ fontSize: "20px", marginTop: "50px", marginLeft: "50px" }}>
          Help center
        </h1>
        <div class="row">
          <div class="col-sm-6 col-lg-3 col-md-5 col-12 p-5">
            <div
              className="card"
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                width: "280px",
              }}
            >
              <div class="card-body">
                <img src={buying} />
                <Link
                  to="/Buying"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h5 class="card-title" style={{ marginBottom: "0.5rem" }}>
                    Buying
                  </h5>
                </Link>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-5 col-lg-3 col-sm-6 col-11 p-5">
            <div class="card" style={{ cursor: "pointer" }}>
              <div class="card-body">
                <img src={selling} />
                <h5 class="card-title" style={{ marginBottom: "0.5rem" }}>
                  <Link to="/Fixed_Price">Selling</Link>
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-5 col-lg-3 col-sm-6 col-11 p-5">
            <div class="card" style={{ cursor: "pointer" }}>
              <div class="card-body">
                <img src={creating} />
                <h5 class="card-title" style={{ marginBottom: "0.5rem" }}>
                  <Link to="/Highest_Bid">Creating Collection</Link>
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-5 col-lg-3 col-sm-6 col-11 p-5">
            <div class="card" style={{ cursor: "pointer" }}>
              <div class="card-body">
                <img src={adding} />
                <h5 class="card-title" style={{ marginBottom: "0.5rem" }}>
                  Adding NFT's
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
