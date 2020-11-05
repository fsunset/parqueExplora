import { useHistory } from "react-router-dom";
import CardComponent from "./CardComponent";
import backImg from "./img/btn-back.png";
import logoZenu from "./img/logo-zenu.png";
import ueWhite from "./img/logo-explora-white.png";
import vidImg1 from "./img/theatre-vid1.jpg";
import vidImg2 from "./img/theatre-vid2.jpg";

import './sass/theatre.scss';

const TheatreComponent = () => {
  let history = useHistory();

  return (
    <div className="main__theatre">
      <main className="container">
        <div className="row">
          <div className="col-5 col-md-2">
            <div
              className="main__theatre-back pt-5"
              onClick={() => {history.push("/mapa")}}
            >
              <img src={backImg} alt="Atrás" />
            </div>
          </div>

          <div className="col-1 col-md-7 text-center">
            <div className="main__theatre-title d-none d-md-block">
              <p>Explora <br />teatro</p>
            </div>
          </div>

          <div className="col-5 col-md-3">
            <div className="main__theatre-sponsor pt-5">
              <img src={logoZenu} alt="Zenú" />
            </div>
          </div>
          
          <div className="col-12 text-center d-block d-md-none">
            <div className="main__theatre-title">
              <p>Explora <br />teatro</p>
            </div>
          </div>
        </div>

        <div className="row folders-container">
          <div className="col-10 offset-1 col-md-4 offset-md-2 folder-container">
            <div className="bg-container pt-4">
              <CardComponent
                title="CONCIERTO"
                image={vidImg1}
                text="La música nos une y nos hace sentir más cerca. Anamaría Laroc (La Voz Teens) y su banda nos dan un concierto de música
                de plancha para cantar a grito herido con nuestra familia."
                cssClass=" first"
                onClickFunc={() => console.log("") }
                cssTitle="mb-2"
                cssImg="theatre-img"
                cssText="theatre-text"
                externalLink="https://www.youtube.com/watch?v=HgU7U_60WTw&ab_channel=UniversoExplora"
              />
            </div>
          </div>
          
          <div className="col-10 offset-1 col-md-4 folder-container">
            <div className="bg-container pt-4">
              <CardComponent
                title="OBRA TEATRO EXPLORA"
                image={vidImg2}
                text="Un lobo, un zorro y una liebre nos cuentan sobre los fenómenos de la naturaleza. Esta divertida obra se desarrolla
                en un bosque, escenario del duelo de conocimiento en el que la química y la magia determinan quién es el más sabio. Los resultados son insospechados..."
                cssClass=" first"
                onClickFunc={() => console.log("") }
                cssTitle="mb-2"
                cssImg="theatre-img"
                cssText="theatre-text"
                externalLink="https://www.youtube.com/watch?v=Ql-HX4db4Vs&ab_channel=UniversoExplora"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 main__theatre-bottom">
            <img src={ueWhite} alt="Parque Explora" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default TheatreComponent;
