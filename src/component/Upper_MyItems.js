import React from "react";
import { Link } from "react-router-dom";

function Upper_MyItems() {
  return (
    <div>
      <div id="upper__myitem">
        <div className="upper__myitem">
          <h1 className="upper__heading">My Items</h1>
        </div>

        <div className="middle__myitem">
          <Link className="middle__heading" to="/nfts">
            Single
          </Link>
          <Link className="middle__heading" to="/MarketPlace/collections">
            Collections
          </Link>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </div>
    </div>
  );
}

export default Upper_MyItems;
