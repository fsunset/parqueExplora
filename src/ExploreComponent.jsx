import { useState } from "react";
import Firebase from './firebaseConfig';
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import CardComponent from "./CardComponent";
import { Modal } from "react-bootstrap";
import backImg from "./img/btn-back.png";
import logoZenu from "./img/logo-zenu.png";
import ueWhite from "./img/logo-explora-white.png";
import ueRed from "./img/logo-explora-red.png";
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
    courseLink: "",
  });

  let history = useHistory();
  const [modalClassShow, setModalClassShow] = useState(false);
  const [showConfirmationMsg, setShowConfirmationMsg] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Saving info Firebase DB
    db.collection("users").add({
      name: userName,
      email: userEmail,
      courseCode: activeCourse.courseCode,
      courseName: activeCourse.courseName,
      courseTime: activeCourse.courseTime,
      courseLink: activeCourse.courseLink,
    });

    // POST request to send user's email
    fetch('https://parque-explora-endpoints-back.herokuapp.com/api/user/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          "name": userName,
          "userEmail": userEmail,
          "courseName": activeCourse.courseName,
          "courseTime": activeCourse.courseTime,
          "courseCode": activeCourse.courseCode,
          "courseLink": activeCourse.courseLink,
        }
      )
    })
      .then(setShowConfirmationMsg(true));
    
    setUserName("")
    setUserEmail("")
  }

  return (
    <div className="main__explore">
      <main className="container">
        <div className="row">
          <div className="col-5 col-md-2">
            <div
              className="main__explore-back pt-5"
              onClick={() => {history.push("/mapa")}}
            >
              <img src={backImg} alt="Atrás" />
            </div>
          </div>

          <div className="col-1 col-md-7 text-center">
            <div className="main__explore-title d-none d-md-block">
              <p>Explora <br />y Experimenta</p>
            </div>
          </div>

          <div className="col-5 col-md-3">
            <div className="main__explore-sponsor pt-5">
              <img src={logoZenu} alt="Zenú" />
            </div>
          </div>
          
          <div className="col-12 text-center d-block d-md-none">
            <div className="main__explore-title">
              <p>Explora <br />y Experimenta</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-10 offset-1 col-md-3 offset-md-0 folder-container">
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
                        courseLink: "https://zoom.us/j/94504415469",
                        courseCode: 0,
                        courseName: "TALLER DE EXPERIMENTACIÓN FÍSICA",
                        courseTime: "10am - 11am",
                      });
                      setModalClassShow(true);
                      setShowConfirmationMsg(false);
                    }
                  }
                >10am - 11am</span>
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseLink: "https://zoom.us/j/95590384803?pwd=L3FCR2VUa1RDekdOQ0hlR1ZncExidz09",
                        courseCode: 0,
                        courseName: "TALLER DE EXPERIMENTACIÓN FÍSICA",
                        courseTime: "3pm - 4pm",
                      });
                      setModalClassShow(true);
                      setShowConfirmationMsg(false);
                    }
                  }
                >3pm - 4pm</span>
              </div>
            </div>
          </div>
          
          
          <div className="col-10 offset-1 col-md-3 offset-md-0 folder-container">
            <div className="bg-container">
              <CardComponent
                title="Taller magia y ciencia"
                image={exploreImg2}
                text="Somos lo que percibimos… los magos conocen muy bien como funcionan nuestros sentidos para engañarnos y distorsionar la realidad.
                Te invitamos a nuestro taller “Magia en Casa”, donde aprenderás con materiales caseros y conocerás como conectamos la magia y la ciencia."
                cssTitle="text-center my-2 my-md-0"
                cssImg="explore-img-xsmall"
                cssText="explore-text my-1 explore-text-small"
                cssClass=" closer-left"
              />

              <div className="hours">
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseLink: "https://zoom.us/j/98772552321",
                        courseCode: 0,
                        courseName: "Taller magia y ciencia",
                        courseTime: "10am - 11am",
                      });
                      setModalClassShow(true);
                      setShowConfirmationMsg(false);
                    }
                  }
                >10am - 11am</span>
              
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseLink: "https://zoom.us/j/93857929692",
                        courseCode: 0,
                        courseName: "Taller magia y ciencia",
                        courseTime: "3pm - 4pm",
                      });
                      setModalClassShow(true);
                      setShowConfirmationMsg(false);
                    }
                  }
                >3pm - 4pm</span>
              </div>

              <CardComponent
                title="Maestros del disfraz"
                image={exploreImg3}
                text="¿Sabías que los animales son maestros del disfraz? Las pirañas se visten de lentejuelas, las ranas se vuelven multicolor, las orquídeas se disfrazan de abejas…
                En esta charla hablaremos de los disfraces a los que recurren los animales para sobrevivir, comer o atraerse entre sí."
                cssText="explore-text my-1 explore-text-small"
                cssImg="explore-img-xsmall"
                cssTitle="text-center my-2 my-md-0"
                cssClass=" closer-left"
              />

              <div className="hours">
                <strong>Inscríbete aquí</strong>
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseLink: "https://zoom.us/j/93329142069",
                        courseCode: 0,
                        courseName: "Maestros del disfraz",
                        courseTime: "11am - 12pm",
                      });
                      setModalClassShow(true);
                      setShowConfirmationMsg(false);
                    }
                  }
                >11am - 12pm</span>
              </div>
            </div>
          </div>

          <div className="col-10 offset-1 col-md-3 offset-md-0 folder-container">
            <div className="bg-container">
              <CardComponent
                title="TALLER DE química y magia"
                image={exploreImg4}
                text="Ven con nosotros a descubrir el universo de las reacciones químicas y te enseñaremos algunos trucos:
                ¿Cómo inflar un globo mezclando dos sustancias de la cocina?"
                cssText="explore-text my-1 explore-text-small"
                cssTitle="text-center my-2 my-md-0"
                cssImg="explore-img-xsmall"
                cssClass=" closer-left"
              />

              <div className="hours">
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseLink: "https://zoom.us/j/91537263185",
                        courseCode: 0,
                        courseName: "TALLER DE química y magia",
                        courseTime: "12pm - 1pm",
                      });
                      setModalClassShow(true);
                      setShowConfirmationMsg(false);
                    }
                  }
                >12pm - 1pm</span>
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseLink: "https://zoom.us/j/93336278639",
                        courseCode: 0,
                        courseName: "TALLER DE química y magia",
                        courseTime: "5pm - 6pm",
                      });
                      setModalClassShow(true);
                      setShowConfirmationMsg(false);
                    }
                  }
                >5pm - 6pm</span>
              </div>

              <CardComponent
                title="Taller de experimentación química"
                image={exploreImg5}
                text="Experimentamos con la química y la física para ver fenómenos únicos de la ciencia, maravíllate con estos trucos."
                cssText="explore-text my-1 explore-text-small"
                cssImg="explore-img-xsmall pl-3 my-2"
                cssTitle="text-center my-2 my-md-0"
              />

              <div className="hours">
                <strong>Inscríbete aquí</strong>
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseLink: "https://zoom.us/j/97935819951",
                        courseCode: 0,
                        courseName: "Taller de experimentación química",
                        courseTime: "3pm - 4pm",
                      });
                      setModalClassShow(true);
                      setShowConfirmationMsg(false);
                    }
                  }
                >3pm - 4pm</span>
              </div>
            </div>
          </div>

          <div className="col-10 offset-1 col-md-3 offset-md-0 folder-container">
            <div className="bg-container">
              <CardComponent
                title="ACTIVIDAD EXPERIMENTAL"
                image={exploreImg6}
                text="Hacemos cosas, cada uno a nuestro ritmo. Creamos, construimos, jugamos. Solos y con el otro.
                Hacemos para nosotros, también para compartir. En la mínima acción de vivir nos relacionamos con el mundo."
                cssText="explore-text my-1 explore-text-small"
                cssTitle="text-center my-2 my-md-0"
                cssImg="explore-img-small pl-3 my-2"
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
                cssImg="explore-img-small pl-3 my-2"
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
          {!!showConfirmationMsg ? (
            <div className="row">
              <div className="col-12">
                <p className="p-4">
                  Revisa tu correo electrónico, te enviamos un link con la información de la inscripción a tu curso,
                  si quieres entrar a tu clase directamente haz <a href={activeCourse.courseLink} target="_blank" rel="noreferrer">clic aquí</a>
                </p>
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}

          <div className="bottom">
            <img src={ueRed} alt="Explora" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ExploreComponent;
