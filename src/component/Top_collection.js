import React, { Component } from "react";
// import './Top_collection.css'
import { LeaderBoardApi3 } from "../API/LeaderBoardApi";
import "../asset/Leader.css";

export class Top_collection extends Component {
  render() {
    return (
      <div
        className="topcollection_mob"
        style={{ marginLeft: "128PX", marginRight: "128px" }}
      >
        {/* <h2>Hello</h2> */}
        <div
          className="Leader_Board_container"
          style={{ marginBottom: "30px" }}
        >
          <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
            Top Collections
          </h1>
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
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between"
              }}
            >
              Weekly
              <i class="fas fa-caret-down"></i>
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
            <div class="col" style={{ paddingLeft: "40px" }}>
              Name
            </div>
            <div class="col" style={{ padding: "0px", margin: "0px" }}>
              Volume
            </div>
            <div class="col" style={{ padding: "0px", margin: "0px" }}>
              Owners
            </div>
            <div class="col" style={{ padding: "0px", margin: "0px" }}>
              Items
            </div>
          </div>
        </div>
        {LeaderBoardApi3.map((curElem) => {
          const { name, volume, owners, items } = curElem;
          return (
            <div class="container ">
              <div
                class="row CollectionItem"
                style={{ backgroundColor: "#f8f8f8" }}
              >
                <div class="col">
                  <img
                    className="rounded-circle"
                    src="https://earncashto.com/wp-content/uploads/2021/06/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
                    alt="/"
                  
                  />
                  <h2>{name}</h2>
                </div>
                <div
                  class="col"
                  style={{ color: "#818181", fontWeight: "normal" }}
                >
                  {" "}
                  <span>34 ETH</span>
                  {volume}
                </div>
                <div class="col">{owners}</div>
                <div class="col">{items}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Top_collection;
