import "./App.css";
import Navbar from "./component/Navbar";
import Nft_tile from "./component/Nft_tile";
import Lower__homepage from "./component/Lower_homepage";
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
import Home_2 from "./component/Home_2";
import Home_3 from "./component/Home_3";
import "./asset/custom.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Collection_Lower_homepage from "./component/Collection_Lower_homepage";
// import ToggleSwitch from "./component/ToggleSwitch";
import HelpCenter from "./component/HelpCenter";
import Suggestion from "./component/Suggestion";
import Buying from "./component/Buying";
import MyItems from "./component/MyItems";
import Edit_Profile from "./component/Edit_Profile";
import MyItems_Collection from "./component/MyItems_Collection";
import CreateNFT from "./component/CreateNFT";
import CreateSingleNFT from "./component/CreateSingleNFT";
import About from "./component/About";
import Menu from "./component/Menu";
import Fixed_Price from "./component/Fixed_Price";
import Highest_Bid from "./component/Highest_Bid";
import CreateNFT_collection from "./component/CreateNFT_collection";
import CollectionDetails from "./component/CollectionDetails";
import Nft_Information from "./component/Nft_Information";
import Nft_Information_1 from "./component/Nft_Information_1";
import Nft_Information_2 from "./component/Nft_Information_2";
import Nft_Information_Offer_1 from "./component/Nft_Information_Offer_1";
import EditItem from "./component/EditItem";
import Wallet from "./component/Wallet";
import NftInformation_FixedPrice from "./component/NftInformation_FixedPrice";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Tile__homepage /> */}
        <switch>
          <Routes>
            <Route path="/" element={<Upper__homepage />} />
            <Route path="/" element={<Lower__homepage />} />
            <Route path="/nfts" element={<Nft_tile />} />
            <Route path="/Menu" element={<Menu />} />
            <Route
              exact
              path="/Collection_Lower_homepage"
              element={<Collection_Lower_homepage />}
            />
            <Route
              exact
              path="/Nft_Information"
              element={<Nft_Information />}
            />
            <Route
              exact
              path="/Nft_Information_1"
              element={<Nft_Information_1 />}
            />
            <Route
              exact
              path="/Nft_Information_2"
              element={<Nft_Information_2 />}
            />

            <Route
              exact
              path="/Nft_Information_Offer_1"
              element={<Nft_Information_Offer_1 />}
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
            <Route exact path="/MyProfile" element={<MyProfile />} />
            <Route exact path="Home_2" element={<Home_2 />} />
            <Route exact path="Home_3" element={<Home_3 />} />
            <Route
              exact
              path="/CollectionDetails"
              element={<CollectionDetails />}
            />
            <Route exact path="/MyProfile" element={<MyProfile />} />
            <Route exact path="Home_2" element={<Home_2 />} />
            <Route exact path="Home_3" element={<Home_3 />} />
            <Route exact path="EditItem" element={<EditItem />} />
            <Route
              exact
              path="/Collections_tile"
              element={<Collections_tile />}
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
            <Route exact path="/Highest_Bid" element={<Highest_Bid />} />
            <Route exact path="/Wallet" element={<Wallet />} />
            <Route
              exact
              path="/NftInformation_FixedPrice"
              element={<NftInformation_FixedPrice />}
            />
            {/* <Route exact path="/ToggleSwitch" element={<ToggleSwitch />} /> */}
          </Routes>
        </switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
