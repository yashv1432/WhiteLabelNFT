import React from "react";
import { Link } from "react-router-dom";
import Upper_MyItems from "./Upper_MyItems";
import { Myitem_API } from "../API/MyItemApi";

function MyItems() {
  return (
    <>
      <div className="container">
        <Upper_MyItems />
        <div className="row">
          {Myitem_API.map((curElem) => {
            const { id, image, title } = curElem;
            return (
              <div className="col-md-3 col-lg-3 col-sm-6 col-11">
                <div className="myitems_container__tile">
                  <img
                    id="nft__photo"
                    className="img-fluid"
                    src={image}
                    alt="/"
                  />
                  <div className="tile__details">
                    <div className="container__up">
                      <h6
                        className="font-15 font-weight-700"
                        style={{ marginLeft: "1.5em", marginTop: "0.5em" }}
                      >
                        {title}
                      </h6>
                    </div>
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

export default MyItems;
