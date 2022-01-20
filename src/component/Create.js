import React from 'react'
// import './Create.css'


function Create() {
    return (
        <div>

            <div style={{ margin: "30px", marginTop: "100px" }}>
                <h1
                    style={{ fontSize: "20px", fontWeight: "bolder" }}
                >Connect your wallet</h1>


                <p
                    style={{ fontSize: "20px", color: "#8B8B8B" }}
                >Connect with one of our most popular <span style={{ color: "#8B8B8B", fontWeight: "bold" }}> wallets</span> providers<br />
                    or create a new one</p>
            </div>
            <div class="row">


                <div class="card col-md-3 col-lg-2 col-sm-6 col-12 mx-5 my-5" style={{ cursor: "pointer" }}>
                    <img id="create_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
                        alt="..." />
                    <div class="card-body">
                        <h5 class="card-title"> Metamask</h5>
                        <p class="card-text">One of the most secure wallets<br /> with great flexibility</p>

                    </div>
                </div>

                <div class="card col-md-3 col-lg-2 col-sm-6 col-12 mx-5 my-5" >
                    <img id="create_logo"
                        src="https://tor.us/images/Wallet.svg"
                        class="card-img-top" alt="..." />
                    <div class="card-body" >
                        <h5 class="card-title">Torus</h5>
                        <p class="card-text">Connect with your Google,<br /> Facebook, Twitter or Discord</p>

                    </div>
                </div>

                <div class="card col-md-3 col-lg-2 col-sm-6 col-12 mx-5 my-5">
                    <img id="create_logo"
                        src="https://api.nuget.org/v3-flatcontainer/walletconnect.core/1.6.5/icon"
                        class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Wallet Connect</h5>
                        <p class="card-text">Open protocol for connecting <br />Wallets to Dapps</p>

                    </div>
                </div>
            </div>

            <button type="button" class="btn btn-outline-primary" style={{ marginLeft: "40px" }}>Show more</button>
        </div>
    )
}

export default Create
