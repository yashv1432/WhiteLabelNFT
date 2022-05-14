import React, { Component } from "react";
// import './Top_collection.css'
import { AbstractApi } from "../API/LeaderBoardApi";
import copy from "../asset/images/copy.PNG";
import globe from "../asset/images/globe.PNG";
import Capture from "../asset/images/Capture.PNG";
import "../asset/Leader.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button``;

function Home_2(Collection) {
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    Collection.handleFile(fileUploaded);
  };
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
          <h6
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <div style={{ backgroundColor: "#f3f3f3", borderRadius: "5px" }}>
              {" "}
              0xec71_e6ee{" "}
            </div>{" "}
            <img style={{ height: "30px" }} src={copy} alt="" />
          </h6>
          <p style={{ marginTop: "10px", marginBottom: "0px" }}>
            Hi my name is TechieArt I am an artist based in New York my
          </p>
          <p style={{ marginBottom: "0px" }}>
            main focus in art is to make digital abstract painting
          </p>
          <h6 style={{ color: "#b1b1b1", marginTop: "12px" }}>
            <img style={{ height: "30px" }} src={globe} alt="" />
            Dribbie.com
          </h6>
        </div>
        <div className="position-absolute absolute1">Edit Profile</div>

        {/* <button className="position-absolute absoluteAdd">
            Add Items
        </button> */}


        <button
              className=" d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-3 position-absolute absoluteAdd"
              data-bs-toggle="modal"
              data-bs-target="#myModalAddVideo"
            >
              <i className=" fa-sm text-white-50" ></i>Add Items
            </button>
            {/* {/ {/ <!-- The Modal for Add Discovery Section--> /} /} */}
            <div class="modal fade" id="myModalAddVideo">
              <div class="modal-dialog">
                <div class="modal-content">
                  {/* {/ {/ <!-- Modal Header --> /} /} */}
                  <div class="modal-header" style={{borderBottom:"0px"}}>
                    <h4 class="modal-title" style={{ fontSize: "18px", fontWeight:"bold" }}>
                      Add Item
                    </h4>
                    <button
                      type="button"
                      class="btn-close modal-close-btn"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  {/* {/ {/ <!-- Modal body --> /} /} */}
                  <div class="modal-body">
                  <div>
          <label for="email" className="form-label mt-3"  style={{ fontSize: 14, fontWeight:"bold", marginBottom:"1rem" }}>
            Upload File*  <span  style={{ fontSize: 12, fontWeight:"100", color:"#828282" }}>Supported(JPG, PNG, GIF, SVG, MP4, WEBM, WAV) Max size: 40mb</span>
          </label>
          <div className="card collection-nft-card">
            <Button
              onClick={handleClick}
              style={{ border: "none", backgroundColor: "#fff" }}
            >
              <img
                src={Capture}
                style={{ width: "100px", color: "#366EEF", marginTop: "3em" }}
              />
            </Button>
            <input
              type="file"
              className="form-control"
              placeholder="Write your name"
              name="email"
              style={{ display: "none" }}
              ref={hiddenFileInput}
              onChange={handleChange}
            />
            <span
              className="text-dark text-center mt-2 font-13"
              style={{ flexDirection: "row" }}
            >
              Drag & Drop or
              <Link to="/" style={{ textDecoration: "none" }}>
                Browse
              </Link>
            </span>
          </div>
        </div>
                      {/* <div className=" row">
                        <label
                          for="profilepic"
                          className=" control-label"
                          style={{ fontSize: 14, fontWeight:"bold", marginBottom:"1rem" }}
                        >
                    Upload File <span  style={{ fontSize: 12, fontWeight:"100", color:"#828282" }}>Supported(JPG, PNG, GIF, SVG, MP4, WEBM, WAV) Max size: 40mb</span>
                        </label>

                        <div>
                          <button onClick={handleClick}
                          style={{}}>
                            <img src={Capture} alt="" />
                          </button>
                          
                       
                      
                          <input
                            type="file"
                            name="profilepic"
                            id="thumb"
                            // onchange="return check_file_size()"
                            className="form-control"
                            style={{height:"150px", width:"100%", padding:"30px 170px", marginBottom :"0.8rem"}}
                            placeholder=""
                            ref={hiddenFileInput}
                            onChange={handleChange}
                          />
                          <span> Drag & Drop or <Link>Browse</Link></span>
                       </div>
                      </div> */}
                    <form
                      id="addsound"
                      method="post"
                      enctype="multipart/form-data"
                      action=""
                    >

                      <div className="form-group row">
                        <label
                          for="fname"
                          className=" control-label"
                          style={{ fontSize: 14, fontWeight:"bold",marginTop:"1.4rem", marginBottom:"0.8rem"  }}
                        >
                          Name*:
                        </label>
                        <div className="">
                          <input
                            type="text"
                            name="sound_name"
                            id="sound_name"
                            required
                            className="form-control"
                          />
                        </div>
                       
                      </div>
                      <div className="form-group row">
                        <label
                          for="fname"
                          className=" control-label"
                          style={{ fontSize: 14, fontWeight:"bold" ,marginTop:"1.4rem", marginBottom:"0.8rem" }}
                        >
                          Description:
                        </label>
                        <div className="">
                          <textarea
                            type="text"
                            name="sound_name"
                            id="sound_name"
                            required
                            className="form-control"
                            rows="4"
                          />
                            <spna className="text-secondary font-13">
                0 of 1000 characters used
              </spna>
                        </div>
                       
                      </div>
                      {/* <div class="form-group">
  <label for="comment">Comment:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div> */}
                      <div className="form-group row">
                        <label
                          for="fname"
                          className=" control-label"
                          style={{ fontSize: 14, fontWeight:"bold",marginTop:"1.4rem", marginBottom:"0.8rem"  }}
                        >
                        Collection
                        </label>
                        <div className="">
                          <input
                            type="text"
                            name="sound_name"
                            id="sound_name"
                            required
                            className="form-control"
                            style={{backgroundColor:"#f3f3f3"}}
                          />
                        </div>
                       
                      </div>
                     
                    </form>
                  </div>

                  {/* {/ {/ <!-- Modal footer --> /} /} */}
                  <div class="modal-footer" style={{borderTop:"0px"}}>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      style={{width:"100%", backgroundColor:"#366eef"}}
                    >
                      Add
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>

        <div className="collectionsalesHome">
          <div className="sales1">
            {/* <h1>Top NFT sales</h1> */}
            <div
              class="input-group buying-search-btn"
            >
              <input
                type="text"
                className="form-control border-input input-box-border"
                style={{ marginLeft: "1em", borderRight: "0" }}
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append w-25">
                <button
                  className="btn btn-search-secondary border border-search"
                  type="button"
                  id="button-addon2"
                  style={{ borderRadius: "0px 5px 5px 0px" }}
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="dropdown col col1">
              <button
                className="btn border dropdown-toggle col12"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Status
                <i class="fas fa-caret-down"></i>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
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
            <div className="dropdown col col1">
              <button
                className="btn border dropdown-toggle col12"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Price
                <i class="fas fa-caret-down"></i>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
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
          <div className="dropdown col col11" style={{ marginRight: "3rem" }}>
            <button
              className="btn border dropdown-toggle col12 "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by
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

        <div className="row mx-0 text-center justify">
          {/* <div className="col-md-3 col-lg-3 col-sm-6 col-11 images"> */}
          {AbstractApi.map((curElem) => {
            const { image, title, price, maxPrice, maxPrice2, daysLeft } =
              curElem;
            return (
              <div
                className="col-md-3 col-lg-3 col-sm-6 col-11 images"
                // style={{ marginLeft: "50px" }}
              >
                <div className="container__tile">
                  <img
                    id="nft__photo"
                    style={{ width: "333px" }}
                    className="img-fluid"
                    src={image}
                    alt="/"
                  />
                  {/* <img id='like_icon' src={require('../asset//images/Like.png')} /> */}
                  <div className="tile__details tile__detailsmob">
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


export default Home_2;
//   https://image.shutterstock.com/image-vector/background-water-droplets-on-surface-260nw-274829663.jpg
