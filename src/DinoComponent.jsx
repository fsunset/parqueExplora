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
import lineWhite from "./img/line-white.png";
import vidImg from "./img/dinos-vid.png";
import dinoImg from "./img/dinos-class.png";
import dinoImg2 from "./img/dino-doll.png";

import './sass/dino.scss';

const DinoComponent = () => {
  // For saving info Firebase
  const db = Firebase.firestore();
  const [activeCourse, setActiveCourse] = useState({
    courseCode: 0,
    courseName: "",
    courseTime: "",
    courseLink: "",
  });

  let history = useHistory();
  const [modalVideoShow, setModalVideoShow] = useState(false);
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
          <div className="col-5 col-md-2">
            <div
              className="main__dino-back pt-5"
              onClick={() => {history.push("/mapa")}}
            >
              <img src={backImg} alt="Atrás" />
            </div>
          </div>

          <div className="col-1 col-md-7 text-center">
            <div className="main__dino-title d-none d-md-block">
              <p>Explora <br />dinosaurios</p>
            </div>
          </div>

          <div className="col-5 col-md-3">
            <div className="main__dino-sponsor pt-5">
              <img src={logoZenu} alt="Zenú" />
            </div>
          </div>
          
          <div className="col-12 text-center d-block d-md-none">
            <div className="main__dino-title">
              <p>Explora <br />dinosaurios</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-10 offset-1 col-md-4 offset-md-0 folder-container">
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
                cssTitle="my-2 text-center"
                cssImg="dino-img"
                cssText="dino-text"
              />
            </div>
          </div>
          
          <div className="col-10 offset-1 col-md-4 offset-md-0 folder-container">
            <div className="bg-container">
              <CardComponent
                title="Dinosaurios en Origami"
                image={dinoImg}
                text="Gracias a los fósiles, nos hemos imaginado todo tipo de historias fantásticas. Con los saurios, un grupo de reptiles ya extinto, la paleontología
                nos indica que estos fósiles eran los restos de un Pliosaurio, un enorme reptil acuático. Conoce mas de estas criaturas y moldea un dinosaurio en papel origami."
                cssClass=" second"
                cssText="dino-text mt-3"
              />

              <p className="line-title">
                <img src={lineWhite} alt="-" /> INSCRIBETE AQUÍ <img src={lineWhite} alt="-" />
              </p>

              <div className="hours">
                <strong>Clase 1:</strong>
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseLink: "https://zoom.us/j/98120670055?pwd=bFdNR1NMU3RKOVowdm5FOUV6bVVldz09",
                        courseCode: 1,
                        courseName: "Dinosaurios en Origami",
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
                        courseLink: "https://zoom.us/j/92157201953?pwd=UlgvVFEreUd3bCt4TkwyNzIvNWlCZz09",
                        courseCode: 1,
                        courseName: "Dinosaurios en Origami",
                        courseTime: "3pm - 4pm",
                      });
                      setModalClassShow(true);
                      setShowConfirmationMsg(false);
                    }
                  }
                >3pm - 4pm</span>
              </div>
              <div className="hours">
                <strong>Clase 2:</strong>
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseLink: "https://zoom.us/j/95500988319?pwd=QTNFcm83SnJrSFc4bUlkY1BQN3VMdz09",
                        courseCode: 2,
                        courseName: "Dinosaurios en Origami",
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
                        courseLink: "https://zoom.us/j/92780349604?pwd=S1VQTzFxMERJd2ZoRjBKL2NUZGladz09",
                        courseCode: 2,
                        courseName: "Dinosaurios en Origami",
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

          <div className="col-10 offset-1 col-md-4 offset-md-0 folder-container">
            <div className="bg-container">
              <CardComponent
                title="Dinosaurios en Plastilina"
                image={dinoImg2}
                text="Los dinosaurios pueden ser grandes como un edificio o tan pequeños como un perro, de cuello largo,
                con cuernos, de fauces gigantes o cubiertos de espinas, son tan diversos como la vida. Conoce más de ellos mientras moldeamos uno en plastilina."
                cssClass=" second"
                cssText="dino-text mt-3"
              />

              <p className="line-title">
                <img src={lineWhite} alt="-" /> INSCRIBETE AQUÍ <img src={lineWhite} alt="-" />
              </p>

              <div className="hours">
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseLink: " https://zoom.us/j/96979010972",
                        courseCode: 0,
                        courseName: "Dinosaurios en Plastilina",
                        courseTime: "11am - 12pm",
                      });
                      setModalClassShow(true);
                      setShowConfirmationMsg(false);
                    }
                  }
                >11am - 12pm</span>
                <span
                  onClick={
                    () => {
                      setActiveCourse({
                        courseLink: "https://zoom.us/j/98556103501",
                        courseCode: 0,
                        courseName: "Dinosaurios en Plastilina",
                        courseTime: "4pm - 5pm",
                      });
                      setModalClassShow(true);
                      setShowConfirmationMsg(false);
                    }
                  }
                >4pm - 5pm</span>
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

export default DinoComponent;
