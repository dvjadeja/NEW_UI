import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import EditProfile from "./pages/EditProfile";
import ElectricalService from "./pages/ElectricalService";
import Games from "./pages/Games";
import Home from "./pages/Home";
import Home6 from "./pages/Home6";
import Profile from "./pages/Profile";
import Rank from "./pages/Rank";
import Rewards from "./pages/Rewards";
import SpinAndWin from "./pages/SpinAndWin";

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
          <Route path="/rewards" component={Rewards} />
          <Route path="/spin-and-win" component={SpinAndWin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
