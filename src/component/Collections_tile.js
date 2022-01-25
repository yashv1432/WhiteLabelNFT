import React, { Component } from "react";
// import './Collections_tile.css'
import { LeaderBoardApi6 } from "../API/LeaderBoardApi";
import { Link } from "react-router-dom";

export class Collections_tile extends Component {
  render() {
    // let { Collections_title, collection_image, no_of_items } = this.props;

    return (
      <div>
        <div class="row">
              {LeaderBoardApi6.map((curElem) => {
                const { image, title, no_of_items } = curElem;
                return (
          <div className="col-md-3 col-lg-3 col-sm-6 col-12">
            <div className="Collections__container">
                  <ul style={{marginTop :"-12px"}}>
                    <li style={{margin: "-62px 0px -62px 0px"}}>
                 <Link to="/CollectionDetails" style={{display:"flex", justifyContent:"center"}}>
                 
                  <img
                        className="Collection__logo"
                        className="img-fluid"
                        class="rounded-circle"
                        alt="100x100"
                        src={image}
                        style={{paddingTop : "-30px"}}
                        data-holder-rendered="true"
                      />
                 </Link>    
                    </li>
                    
                      <li
                        style={{
                          fontSize: "16px",
                          fontWeight: "bolder",
                          marginTop: "15px",
                        }}
                      >
                        {title}
                      </li>
                      <li style={{ fontSize: "16px", fontWeight: "normal" }}>
                        Total Items:<span>{no_of_items}</span>{" "}
                      </li>
                
                  </ul>
            </div>
          </div>
                );
              })}
        </div>
      </div>
    );
  }
}

export default Collections_tile;
