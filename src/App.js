import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ElectricalService from "./pages/ElectricalService";
import Games from "./pages/Games";
import Home from "./pages/Home";
import Home6 from "./pages/Home6";
import Rewards from "./pages/Rewards";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/latestAchivement/electrical"
            component={ElectricalService}
          />
          <Route exact path="/home-6" component={Home6} />
          <Route path="/games" component={Games} />
          <Route path="/rewards" component={Rewards} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
