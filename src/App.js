import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ElectricalService from "./pages/ElectricalService";
import Home from "./pages/Home";
import Home5 from "./pages/Home5";
import Home6 from "./pages/Home6";

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
          <Route path="/home-5" component={Home5} />
          <Route path="/home-6" component={Home6} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
