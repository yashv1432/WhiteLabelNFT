



import React, { Component } from 'react'
// import './Top_collection.css'
import {LeaderBoardApi5 } from "../API/LeaderBoardApi";

export class TopSeller extends Component {
    render() {
        return (


            <div style={{ marginLeft: "128PX", marginRight: "128px" }}>
                {/* <h2>Hello</h2> */}
                <div className='Leader_Board_container'>
                    <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Top Sellers</h1>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" placeholder='All'
                            style={{ backgroundColor: "white", color: "black", border: "1px solid #ddd" }}
                        >
                            Weekly

                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <table className="table table" style={{ marginTop: "35px", width: "100%" }}>
                    <thead>
                        <tr>
                            <th scope="col" style={{ textAlign: "left", fontSize: "20px" }}>Name</th>
                            <th scope="col" style={{ fontSize: "20px" }} >Volume</th>
                            <th scope="col" style={{ fontSize: "20px" }}>Items sold</th>
                        </tr>
                    </thead>
                    <tbody>
                        <br />
                        {LeaderBoardApi5.map((curElem) => {
                const { name, volume, itemssold } = curElem;
                return (
                        <tr style={{ backgroundColor: "#f8f8f8", borderCollapse: 'separate' , 
                        borderSpacing: '0 1em'}} >
                          
                            <th scope="row" style={{ width: "25%" }}><img className="rounded-circle" src='https://earncashto.com/wp-content/uploads/2021/06/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png' alt='/'
                                style={{ height: "60px", width: "60px", marginBottom: "19px" }}
                            />{name}</th>
                            <td style={{ width: "25%", color: "#818181", fontSize: "20px" }}><span>34 ETH</span>{volume}</td>
                            <td style={{ width: "25%", fontWeight: "bold" }}>{itemssold}</td>

                        </tr>
 );
})}


                    </tbody>

                </table>

            </div>
        )
    }
}

export default TopSeller

