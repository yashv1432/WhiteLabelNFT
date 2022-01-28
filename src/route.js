import "./App.css";
import Navbar from "./component/Navbar";
import Nft_tile from "./component/Nft_tile";
import Tile__homepage from "./component/Tile__homepage";
import Upper__homepage from "./component/Upper__homepage";
import Footer from "./component/Footer";
import LeaderBoard from "./component/LeaderBoard";
import Notification from "./component/Notification";
import Collections_tile from "./component/Collections_tile";
import Top_collection from "./component/Top_collection";
import TopBidders from "./component/TopBidders";
// import TopCollection from './component/TopCollection';
import TopSeller from "./component/TopSeller";
import Create from "./component/Create";
import MyProfile from "./component/MyProfile";
import "./asset/custom.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Collection_homepage from "./component/Collection_homepage";
import HelpCenter from "./component/HelpCenter";
import Suggestion from "./component/Suggestion";
import Buying from "./component/Buying";
import MyItems from "./component/MyItems";
import Edit_Profile from "./component/Edit_Profile";
import MyItems_Collection from "./component/MyItems_Collection";
import CreateNFT from "./component/CreateNFT";
import CreateSingleNFT from "./component/CreateSingleNFT";
import About from "./component/About";
import Fixed_Price from "./component/Fixed_Price";
import Highest_Bid from "./component/Highest_Bid";
import CreateNFT_collection from "./component/CreateNFT_collection";
import CollectionDetails from "./component/CollectionDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Tile__homepage /> */}
        <switch>
          <Routes>
            <Route path="/" element={<Upper__homepage />} />
            <Route path="/nfts" element={<Tile__homepage />} />
            <Route
              exact
              path="/:MarketPlace/collections"
              element={<Collection_homepage />}
            />
            <Route exact path="/HelpCenter" element={<HelpCenter />} />
            <Route exact path="/Suggestion" element={<Suggestion />} />
            <Route exact path="/Top_collection" element={<Top_collection />} />
            <Route exact path="/TopBidders" element={<TopBidders />} />
            <Route exact path="/TopSeller" element={<TopSeller />} />
            <Route exact path="/LeaderBoard" element={<LeaderBoard />} />
            <Route exact path="/Buying" element={<Buying />} />
            <Route exact path="/MyItems" element={<MyItems />} />
            <Route
              exact
              path="/MyItems_Collection"
              element={<MyItems_Collection />}
            />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/Notification" element={<Notification />} />
            <Route exact path="/CreateNFT" element={<CreateNFT />} />
            <Route
              exact
              path="/CollectionDetails"
              element={<CollectionDetails />}
            />
            <Route eaxct path="/MyProfile" element={<MyProfile />} />
            <Route
              exact
              path="/CreateSingleNFT"
              element={<CreateSingleNFT />}
            />
            <Route
              exact
              path="/CreateNFT_collection"
              element={<CreateNFT_collection />}
            />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/CreateNFT" element={<CreateNFT />} />
            <Route
              exact
              path="/CollectionDetails"
              element={<CollectionDetails />}
            />
            <Route eaxct path="/MyProfile" element={<MyProfile />} />
            <Route exact path="/Edit_Profile" element={<Edit_Profile />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Fixed_Price" element={<Fixed_Price />} />
            <Route exact path="Highest_Bid" element={<Highest_Bid />} />
          </Routes>
        </switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
