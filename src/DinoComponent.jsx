import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import CardComponent from "./CardComponent";
import { Modal } from "react-bootstrap";
import backImg from "./img/btn-back.png";
import logoZenu from "./img/logo-zenu.png";
import ueWhite from "./img/logo-explora-white.png";
import ueRed from "./img/logo-explora-red.png";
import lineWhite from "./img/line-white.png";
import vidImg from "./img/dinos-vid.png";
import dinoImg from "./img/dinos-class.png";

import './sass/dino.scss';

const DinoComponent = () => {
  let history = useHistory();
  const [modalVideoShow, setModalVideoShow] = useState(false);
  const [modalClassShow, setModalClassShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setModalClassShow(false);

    
    setUserName("")
    setUserEmail("")
    console.log(userName)
    console.log(userEmail)
  }

  const VideoModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="p-0" style={{ height: "435px" }}>
          
          <iframe
            title="Dinos Video"
            width="100%"
            height="435"
            src="https://www.youtube-nocookie.com/embed/Mjw547EgCeg"
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
    <div className="main__dino">
      <main className="container">
        <div className="row">
          <div className="col-2">
            <div
              className="main__dino-back pt-5"
              onClick={() => {history.push("/mapa")}}
            >
              <img src={backImg} alt="Atrás" />
            </div>
          </div>

          <div className="col-7 text-center">
            <div className="main__dino-title">
              <p>Explora <br />DINOSAURIOS</p>
            </div>
          </div>

          <div className="col-3">
            <div className="main__dino-sponsor pt-5">
              <img src={logoZenu} alt="Zenú" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4 folder-container">
            <div className="bg-container pt-4">
              <CardComponent
                title="Recorrido dinosaurios"
                image={vidImg}
                text="En este recorrido virtual “Dinosaurios: La vida entre gigantes”, conoce mas sobre los seres que dominaron el planeta en la 
                prehistoria. Con cuernos, crestas, plumas, 
                espinas y alas, los dinosaurios fueron los dueños de la tierra por mas de 100 
                millones de años."
                cssClass=" first"
                onClickFunc={() => setModalVideoShow(true)}
                cssTitle="mb-2"
                cssImg="dino-img"
                cssText="dino-text"
              />
            </div>
          </div>
          
          <div className="col-4 folder-container">
            <div className="bg-container">
              <CardComponent
                title="DINOSAURIOS EN ORIGAMI"
                image={dinoImg}
                text="Gracias a los fósiles, nos hemos imaginado todo tipo de historias fantásticas. Con los saurios, un grupo de reptiles ya extinto, la paleontología
                nos indica que estos fósiles eran los restos de un Pliosaurio, un enorme reptil acuático. Conoce mas de estas criaturas y moldea un dinosaurio en papel origami."
                cssClass=" second"
              />

              <p className="line-title">
                <img src={lineWhite} alt="-" /> INSCRIBETE AQUÍ <img src={lineWhite} alt="-" />
              </p>

              <div className="hours">
                <strong>Clase 1:</strong> <span onClick={() => setModalClassShow(true)}>10am - 11am</span>
                <span onClick={() => setModalClassShow(true)}>3pm - 4pm</span>
              </div>
              <div className="hours">
                <strong>Clase 2:</strong> <span onClick={() => setModalClassShow(true)}>10am - 11am</span>
                <span onClick={() => setModalClassShow(true)}>3pm - 4pm</span>
              </div>
            </div>
          </div>

          <div className="col-4 folder-container">
            <div className="bg-container">
              <CardComponent
                title="Dinosaurios en plastilina"
                image={dinoImg}
                text="Los dinosaurios pueden ser grandes como un edificio o tan pequeños como un perro, de cuello largo,
                con cuernos, de fauces gigantes o cubiertos de espinas, son tan diversos como la vida. Conoce más de ellos mientras moldeamos uno en plastilina."
                cssClass=" second"
              />

              <p className="line-title">
                <img src={lineWhite} alt="-" /> INSCRIBETE AQUÍ <img src={lineWhite} alt="-" />
              </p>

              <div className="hours">
                <span onClick={() => setModalClassShow(true)}>11am - 12pm</span>
                <span onClick={() => setModalClassShow(true)}>4pm - 5pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 main__dino-bottom">
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

          <div>
            <img src={ueRed} alt="Explora" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DinoComponent;
