import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewRelic from 'new-relic-agent-react'
import HomeComponent from "./HomeComponent";
import MapComponent from "./MapComponent";
import UniverseComponent from "./UniverseComponent";
import DinoComponent from "./DinoComponent";
import WaterComponent from "./WaterComponent";
import CookingComponent from "./CookingComponent";
import TheatreComponent from "./TheatreComponent";
import InfoComponent from "./InfoComponent";
import ExploreComponent from "./ExploreComponent";
import './sass/home.scss';

const App = () => {
  

  
  return (
    <Router>
      {/* Dashboard for app performance */}
      <NewRelic licenseKey="dfde4c503b072c99bc03cb2d242d7890631aNRAL" applicationID="parqueExploraLoadTest" />


      <Switch>
        <Route path="/explora-y-experimenta">
          <ExploreComponent />
        </Route>
        <Route path="/informate">
          <InfoComponent />
        </Route>
        <Route path="/explora-teatro">
          <TheatreComponent />
        </Route>
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
