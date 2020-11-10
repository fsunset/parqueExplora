import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewRelic from 'new-relic-agent-react'
import Firebase from './firebaseConfig';
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

// Google Analytics
import ReactGA from "react-ga";
ReactGA.initialize("UA-169941119-1");

const App = () => {
  // Analize active-users in real-time
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  // Count All - DB rows
  const db = Firebase.firestore();
  let userArray = [];
  db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // console.log(doc.id, " => ", doc.data());
      userArray.push(doc.id);
    });

    console.log("ALL RECORDS-->")
    console.log(userArray.length)
  });

  // Record for "Navegación por el Universo"
  let userUniverseArray = [];
  db.collection("users").where("courseName", "==", "Navegación por el Universo")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverseArray.push(doc.id);
      });

      console.log("Navegación por el Universo RECORDS-->")
      console.log(userUniverseArray.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  
  // Record for "HAGAMOS ASTRONAUTAS EN PLASTILINA"
  let userUniverse1Array = [];
  db.collection("users").where("courseName", "==", "HAGAMOS ASTRONAUTAS EN PLASTILINA")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse1Array.push(doc.id);
      });

      console.log("HAGAMOS ASTRONAUTAS EN PLASTILINA RECORDS-->")
      console.log(userUniverse1Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  // Record for "TALLERES PREPARANDO ASTEROIDES"
  let userUniverse2Array = [];
  db.collection("users").where("courseName", "==", "TALLERES PREPARANDO ASTEROIDES")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse2Array.push(doc.id);
      });

      console.log("TALLERES PREPARANDO ASTEROIDES RECORDS-->")
      console.log(userUniverse2Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  // Record for "TALLER DE EXPERIMENTACIÓN FÍSICA"
  let userUniverse3Array = [];
  db.collection("users").where("courseName", "==", "TALLER DE EXPERIMENTACIÓN FÍSICA")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse3Array.push(doc.id);
      });

      console.log("TALLER DE EXPERIMENTACIÓN FÍSICA RECORDS-->")
      console.log(userUniverse3Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    
  // Record for "Taller magia y ciencia"
  let userUniverse4Array = [];
  db.collection("users").where("courseName", "==", "Taller magia y ciencia")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse4Array.push(doc.id);
      });

      console.log("Taller magia y ciencia RECORDS-->")
      console.log(userUniverse4Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  
  // Record for "Maestros del disfraz"
  let userUniverse5Array = [];
  db.collection("users").where("courseName", "==", "Maestros del disfraz")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse5Array.push(doc.id);
      });

      console.log("Maestros del disfraz RECORDS-->")
      console.log(userUniverse5Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  
  // Record for "TALLER DE química y magia"
  let userUniverse6Array = [];
  db.collection("users").where("courseName", "==", "TALLER DE química y magia")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse6Array.push(doc.id);
      });

      console.log("TALLER DE química y magia RECORDS-->")
      console.log(userUniverse6Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  // Record for "Taller de experimentación química"
  let userUniverse7Array = [];
  db.collection("users").where("courseName", "==", "Taller de experimentación química")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse7Array.push(doc.id);
      });

      console.log("Taller de experimentación química RECORDS-->")
      console.log(userUniverse7Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  
  // Record for "Dinosaurios en Origami"
  let userUniverse8Array = [];
  db.collection("users").where("courseName", "==", "Dinosaurios en Origami")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse8Array.push(doc.id);
      });

      console.log("Dinosaurios en Origami RECORDS-->")
      console.log(userUniverse8Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  // Record for "Dinosaurios en Plastilina"
  let userUniverse9Array = [];
  db.collection("users").where("courseName", "==", "Dinosaurios en Plastilina")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse9Array.push(doc.id);
      });

      console.log("Dinosaurios en Plastilina RECORDS-->")
      console.log(userUniverse9Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  
  
  // Record for "Peces payaso en plastilina"
  let userUniverse10Array = [];
  db.collection("users").where("courseName", "==", "Peces payaso en plastilina")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse10Array.push(doc.id);
      });

      console.log("Peces payaso en plastilina RECORDS-->")
      console.log(userUniverse10Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  
  // Record for "taller Dibujo de pirañas"
  let userUniverse11Array = [];
  db.collection("users").where("courseName", "==", "taller Dibujo de pirañas")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse11Array.push(doc.id);
      });

      console.log("taller Dibujo de pirañas RECORDS-->")
      console.log(userUniverse11Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  
  // Record for "navegación por Amazonas"
  let userUniverse12Array = [];
  db.collection("users").where("courseName", "==", "navegación por Amazonas")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse12Array.push(doc.id);
      });

      console.log("navegación por Amazonas RECORDS-->")
      console.log(userUniverse12Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  
  // Record for "Ranas de origami"
  let userUniverse13Array = [];
  db.collection("users").where("courseName", "==", "Ranas de origami")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        userUniverse13Array.push(doc.id);
      });

      console.log("Ranas de origami RECORDS-->")
      console.log(userUniverse13Array.length)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  
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
