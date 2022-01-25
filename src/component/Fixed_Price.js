import React from "react";
import image from "../asset/images/Fixed.PNG";
import image1 from "../asset/images/Highest.PNG";

function Fixed_Price() {
  return (
    <>
      <div className="container">
        <p className="font-22 font-weight-900 text-center mt-5">Create NFT</p>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <div
              className="card"
              style={{ borderRadius: "8px", width: "270px", height: "130px" }}
            >
              <div className="row">
                <div className="col-sm-2">
                  <img className="mt-4" src={image} width={60} />
                </div>
                <div className="col-sm-10">
                  <div className="mt-4" style={{ paddingLeft: "30px" }}>
                    <p className="font-16 font-weight-550">Fixed Price</p>
                    <p className="font-15 text-grey">
                      Sell at a constant price
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <div
              className="card"
              style={{ borderRadius: "8px", width: "270px", height: "130px" }}
            >
              <div className="row">
                <div className="col-sm-2">
                  <img className="mt-4" src={image1} width={60} />
                </div>
                <div className="col-sm-10">
                  <div className="mt-4" style={{ paddingLeft: "30px" }}>
                    <p className="font-16 font-weight-550">Highest Bid</p>
                    <p className="font-15 text-grey">
                      Sell to the highest <br />
                      bidder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-lg-12"></div>
        </div>
      </div>
    </>
  );
}

export default Fixed_Price;
