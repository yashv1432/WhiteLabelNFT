import React, { Component } from "react";
// import './Top_collection.css'
import { AbstractApi } from "../API/LeaderBoardApi";
import copy from "../asset/images/copy.PNG";
import globe from "../asset/images/globe.PNG";
import pencil from "../asset/images/pencil.PNG";
import "../asset/Leader.css";
import { Link } from "react-router-dom";

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
          <h6 style={{ color: "black", display:"flex" , alignItems:"center", marginTop:"10px" }}>
         <div style={{backgroundColor:"#f3f3f3", borderRadius:"5px"}}> 0xec71_e6ee </div>  <img style={{height :"30px"}} src={copy} alt="" />
          </h6>
          <p style={{ marginTop: "10px", marginBottom: "0px" }}>
            Hi my name is TechieArt I am an artist based in New York my
          </p>
          <p style={{ marginBottom: "0px" }}>
            main focus in art is to make digital abstract painting
          </p>
          <h6 style={{ color: "#b1b1b1", marginTop:"12px" }}><img style={{height :"30px"}} src={globe} alt="" />Dribbie.com</h6>
        </div>
        <div className="position-absolute absolute1">
            Edit Profile
        </div>
        {/* <div className="position-absolute absolute2">
        <img style={{height :"30px"}} src={pencil} alt="" />
        </div> */}

        <div className="collectionsales MyProfilesales">
          <div>On sale</div>
          <div>Owned</div>
          <div>Created</div>
          <div>Liked</div>
        </div>
        <hr style={{marginLeft : "70px", width:"32rem"}}/>

        <div className="row mx-0 text-center">
          {/* <div className="col-md-3 col-lg-3 col-sm-6 col-11 images"> */}
          {AbstractApi.map((curElem) => {
            const { image, title, price, maxPrice, maxPrice2, daysLeft } =
              curElem;
            return (
              <div className="col-md-3 col-lg-3 col-sm-6 col-11 images" style={{marginLeft : "50px"}}>
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
                          className="fa-solid fa-heart"
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
