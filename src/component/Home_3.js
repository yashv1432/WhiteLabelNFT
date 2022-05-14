import React, { Component } from "react";
// import './Top_collection.css'
import { AbstractApi } from "../API/LeaderBoardApi";
import copy from "../asset/images/copy.PNG";
import globe from "../asset/images/globe.PNG";
import pencil from "../asset/images/pencil.PNG";
import "../asset/Leader.css";
import { Link } from "react-router-dom";

export class Home_3 extends Component {
  render() {
    return (
    <div>
        <div className="modal" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
    );
  }
}

export default Home_3;
//   https://image.shutterstock.com/image-vector/background-water-droplets-on-surface-260nw-274829663.jpg
