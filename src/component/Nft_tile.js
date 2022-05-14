import React from "react";
import { Link } from "react-router-dom";
import { Nfts_Tile_Api } from "../API/Nfts_Tile_Api";
import Lower__homepage from "./Lower_homepage";
import Upper__homepage from "./Upper__homepage";

function Nft_tile() {
  return (
    <>
      <div className="container">
        <Upper__homepage />
        <Lower__homepage /> 
        <div className="row mob_row" style={{justifyContent:"space-between"}}>
          {Nfts_Tile_Api.map((curElem) => {
            const { id, image, title, price, maxPrice, daysLeft } = curElem;
            return (
              <div className="col-md-6 col-lg-3 col-sm-12 mt-5">
                <Link to="/Nft_Information" style={{ textDecoration: "none" }}>
                  <div
                    className="card nft-card-radius border-radius cardmob"
                    style={{ marginLeft: "1em" }}
                  >
                    <img
                      className="img-fluid border-radius nft-img-radius card_imgmob"
                      src={image}
                      style={{ width: "270px" }}
                    />
                    <img
                      id="like_icon"
                      src={require("../asset//images/Like.png")}
                    />
                    <div>
                      <div className="container__up">
                        <h6
                          className="font-15 font-weight-700 text-dark"
                          style={{ marginLeft: "1em" }}
                        >
                          {title}
                        </h6>
                        <h6 className="value">{price}</h6>
                      </div>
                      <h6
                        className="value__high font-13 text-dark"
                        style={{ marginLeft: "1em" }}
                      >
                        Highest bid:
                        <span className="font-weight-900">{maxPrice}</span>
                        <span  className="dayleft_mob" style={{ marginLeft: "2em", color: "#000" }}>
                          <i class="far fa-clock" style={{ color: "#f54" }}></i>
                          {daysLeft} days left
                        </span>
                      </h6>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Nft_tile;
