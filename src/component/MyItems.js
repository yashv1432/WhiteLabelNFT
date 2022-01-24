import React from "react";
import { Link } from "react-router-dom";
import Upper_MyItems from "./Upper_MyItems";

const Myitem_API = {};

function MyItems() {
  return (
    <>
      <Upper_MyItems />
      <div>
        <h1>Ankit Jain</h1>
      </div>
      {/* <div className="col-md-3 col-lg-3 col-sm-6 col-11">
        <div className="container__tile">
          <img id="nft__photo" className="img-fluid" src={image} alt="/" />
          <img id="like_icon" src={require("../asset//images/Like.png")} />
          <div className="tile__details">
            <div className="container__up">
              <h6 className="title">{title}</h6>
              <h6 className="value">{price}</h6>
            </div>
            <div className="container__down">
              <h6 className="value__high">
                Highest bid:<span>{maxPrice}</span>
              </h6>
              <h6 className="value__k">
                <i class="far fa-clock" style={{ color: "#f54" }}></i>
                {daysLeft} days left
              </h6>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default MyItems;
