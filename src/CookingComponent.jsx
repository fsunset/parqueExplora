import { useState } from "react";
import { useHistory } from "react-router-dom";
import CardComponent from "./CardComponent";
import { Modal } from "react-bootstrap";
import backImg from "./img/btn-back.png";
import logoZenu from "./img/logo-zenu.png";
import ueWhite from "./img/logo-explora-white.png";
import vidImg from "./img/vid-cooking.jpg";
import cookingPopup from "./img/popup-cooking.png";
import cookingStick from "./img/cooking-stick.png";

import './sass/cooking.scss';

const CookingComponent = () => {
  let history = useHistory();
  const [modalVideoShow, setModalVideoShow] = useState(false);
  const [modalRecipeShow, setModalRecipeShow] = useState(false);

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
            title="Cocina Video"
            width="100%"
            height="435"
            src="https://www.youtube-nocookie.com/embed/yUfW-nBgqqk"
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
    <div className="main__cooking">
      <main className="container">
        <div className="row">
          <div className="col-2">
            <div
              className="main__cooking-back pt-5"
              onClick={() => {history.push("/mapa")}}
            >
              <img src={backImg} alt="Atrás" />
            </div>
          </div>

          <div className="col-7 text-center">
            <div className="main__cooking-title">
              <p>Explora <br />SABORES</p>
            </div>
          </div>

          <div className="col-3">
            <div className="main__cooking-sponsor pt-5">
              <img src={logoZenu} alt="Zenú" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 offset-1 folder-container">
            <div className="bg-container pt-4">
              <CardComponent
                title=""
                image={vidImg}
                text="La Carlota de Limon es un riquísimo postre que lleva el nombre de Carlota de Mecklemburgo (Inglaterra). Es muy fácil para hacer en familia, no requiere 
                horneado y queda en cuestión de horas. Pruébalo, es delicioso."
                cssClass=" first"
                onClickFunc={() => setModalVideoShow(true)}
                cssTitle="mb-2"
                cssImg="cooking-img"
                cssText="cooking-text"
              />

              <img src={cookingStick} alt="stick" className="stick" />
            </div>
          </div>
          
          <div className="col-2 offset-2 folder-container right-container-small">
            <p className="line-title">Haz <u onClick={() => setModalRecipeShow(true)}>clic aquí</u> para conocer los ingredientes de este delicioso postre</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 main__cooking-bottom">
            <img src={ueWhite} alt="Parque Explora" />
          </div>
        </div>
      </main>

      {/* Vid Modal */}
      <VideoModal
        show={modalVideoShow}
        onHide={() => setModalVideoShow(false)}
      />

      {/* Recipe Modal */}
      <Modal
        show={modalRecipeShow}
        onHide={() => setModalRecipeShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="p-0 modal-class-body">
          <img src={cookingPopup} alt="Receta" />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CookingComponent;
