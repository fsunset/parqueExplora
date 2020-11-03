import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import MapComponent from "./MapComponent";
import UniverseComponent from "./UniverseComponent";
import DinoComponent from "./DinoComponent";
import WaterComponent from "./WaterComponent";
import CookingComponent from "./CookingComponent";

import './sass/home.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/explora-sabores">
          <CookingComponent />
        </Route>
        <Route path="/explora-bajo-agua">
          <WaterComponent />
        </Route>
        <Route path="/explora-dinosaurios">
          <DinoComponent />
        </Route>
        <Route path="/explora-universo">
          <UniverseComponent />
        </Route>
        <Route path="/mapa">
          <MapComponent />
        </Route>
        <Route path="/">
          <HomeComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
