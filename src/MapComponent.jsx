import { useHistory } from "react-router-dom";
import whatsAppImg from './img/whatsApp.png';
import './sass/map.scss';

const MapComponent = () => {
  let history = useHistory();

  return (
    <div className="main__map">
      {/* WhatsApp Contact Button */}
      <a
        href={`https://api.whatsapp.com/send/?phone=573203634235&text=Hola%2C+estoy+navegando+el+universo+explora&app_absent=0`}
        className="whatsapp__btn"
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsAppImg} alt="WhatsApp Img" className="share-icon" />
      </a>

      {/* Sections */}
      <div
        className="main__map-universe"
        onClick={() => history.push("/explora-universo")}
      >
      </div>
      <div
        className="main__map-dinos"
        onClick={() => history.push("/explora-dinosaurios")}
      >
      </div>
      <div
        className="main__map-water"
        onClick={() => history.push("/explora-bajo-agua")}
      >
      </div>
      <div
        className="main__map-explore"
        onClick={() => history.push("/explora-y-experimenta")}
      >
      </div>
      <div
        className="main__map-theatre"
        onClick={() => history.push("/explora-teatro")}
      >
      </div>
      <div
        className="main__map-info"
        onClick={() => history.push("/informate")}
      >
      </div>
      <div
        className="main__map-cooking"
        onClick={() => history.push("/explora-sabores")}
      >
      </div>
    </div>
  );
}

export default MapComponent;
