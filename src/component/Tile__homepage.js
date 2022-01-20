import React, { Component } from 'react'
import Nft_tile from './Nft_tile'
// import './Tile__homepage.css'

export class tile__homepage extends Component {
    render() {
        return (
            <div>
                {/* Filter Buttons  */}

                <div className='lower__homepage'>
                    <div id='filters'>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" placeholder='All'
                                style={{ width: "200%", backgroundColor: "white", color: "black", border: "1px solid #ddd" }}
                            >
                                Sale type

                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"
                                style={{ width: "80%", backgroundColor: "white", color: "black", border: "1px solid #ddd" }}>
                                Price range
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ width: "100%", backgroundColor: "white", color: "black", border: "1px solid #ddd" }}
                        >
                            Sort by
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                </div>

                {/* Collection Tile */}


                <div className='row mx-0 text-center'>
                    {/* map- API */}
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                            return (
                                <Nft_tile
                                    image={"https://semidotinfotech.com/blog/wp-content/uploads/2021/05/A-Guide-to-Develop-NFT-Marketplace.jpg"}
                                    title={"Jelly Fish"}
                                    price={"3.2 ETH"}
                                    maxPrice={"0.48 ETH"}
                                    daysLeft={5}
                                />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default tile__homepage
