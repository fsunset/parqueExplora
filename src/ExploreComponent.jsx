import { useState } from "react";
import Firebase from './firebaseConfig';
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
  // For saving info Firebase
  const db = Firebase.firestore();
  const [activeCourse, setActiveCourse] = useState({
    courseCode: 0,
    courseName: "",
    courseTime: "",
  });

  let history = useHistory();
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
      courseCode: activeCourse.courseCode,
      courseName: activeCourse.courseName,
      courseTime: activeCourse.courseTime,
    });
    
    setUserName("")
    setUserEmail("")
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
                cssTitle="mb-2 text-center"
                cssImg="explore-img"
                cssText="explore-text"
                cssClass=" pl-2"
              />

              <div className="hours">
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseCode: 0,
                        courseName: "TALLER DE EXPERIMENTACIÓN FÍSICA",
                        courseTime: "11am - 12pm",
                      });
                      setModalClassShow(true);
                    }
                  }
                >11am - 12pm</span>
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseCode: 0,
                        courseName: "TALLER DE EXPERIMENTACIÓN FÍSICA",
                        courseTime: "12pm - 1pm",
                      });
                      setModalClassShow(true);
                    }
                  }
                >12pm - 1pm</span>
              </div>
            </div>
          </div>
          
          <div className="col-3 folder-container">
            <div className="bg-container">
              <CardComponent
                title="Taller magia y ciencia"
                image={exploreImg2}
                text="Somos lo que percibimos… los magos conocen muy bien como funcionan nuestros sentidos para engañarnos y distorsionar la realidad.
                Te invitamos a nuestro taller “Magia en Casa”, donde aprenderás con materiales caseros y conocerás como conectamos la magia y la ciencia."
                cssTitle=" text-center"
                cssImg="explore-img-xsmall"
                cssText="explore-text my-1 explore-text-small"
                cssClass=" closer-left"
              />

              <div className="hours">
                <strong>Inscríbete aquí</strong>
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseCode: 0,
                        courseName: "Taller magia y ciencia",
                        courseTime: "9am - 10am",
                      });
                      setModalClassShow(true);
                    }
                  }
                >9am - 10am</span>
              </div>

              <CardComponent
                title="Maestros del disfraz"
                image={exploreImg3}
                text="¿Sabías que los animales son maestros del disfraz? Las pirañas se visten de lentejuelas, las ranas se vuelven multicolor, las orquídeas se disfrazan de abejas…
                En esta charla hablaremos de los disfraces a los que recurren los animales para sobrevivir, comer o atraerse entre sí."
                cssText="explore-text my-1 explore-text-small"
                cssImg="explore-img-xsmall"
                cssTitle=" text-center"
                cssClass=" closer-left"
              />

              <div className="hours">
                <strong>Inscríbete aquí</strong>
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseCode: 0,
                        courseName: "Maestros del disfraz",
                        courseTime: "11am - 12pm",
                      });
                      setModalClassShow(true);
                    }
                  }
                >11am - 12pm</span>
              </div>
            </div>
          </div>

          <div className="col-3 folder-container">
            <div className="bg-container">
              <CardComponent
                title="TALLER DE química y magia"
                image={exploreImg4}
                text="Ven con nosotros a descubrir el universo de las reacciones químicas y te enseñaremos algunos trucos:
                ¿Cómo inflar un globo mezclando dos sustancias de la cocina?"
                cssText="explore-text my-1 explore-text-small"
                cssTitle=" text-center"
                cssImg="explore-img-xsmall"
                cssClass=" closer-left"
              />

              <div className="hours">
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseCode: 0,
                        courseName: "TALLER DE química y magia",
                        courseTime: "12pm - 1pm",
                      });
                      setModalClassShow(true);
                    }
                  }
                >12pm - 1pm</span>
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseCode: 0,
                        courseName: "TALLER DE química y magia",
                        courseTime: "5pm - 6pm",
                      });
                      setModalClassShow(true);
                    }
                  }
                >5pm - 6pm</span>
              </div>

              <CardComponent
                title="Taller de experimentación química"
                image={exploreImg5}
                text="Experimentamos con la química y la física para ver fenómenos únicos de la ciencia, maravíllate con estos trucos."
                cssText="explore-text my-1 explore-text-small"
                cssImg="explore-img-xsmall"
                cssTitle=" text-center"
              />

              <div className="hours">
                <strong>Inscríbete aquí</strong>
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseCode: 0,
                        courseName: "Taller de experimentación química",
                        courseTime: "2pm - 3pm",
                      });
                      setModalClassShow(true);
                    }
                  }
                >2pm - 3pm</span>
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
                cssText="explore-text my-1 explore-text-small"
                cssTitle=" text-center"
                cssImg="explore-img-small"
              />

              <div className="hours">
                <a href="https://encasa.parqueexplora.org/experimenta/" target="_blank" rel="noreferrer">
                  <span>clic aquí</span>
                </a>
              </div>

              <CardComponent
                title=""
                image={exploreImg7}
                text="Interactúa con Experiencias de Parque Explora desde la comodidad de tu casa."
                cssText="explore-text my-1 explore-text-small"
                cssImg="explore-img-small"
              />

              <div className="hours">
                <a href="https://encasa.parqueexplora.org/experimenta/" target="_blank" rel="noreferrer">
                  <span>clic aquí</span>
                </a>
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
