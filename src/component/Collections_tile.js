import React from "react";
import { CollectionTile_Api } from "../API/CollectionTile_Api";
import Upper__homepage from "./Upper__homepage";
import Collection_Lower_homepage from "./Collection_Lower_homepage";

function Collections_tile() {
  return (
    <>
      <div className="container">
        <Upper__homepage />
        <Collection_Lower_homepage />
        <div className="row mob_row" style={{justifyContent:"space-between"}}>
          {CollectionTile_Api.map((curElem) => {
            const { id, image, title, number } = curElem;
            return (
              <div className="col-md-6 col-lg-3 col-sm-12 mt-5">
                <div
                  className="card nft-card-radius collection-card border-radius pt-4 cardmob"
                  style={{ marginLeft: "1em", backgroundColor: "#F8F8F8" }}
                >
                  <div className="text-center">
                    <img
                      className="img-fluid border-radius collection-img-card-radius collection_imgmob"
                      src={image}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div className="text-center pt-3">
                    <h6 className="value__high font-16 text-center font-weight-900">
                      {title}
                    </h6>
                    <p>
                      <span className="font-14 text-dark">
                        Total Items:
                        <span className="text-primary">{number}</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Collections_tile;
