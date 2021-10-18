import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ElectricalService from "./pages/ElectricalService";
import Home from "./pages/Home";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
