import React from 'react'
// import './Buying.css'
import { Link } from 'react-router-dom'
function Buying() {
    return (
        <div>

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/HelpCenter">Help Center</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Buying</li>
                </ol>
            </nav>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <h5>Buying</h5>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"

                    />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </div>



        </div>


    )
}

export default Buying
