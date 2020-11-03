import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import CardComponent from "./CardComponent";
import { Modal } from "react-bootstrap";
import backImg from "./img/btn-back.png";
import logoZenu from "./img/logo-zenu.png";
import ueWhite from "./img/logo-explora-white.png";
import exploreImg1 from "./img/img-explore-1.jpg";
import exploreImg2 from "./img/img-explore-2.jpg";
import exploreImg3 from "./img/img-explore-3.jpg";
import exploreImg4 from "./img/img-explore-4.jpg";
import exploreImg5 from "./img/img-explore-5.jpg";
import exploreImg6 from "./img/img-explore-6.jpg";
import exploreImg7 from "./img/img-explore-7.jpg";

import './sass/explore.scss';

const ExploreComponent = () => {
  let history = useHistory();
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

  return (
    <div className="main__explore">
      <main className="container">
        <div className="row">
          <div className="col-2">
            <div
              className="main__explore-back pt-5"
              onClick={() => {history.push("/mapa")}}
            >
              <img src={backImg} alt="Atrás" />
            </div>
          </div>

          <div className="col-7 text-center">
            <div className="main__explore-title">
              <p>Explora<br/>y Experimenta</p>
            </div>
          </div>

          <div className="col-3">
            <div className="main__explore-sponsor pt-5">
              <img src={logoZenu} alt="Zenú" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3 folder-container">
            <div className="bg-container pt-4">
              <CardComponent
                title="TALLER DE EXPERIMENTACIÓN FÍSICA"
                image={exploreImg1}
                text="Usaremos elementos caseros para hacer experiencias sobre electrostática de una manera divertida
                y segura. Veremos cuáles materiales se atraen o repelen entre sí, y que inclusive podemos usar la electrostática para hacer volar un objeto."
                cssTitle="mb-2"
                cssImg="explore-img"
                cssText="explore-text"
              />

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
                image={exploreImg2}
                text="En nuestro taller de dibujo exploraremos el mundo de las pirañas. Y por medio de la biología,
                veremos su ciclo de alimentación, reproducción, morfología y comportamiento. Dibujaremos una piraña con un método de ilustración científica."
                cssClass=" second"
              />

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
                image={exploreImg3}
                text="Sumergete al interior del Acuario Parque Explora y conoce las especies representativas del Amazonas.
                Una experiencia única donde conocerás al Pirarucú, un gigante prehistórico considerado uno de los peces de agua dulce mas grande del mundo."
                cssClass=" second"
              />

              <div className="hours">
                <span onClick={() => setModalClassShow(true)}>9am - 10am</span>
                <span onClick={() => setModalClassShow(true)}>2pm - 3pm</span>
              </div>
            </div>
          </div>

          <div className="col-3 folder-container">
            <div className="bg-container">
              <CardComponent
                title="ACTIVIDAD EXPERIMENTAL"
                image={exploreImg6}
                text="Hacemos cosas, cada uno a nuestro ritmo. Creamos, construimos, jugamos. Solos y con el otro.
                Hacemos para nosotros, también para compartir. En la mínima acción de vivir nos relacionamos con el mundo."
              />

              <div className="hours">
                <span onClick={() => setModalClassShow(true)}>clic aquí</span>
              </div>

              <CardComponent
                title=""
                image={exploreImg7}
                text="Interactúa con Experiencias de Parque Explora desde la comodidad de tu casa."
              />

              <div className="hours">
                <span onClick={() => setModalClassShow(true)}>clic aquí</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 main__explore-bottom">
            <img src={ueWhite} alt="Parque Explora" />
          </div>
        </div>
      </main>

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
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ExploreComponent;
