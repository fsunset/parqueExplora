import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import CardComponent from "./CardComponent";
import { Modal } from "react-bootstrap";
import backImg from "./img/btn-back.png";
import logoZenu from "./img/logo-zenu.png";
import ueWhite from "./img/logo-explora-white.png";
import ueRed from "./img/logo-explora-red.png";
import lineWhite from "./img/line-white-small.png";
import vidImg from "./img/vid-water.png";
import waterImg1 from "./img/img-water-1.png";
import waterImg2 from "./img/img-water-2.png";
import waterImg3 from "./img/img-water-3.png";
import waterImg4 from "./img/img-water-4.png";

import './sass/water.scss';

const WaterComponent = () => {
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
            title="Acuario Video"
            width="100%"
            height="435"
            src="https://www.youtube-nocookie.com/embed/1TWMUE5SFUM"
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
    <div className="main__water">
      <main className="container">
        <div className="row">
          <div className="col-2">
            <div
              className="main__water-back pt-5"
              onClick={() => {history.push("/mapa")}}
            >
              <img src={backImg} alt="Atrás" />
            </div>
          </div>

          <div className="col-7 text-center">
            <div className="main__water-title">
              <p>Explora <br />bajo el agua</p>
            </div>
          </div>

          <div className="col-3">
            <div className="main__water-sponsor pt-5">
              <img src={logoZenu} alt="Zenú" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3 folder-container">
            <div className="bg-container pt-4">
              <CardComponent
                title="Peces payaso en plastilina"
                image={waterImg1}
                text="Lo puedes conocer como Nemo, este colorido y particular pez habita en el 
                Oriente de los océanos Índico y Pacífico Occidental. Moldea un pez payaso en este taller mientras nos sumergimos en su historia."
                onClickFunc={() => setModalVideoShow(true)}
                cssTitle="mb-2"
                cssImg="water-img"
                cssText="water-text"
              />

              <p className="line-title">
                <img src={lineWhite} alt="-" /> INSCRIBETE AQUÍ <img src={lineWhite} alt="-" />
              </p>

              <div className="hours">
                <span onClick={() => setModalClassShow(true)}>11am - 12pm</span>
                <span onClick={() => setModalClassShow(true)}>12pm - 1pm</span>
              </div>
            </div>
          </div>
          
          <div className="col-3 folder-container">
            <div className="bg-container">
              <CardComponent
                title="taller Dibujo de pirañas"
                image={waterImg2}
                text="En nuestro taller de dibujo exploraremos el mundo de las pirañas. Y por medio de la biología,
                veremos su ciclo de alimentación, reproducción, morfología y comportamiento. Dibujaremos una piraña con un método de ilustración científica."
                cssClass=" second"
              />

              <p className="line-title">
                <img src={lineWhite} alt="-" /> INSCRIBETE AQUÍ <img src={lineWhite} alt="-" />
              </p>

              <div className="hours">
                <span onClick={() => setModalClassShow(true)}>9am - 10am</span>
                <span onClick={() => setModalClassShow(true)}>2pm - 3pm</span>
              </div>
            </div>
          </div>

          <div className="col-3 folder-container">
            <div className="bg-container">
              <CardComponent
                title="navegación por Amazonas "
                image={waterImg3}
                text="Sumergete al interior del Acuario Parque Explora y conoce las especies representativas del Amazonas.
                Una experiencia única donde conocerás al Pirarucú, un gigante prehistórico considerado uno de los peces de agua dulce mas grande del mundo."
                cssClass=" second"
              />

              <p className="line-title">
                <img src={lineWhite} alt="-" /> INSCRIBETE AQUÍ <img src={lineWhite} alt="-" />
              </p>

              <div className="hours">
                <span onClick={() => setModalClassShow(true)}>9am - 10am</span>
                <span onClick={() => setModalClassShow(true)}>2pm - 3pm</span>
              </div>
            </div>
          </div>

          <div className="col-3 folder-container">
            <div className="bg-container">
              <CardComponent
                title="RECORRIDO ACUARIO"
                image={vidImg}
                text="Recorre junto a nuestros exploradores el Acuario de Parque Explora, sumérgete en las aguas entre peces y plantas."
                cssClass=" first"
                onClickFunc={() => setModalVideoShow(true)}
              />

              <CardComponent
                title="ranas de origami"
                image={waterImg4}
                text="En este taller aprenderemos a crear ranas en origami, conociendo sobre esta increíble especie y su naturaleza."
              />

              <div className="hours">
                <strong>Inscríbete aquí</strong>
                <span onClick={() => setModalClassShow(true)}>4pm - 5pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 main__water-bottom">
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

export default WaterComponent;