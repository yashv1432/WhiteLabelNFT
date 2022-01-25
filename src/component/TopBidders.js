import React, { Component } from "react";
// import './Top_collection.css'
import { LeaderBoardApi4 } from "../API/LeaderBoardApi";
import "../asset/Leader.css";

export class TopBidders extends Component {
  render() {
    return (
      <div style={{ marginLeft: "128PX", marginRight: "128px" }}>
        {/* <h2>Hello</h2> */}
        <div className="Leader_Board_container" style={{marginBottom : "30px"}}>
          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Top Buyers</h1>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              placeholder="All"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid #ddd",
              }}
            >
              Weekly
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
       

        <div class="container CollectionHeading">
          <div class="row">
            <div class="col" style={{paddingLeft : "40px"}}>Name</div>
            <div class="col" style={{padding:"0px",margin:"0px"}}>Volume</div>
            <div class="col" style={{padding:"0px",margin:"0px"}}>Items bought</div>
          </div>
        </div>
        {LeaderBoardApi4.map((curElem) => {
              const { name, volume, itemsbought } = curElem;
              return (
        <div class="container ">
          <div class="row CollectionItem" style={{ backgroundColor: "#f8f8f8"}}>
            <div class="col"> <img
                      className="rounded-circle"
                      src="https://earncashto.com/wp-content/uploads/2021/06/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
                      alt="/"
                      style={{
                        height: "60px",
                        width: "60px",
                        fontSize: "16px",
                      }}
                    />{name}</div>
            <div class="col" style={{color: "#818181" , fontWeight: "normal"}}>  <span>34 ETH</span>
                    {volume}</div>
            <div class="col">{itemsbought}</div>
          </div>
        </div>
         );
        })}
      </div>
    );
  }
}

export default TopBidders;
