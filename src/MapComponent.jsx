import { useHistory } from "react-router-dom";

import './sass/map.scss';

const MapComponent = () => {
  let history = useHistory();

  return (
    <div className="main__map">
      <div
        className="main__map-universe"
        onClick={() => history.push("/explora-universo")}
      >
      </div>
      <div
        className="main__map-dinos"
        onClick={() => history.push("/")}
      >
      </div>
      <div
        className="main__map-under"
        onClick={() => history.push("/")}
      >
      </div>
      <div
        className="main__map-explore"
        onClick={() => history.push("/")}
      >
      </div>
      <div
        className="main__map-theatre"
        onClick={() => history.push("/")}
      >
      </div>
      <div
        className="main__map-info"
        onClick={() => history.push("/")}
      >
      </div>
      <div
        className="main__map-cooking"
        onClick={() => history.push("/")}
      >
      </div>
    </div>
  );
}

export default MapComponent;
