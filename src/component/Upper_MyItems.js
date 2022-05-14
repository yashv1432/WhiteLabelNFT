import React, {useState} from "react";
import image from "../asset/images/1.jpg";
import circle from "../asset/images/circle.png";
import ETH from "../asset/images/ETH.PNG";
import buy from "../asset/images/buy.PNG";
import send from "../asset/images/send.PNG";
import swap from "../asset/images/swap.PNG";
import metamask from "../asset/images/Metamask.svg";
import copy1 from "../asset/images/copy1.svg";
import { Link } from "react-router-dom";

function Upper_MyItems() {
  const [activeInActive, setActiveInActive] = useState("active");
  return (
    <div>
      <div id="upper__myitem">
        <div className="upper__myitem">
          <h1 className="main_upper__heading mt-5 font-weight-700 font-20">
            My Items
          </h1>
        </div>

        <div className="middle__myitem mt-4">
          <Link
            className="item_middle__heading font-weight-700 font-16"
            to="/MyItems"
          >
            Single
          </Link>
          <Link
            className="item_middle__heading font-weight-700 font-16"
            style={{ marginLeft: "1em" }}
            to="/MyItems_Collection"
          >
            Collections
          </Link>
        </div>
        <button type="submit" className="btn btn-primary mt-4 add-btn">
          <span
            className="font-weight-normal text-white font-14"
            data-bs-toggle="modal"
            data-bs-target="#myModalAddVideo1"
          >
            Add Item
          </span>
        </button>

        <div class="modal fade" id="myModalAddVideo1">
          <div class="modal-dialog">
            <div class="modal-content">
              {/* {/ {/ <!-- Modal Header --> /} /} */}
              <div class="modal-header" style={{ borderBottom: "0px", padding:"0px", margin:"1rem",backgroundColor:"f2f3f4"}}>
                <img src={metamask} alt="" />
                <div class="dropdown filter">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    placeholder="All"
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid #ddd",
                      borderRadius:"2rem"
                    }}
                  >
                    <i class="fas fa-question-circle"></i> BSC Mainnet
                    <i class="fas fa-caret-down"></i>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <img
                  src={circle}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
              </div>

              {/* {/ {/ <!-- Modal body --> /} /} */}
              <div
                class="modal-body"
              >
                <div  style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>

                <div style={{color: "#b1b1b1"}}>
                  <i style={{ color: "#4bd964" }} class="far fa-dot-circle"></i>{" "}
                  Connected
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      marginBottom: "0rem",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Account 1
                  </p>
                  <div style={{color: "#b1b1b1"}}>
                    0x74F...533E <img src={copy1} alt="" />
                  </div>
                </div>
                <i class="fas fa-ellipsis-v"></i>
                </div>
              </div>
              <hr />

              <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <img src={ETH} alt="" />
                <p style={{fontSize:"26px",fontWeight:"bold"}}>0 ETH</p>
                <p style={{color: "#b1b1b1"}}>$0.00 USD</p>
                <div style={{display:"flex"}}>
                  <div style={{display:"flex", flexDirection:"column",alignItems:"center",margin:"0rem 1rem"}}>
                    <img src={buy} alt="" />
                    <p>Buy</p>
                  </div>
                  <div style={{display:"flex", flexDirection:"column",alignItems:"center",margin:"0rem 1rem"}}>
                    <img src={send} alt="" />
                    <p>Send</p>
                  </div>
                  <div style={{display:"flex", flexDirection:"column",alignItems:"center",margin:"0rem 1rem"}}>
                    <img src={swap} alt="" />
                    <p>Swap</p>
                  </div>
                </div>
              </div>


              <div className="card-header" style={{padding:"0px",backgroundColor:"none"}}>
            <ul className="nav nav-pills " id="pills-tab" role="tablist" style={{justifyContent:"center"}}>
              <li className="nav-item" style={{width:"50%"}}>
                <a
                  className="nav-link active"
                  data-toggle="pill"
                  href="#pills-active_section"
                  role="tab"
                  aria-controls="pills-active_section"
                  aria-selected="true"
                  onClick={() => setActiveInActive("active")}
                  style={{textAlign:"center"}}
                >
                  Assets
                </a>
              </li>
              <li className="nav-item" style={{width:"50%"}}>
                <a
                  className="nav-link"
                  data-toggle="pill"
                  href="#pills-inactive_section"
                  role="tab"
                  aria-controls="pills-inactive_section"
                  aria-selected="false"
                  onClick={() => setActiveInActive("inActive")}
                  style={{textAlign:"center"}}
                >
                  Activity
                </a>
              </li>
            </ul>
          </div>
          <div style={{textAlign:"center", height:"7rem",paddingTop:"1rem",color: "#b1b1b1"}}>You have no Transactions</div>
              {/* {/ {/ <!-- Modal footer --> /} /} */}
              <div class="modal-footer" style={{ borderTop: "0px",justifyContent:"center"}}>
                <div >Need help? Contact <span>MetaMask Support</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upper_MyItems;
