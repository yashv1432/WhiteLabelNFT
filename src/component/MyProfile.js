import React, { Component } from "react";
// import './Top_collection.css'
import { AbstractApi } from "../API/LeaderBoardApi";
import copy from "../asset/images/copy.PNG";
import "../asset/Leader.css";

export class MyProfile extends Component {
  render() {
    return (
      <div>
        <div className="position-relative relative">
          <img
            src="https://png.pngtree.com/background/20210714/original/pngtree-blood-drop-halloween-blood-background-black-background-picture-image_1220404.jpg"
            alt=""
          />
        </div>
        <div className="position-absolute absolute">
          <img
            src="https://th.bing.com/th/id/R.e1189efa9cd3aee29c0e1f7dbed689bf?rik=YRidGY7NPM2n3A&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f7ca%2fpeo%2f7capeoboi.png&ehk=MwVRL6ome8bAroWEn5dLYQgaXLxrafgcwcIQX7N48CM%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <h2>TechieArt</h2>
          <h2 style={{ color: "grey" }}>
            0xec71_e6ee <img style={{height :"30px"}} src={copy} alt="" />
          </h2>
          <p style={{ marginTop: "10px", marginBottom: "0px" }}>
            Hi my name is TechieArt I am an artist based in New York my
          </p>
          <p style={{ marginBottom: "0px" }}>
            main focus in art is to make digital abstract painting
          </p>
          <h2 style={{ color: "grey" }}>Dribbie.com</h2>
        </div>

        <div className="collectionsales MyProfilesales">
          <div>On sale</div>
          <div>Owned</div>
          <div>Created</div>
          <div>Liked</div>
        </div>
        <hr />

        <div class="row mx-0 text-center">
          {/* <div className="col-md-3 col-lg-3 col-sm-6 col-11 images"> */}
          {AbstractApi.map((curElem) => {
            const { image, title, price, maxPrice, maxPrice2, daysLeft } =
              curElem;
            return (
              <div className="col-md-3 col-lg-3 col-sm-6 col-11 images">
                <div className="container__tile">
                  <img
                    id="nft__photo"
                    style={{ width: "312px" }}
                    className="img-fluid"
                    src={image}
                    alt="/"
                  />
                  {/* <img id='like_icon' src={require('../asset//images/Like.png')} /> */}
                  <div className="tile__details">
                    <div className="container__up">
                      <h6 className="title">{title}</h6>
                      <h6 className="title1">{price}</h6>
                    </div>
                    <div className="container__down">
                      <h6 className="value__high">
                        <span style={{ color: "black" }}>{maxPrice}</span>
                        <span> {maxPrice2}</span>
                      </h6>
                      <h6 className="value__k">
                        {daysLeft}{" "}
                        {/* <i class="far fa-clock" style={{ color: "#f54" }}></i> */}
                        <i
                          class="fa-solid fa-heart"
                          style={{ color: "#ef3643" }}
                        ></i>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyProfile;
//   https://image.shutterstock.com/image-vector/background-water-droplets-on-surface-260nw-274829663.jpg
