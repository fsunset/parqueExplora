import { useHistory } from "react-router-dom";
import CardComponent from "./CardComponent";

import backImg from "./img/btn-back.png";
import logoZenu from "./img/logo-zenu.png";
import folderContainerImg from "./img/folder-container.png";
import ueWhite from "./img/logo-explora-white.png";
import milkyWayImg from "./img/img-milky-way.png";
import universeImg from "./img/img-universe-navigation.png";
import clayImg from "./img/img-clay.png";
import lineWhite from "./img/line-white.png";
import meetingImg from "./img/img-universe-meeting.png";

import './sass/universe.scss';

const UniverseComponent = () => {
  let history = useHistory();

  return (
    <div className="main__universe">
      <main className="container">
        <div className="row">
          <div className="col-2">
            <div
              className="main__universe-back pt-5"
              onClick={() => {history.push("/mapa")}}
            >
              <img src={backImg} alt="Atrás" />
            </div>
          </div>

          <div className="col-7 text-center">
            <div className="main__universe-title">
              <p>Explora el <br />Universo</p>
            </div>
          </div>

          <div className="col-3">
            <div className="main__universe-sponsor pt-5">
              <img src={logoZenu} alt="Zenú" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4 folder-container">
            <div className="bg-container">
              <CardComponent
                title="VIAJE POR LA VÍA LÁCTEA"
                image={milkyWayImg}
                text="Vía Láctea, un viaje por la galaxia y a través del sistema solar para describir las maravillas del universo."
                cssClass=" first"
              />

              <CardComponent
                title="Navegación por el Universo"
                image={universeImg}
                text="Sobrevolaremos planetas, esquivaremos valles montañosos, volcanes gigantes y lunas congeladas."
              />

              <p className="line-title">
                <img src={lineWhite} alt="-" /> INSCRIBETE AQUÍ <img src={lineWhite} alt="-" />
              </p>

              <div className="hours">
                <span>10am - 11am</span>
                <span>5pm - 6pm</span>
              </div>
            </div>
          </div>
          
          <div className="col-4 folder-container">
            <div className="bg-container">
              <CardComponent
                title="HAGAMOS ASTRONAUTAS EN PLASTILINA"
                image={clayImg}
                text="En este taller armaremos un astronauta en plastilina y tendrás que conocer los retos que se enfrentan al abandonar el planeta tierra. 
                Responderemos las inquietudes sobre sus trajes, su color, tamaño y diseño."
                cssClass=" second"
              />

              <p className="line-title">
                <img src={lineWhite} alt="-" /> INSCRIBETE AQUÍ <img src={lineWhite} alt="-" />
              </p>

              <div className="hours">
                <strong>Clase 1:</strong> <span>9am - 10am</span>
                <span>2pm - 3pm</span>
              </div>
              <div className="hours">
                <strong>Clase 2:</strong> <span>9am - 10am</span>
                <span>2pm - 3pm</span>
              </div>
            </div>
          </div>

          <div className="col-4 folder-container">
            <div className="bg-container">
              <CardComponent
                title="TALLERES PREPARANDO ASTEROIDES"
                image={meetingImg}
                text="Hagamos uno de los objetos más impactantes que pueden atravesar nuestra atmósfera, es una roca espacial.
                Conozcamos historias de sus caídas fugaces. Crearemos nuestro asteroide con el que conoceremos el nacimiento de nuestro sistema solar."
                cssClass=" third"
              />

              <p className="line-title">
                <img src={lineWhite} alt="-" /> INSCRIBETE AQUÍ <img src={lineWhite} alt="-" />
              </p>

              <div className="hours">
                <strong>Clase 1:</strong> <span>11am - 12pm</span>
                <span>4pm - 5pm</span>
              </div>
              <div className="hours">
                <strong>Clase 2:</strong> <span>11am - 12pm</span>
                <span>4pm - 5pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 main__universe-bottom">
            <img src={ueWhite} alt="Parque Explora" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default UniverseComponent;
