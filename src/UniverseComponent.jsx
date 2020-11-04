import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import CardComponent from "./CardComponent";
import { Modal } from "react-bootstrap";
import Firebase from './firebaseConfig';
import backImg from "./img/btn-back.png";
import logoZenu from "./img/logo-zenu.png";
import ueWhite from "./img/logo-explora-white.png";
import ueRed from "./img/logo-explora-red.png";
import milkyWayImg from "./img/img-milky-way.png";
import universeImg from "./img/img-universe-navigation.png";
import clayImg from "./img/img-clay.png";
import lineWhite from "./img/line-white.png";
import meetingImg from "./img/img-universe-meeting.png";

import './sass/universe.scss';

const UniverseComponent = () => {
  // For saving info Firebase
  const db = Firebase.firestore();

  let history = useHistory();

  const [modalVideoShow, setModalVideoShow] = useState(false);
  const [modalClassShow, setModalClassShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setModalClassShow(false);

    // Saving info Firebase DB
    db.collection("users").add({
      name: userName,
      email: userEmail,
    });
    
    setUserName("")
    setUserEmail("")
  }

  const VideoModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="p-0" style={{height:"435px"}}>
          <iframe
            title="Universe Video"
            width="100%"
            height="435"
            src="https://www.youtube-nocookie.com/embed/gw78h12D5zk"
            frameBorder="0"
            allow="accelerometer;
            autoplay;
            fullscreen;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    );
  }

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
                onClickFunc={() => setModalVideoShow(true)}
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
                <span onClick={() => setModalClassShow(true)}>10am - 11am</span>
                <span onClick={() => setModalClassShow(true)}>5pm - 6pm</span>
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
                <strong>Clase 1:</strong> <span onClick={() => setModalClassShow(true)}>9am - 10am</span>
                <span onClick={() => setModalClassShow(true)}>2pm - 3pm</span>
              </div>
              <div className="hours">
                <strong>Clase 2:</strong> <span onClick={() => setModalClassShow(true)}>9am - 10am</span>
                <span onClick={() => setModalClassShow(true)}>2pm - 3pm</span>
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
                <strong>Clase 1:</strong> <span onClick={() => setModalClassShow(true)}>11am - 12pm</span>
                <span onClick={() => setModalClassShow(true)}>4pm - 5pm</span>
              </div>
              <div className="hours">
                <strong>Clase 2:</strong> <span onClick={() => setModalClassShow(true)}>11am - 12pm</span>
                <span onClick={() => setModalClassShow(true)}>4pm - 5pm</span>
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

      {/* Vid Modal */}
      <VideoModal
        show={modalVideoShow}
        onHide={() => setModalVideoShow(false)}
      />

      {/* Class Modal */}
      <Modal
        show={modalClassShow}
        onHide={() => setModalClassShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="p-0 modal-class-body text-center">
          <h1>INSCRÍBETE AL CURSO</h1>

          <Form className="p-4" onSubmit={e => formSubmitHandler(e)}>
            <Form.Group>
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control type="text" required value={userName} onChange={e => setUserName(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" required value={userEmail} onChange={e => setUserEmail(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>

          <div className="bottom">
            <img src={ueRed} alt="Explora" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UniverseComponent;
