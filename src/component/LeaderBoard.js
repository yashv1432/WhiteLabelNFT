import React, { useState } from "react";
import "../asset/Leader.css";
import { Link } from "react-router-dom";
import {
  LeaderBoardApi,
  LeaderBoardApi2,
  Pending,
  Accepted,
  Rejected,
} from "../API/LeaderBoardApi";
import "../asset/Notification.css";
// import { Pending, Accepted, Rejected } from "../Content-API/ReportVideoApi";

export default function LeaderBoard() {
  const [PendingAcceptedCreated, setPendingAcceptedCreated] =
    useState("pending");
  const [state, setState] = useState(LeaderBoardApi);
  return (
    <div>
      <h1 className="leader" style={{ marginBottom: "30px" }}>
        Leaderboard
      </h1>
      {/* 3 Tables */}
      <div className="container">
        <div className="row align-items-start leadercol">
          <div className="col leaderboardTop">
            <div className="leaderboardTitle">
              <div className="col" style={{ fontSize: "16px" }}>
                Top Bidders
              </div>
              <div className="dropdown col leaderboardDropdown">
                <button
                  className="btn border dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Weekly
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
            <div className="leaderboardTopDetails">
              {LeaderBoardApi.map((curElem) => {
                const { Image, Heading, SubHead1, SubHead2 } = curElem;
                return (
                  <>
                    <div className="leaderboardTopDetailsRow">
                      <img src={Image} alt="" />
                      <div className="LeaderboardInsideDetails">
                        <h2>{Heading}</h2>
                        <p>
                          {SubHead1}
                          <span>{SubHead2}</span>
                        </p>
                      </div>
                    </div>
                    <hr className="hr" />
                  </>
                );
              })}
            </div>
            <Link className="view" to="/TopBidders">
              {" "}
              View More
            </Link>
          </div>
          <div className="col leaderboardTop">
            <div className="leaderboardTitle">
              <div className="col" style={{ fontSize: "16px" }}>
                Top Seller
              </div>
              <div className="dropdown col leaderboardDropdown">
                <button
                  className="btn border dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Weekly
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
            <div className="leaderboardTopDetails">
              {LeaderBoardApi.map((curElem) => {
                const { Image, Heading, SubHead1, SubHead2 } = curElem;
                return (
                  <>
                    <div className="leaderboardTopDetailsRow">
                      <img src={Image} alt="" />
                      <div className="LeaderboardInsideDetails">
                        <h2>{Heading}</h2>
                        <p>
                          {SubHead1}
                          <span>{SubHead2}</span>
                        </p>
                      </div>
                    </div>
                    <hr className="hr" />
                  </>
                );
              })}
            </div>
            <Link className="view" to="/TopSeller">
              {" "}
              View More
            </Link>
          </div>
          <div className="col leaderboardTop">
            <div className="leaderboardTitle">
              <div className="col" style={{ fontSize: "16px" }}>
                Top Collections
              </div>
              <div className="dropdown col leaderboardDropdown">
                <button
                  className="btn border dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Weekly
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
            <div className="leaderboardTopDetails">
              {LeaderBoardApi.map((curElem) => {
                const { Image, Heading, SubHead1, SubHead2 } = curElem;
                return (
                  <>
                    <div className="leaderboardTopDetailsRow">
                      <img src={Image} alt="" />
                      <div className="LeaderboardInsideDetails">
                        <h2>{Heading}</h2>
                        <p>
                          {SubHead1}
                          <span>{SubHead2}</span>
                        </p>
                      </div>
                    </div>
                    <hr className="hr" />
                  </>
                );
              })}
            </div>
            <Link className="view" to="/Top_collection">
              {" "}
              View More
            </Link>
          </div>
        </div>

        <div className="card shadow mb-4 leadercolmob">
          <div
            className="card-header py-3"
            style={{ backgroundColor: "#f8f8f8" }}
          >
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-pending-tab"
                  data-toggle="pill"
                  href="#pills-pending"
                  role="tab"
                  aria-controls="pills-pending"
                  aria-selected="true"
                  onClick={() => setPendingAcceptedCreated("pending")}
                >
                  Top Bidders
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-accepted-tab"
                  data-toggle="pill"
                  href="#pills-accepted"
                  role="tab"
                  aria-controls="pills-accepted"
                  aria-selected="false"
                  onClick={() => setPendingAcceptedCreated("accepted")}
                >
                  Top Sellers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-rejected-tab"
                  data-toggle="pill"
                  href="#pills-rejected"
                  role="tab"
                  aria-controls="pills-rejected"
                  aria-selected="false"
                  onClick={() => setPendingAcceptedCreated("rejected")}
                >
                  Top Collections
                </a>
              </li>
            </ul>
            {/* <!-- <input type="text" id="search_criteria" className="form-control" onkeyup="hashtagsearch_criteria(this.value)"
			placeholder="Search for hashtag.."> --> */}
          </div>
          <div
            className="dropdown col leaderboardDropdown"
            style={{ width: "100%", marginTop: "1rem" }}
          >
            <button
              className="btn border dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "100%", textAlign: "start", margin: "0rem 1rem" }}
            >
              Weekly
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
          <div className="card-body">
            {PendingAcceptedCreated === "pending" ? (
              <BuildPendingAcceptedRejectedBlock
                apiData={Pending}
                PendingAcceptedCreated={PendingAcceptedCreated}
              />
            ) : (
              <></>
            )}

            {PendingAcceptedCreated === "accepted" ? (
              <BuildPendingAcceptedRejectedBlock
                apiData={Accepted}
                PendingAcceptedCreated={PendingAcceptedCreated}
              />
            ) : (
              <></>
            )}

            {PendingAcceptedCreated === "rejected" ? (
              <BuildPendingAcceptedRejectedBlock
                apiData={Rejected}
                PendingAcceptedCreated={PendingAcceptedCreated}
              />
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="sales">
          <div className="sales1">
            <h1 className="leader1">Top NFT sales</h1>
            <div className="dropdown col btn1">
              <button
                className="btn border dropdown-toggle btn2 dropbtm_mob1"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Weekly
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
          <div className="dropdown col btn1">
            <button
              className="btn border dropdown-toggle btmleaderboard btn2 dropbtm_mob1"
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
        <div class="row mx-0 text-center justify1">
          {/* <div className="col-md-3 col-lg-3 col-sm-6 col-11 images"> */}
          {LeaderBoardApi2.map((curElem) => {
            const { image, title, price, maxPrice, maxPrice2, daysLeft } =
              curElem;
            return (
              <div className="col-md-3 col-lg-3 col-sm-6 col-11 images1">
                <div className="container__tile">
                  <img
                    id="nft__photo"
                    className="img-fluid"
                    src={image}
                    alt="/"
                  />
                  {/* <img id='like_icon' src={require('../asset//images/Like.png')} /> */}
                  <div className="tile__details">
                    <div className="container__up">
                      <h6 className="title">{title}</h6>
                    </div>
                    <div className="container__down">
                      <h6 className="value__high">
                        Sold to
                        <span style={{ fontWeight: "600", color: "black" }}>
                          {maxPrice}
                        </span>
                        for
                        <span style={{ fontWeight: "bold" }}>{maxPrice2}</span>
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
          {/* My Commit */}
        </div>
        {/* </div> */}

        {/* Top NFT sales */}
      </div>
    </div>
  );
}

const BuildPendingAcceptedRejectedBlock = ({
  apiData,
  PendingAcceptedCreated,
}) => {
  var toNavigate = "";

  if (PendingAcceptedCreated === "pending") {
    toNavigate = "/TopBidders";
  } else if (PendingAcceptedCreated === "accepted") {
    toNavigate = "/TopSeller";
  } else if (PendingAcceptedCreated === "rejected") {
    toNavigate = "/Top_collection";
  }

  return (
    <>
      <div className="leaderboardTopDetails">
        {apiData.map((curElem) => {
          const { Image, Heading, SubHead1, SubHead2 } = curElem;
          return (
            <>
              <div className="leaderboardTopDetailsRow">
                <img src={Image} alt="" />
                <div className="LeaderboardInsideDetails">
                  <h2>{Heading}</h2>
                  <p>
                    {SubHead1}
                    <span>{SubHead2}</span>
                  </p>
                </div>
              </div>
              <hr className="hr" />
            </>
          );
        })}
      </div>

      <Link className="view" to={toNavigate}>
        {" "}
        View More
      </Link>
    </>
  );
};
