import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CertificateModal from "./components/CertificateModal";
import Sidebar from "./components/Sidebar";
import Analytics from "./pages/Analytics";
import EditProfile from "./pages/EditProfile";
import ElectricalService from "./pages/ElectricalService";
import Games from "./pages/Games";
import Home from "./pages/Home";
import Home6 from "./pages/Home6";
import Profile from "./pages/Profile";
import Rank from "./pages/Rank";
import Rewards from "./pages/Rewards";
import RewardsAndCashback from "./pages/RewardsAndCashback";
import Settings from "./pages/Settings";
import SpinAndWin from "./pages/SpinAndWin";
import Stickers from "./pages/Stickers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/edit-profile" component={EditProfile} />
          <Route path="/electricalServices" component={ElectricalService} />
          <Route exact path="/home-6" component={Home6} />
          <Route path="/games" component={Games} />
          <Route path="/ranks" component={Rank} />
          <Route exact path="/rewards" component={Rewards} />
          <Route path="/spin-and-win" component={SpinAndWin} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/certificate-modal" component={CertificateModal} />
          <Route path="/settings" component={Settings} />
          <Route path="/rewards-cashback" component={RewardsAndCashback} />
          <Route path="/stickers" component={Stickers} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
