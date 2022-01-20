import React, { Component } from 'react'
// import './Upper__homepage.css'
import { Link } from 'react-router-dom'

export class Upper__homepage extends Component {
    render() {
        return (
            <div>
                <div id='upper__home'>
                    <div className='upper__homepage'>
                        <h1 className='upper__heading' >Marketplace</h1>
                    </div>


                    <div className='middle__homepage'>
                        <Link className='middle__heading' to='/nfts'>NFTS</Link>
                        <Link className='middle__heading' to='/MarketPlace/collections'>Collections</Link>
                    </div>


                </div>
            </div >
        )
    }
}

export default Upper__homepage
