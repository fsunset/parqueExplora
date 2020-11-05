import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import backImg from "./img/btn-back.png";
import logoZenu from "./img/logo-zenu.png";

import './sass/info.scss';

const InfoComponent = () => {
  let history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const InfoModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="p-0" style={{ height: "435px" }}>
          <img src={modalImg} alt="Info" />
        </Modal.Body>
      </Modal>
    );
  }

  const showModalHandler = (image) => {
    setModalImg(image)
    setModalShow(true);
  }

  return (
    <div className="main__info">
      <main className="container">
        <div className="row">
          <div className="col-5 col-md-2">
            <div
              className="main__info-back pt-5"
              onClick={() => {history.push("/mapa")}}
            >
              <img src={backImg} alt="Atrás" />
            </div>
          </div>

          <div className="col-1 col-md-7 text-center">
            <div className="main__info-title">
            </div>
          </div>

          <div className="col-5 col-md-3">
            <div className="main__info-sponsor pt-5">
              <img src={logoZenu} alt="Zenú" />
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop: "15px"}}>
          <div className="col-12 col-md-8 offset-md-4 folder-container">
            <div className="bg-container pt-4">
              <h1 className="mt-0 my-md-4">PUNTO DE INFORMACIÓN</h1>

              <ul>
                <li onClick={() => showModalHandler("https://raw.githubusercontent.com/fsunset/parqueExplora/master/src/img/info-1.png")}><p>¿Como funciona el mapa?</p></li>
                <li onClick={() => showModalHandler("https://raw.githubusercontent.com/fsunset/parqueExplora/master/src/img/info-2.png")}><p>¿Como inscribirse a los talleres?</p></li>
                <li onClick={() => showModalHandler("https://raw.githubusercontent.com/fsunset/parqueExplora/master/src/img/info-3.png")}><p>Horarios</p></li>
                <li onClick={() => showModalHandler("https://raw.githubusercontent.com/fsunset/parqueExplora/master/src/img/info-4.png")}><p>Ayuda</p></li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Info Modal */}
      <InfoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default InfoComponent;
