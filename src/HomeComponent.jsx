import { useState } from "react";
import { useHistory } from "react-router-dom";

import sponsorImg from "./img/sponsor.png";
import ueColour from "./img/logo-explora-colour.png";
import ueWhite from "./img/logo-explora-white.png";

const HomeComponent = () => {
  let history = useHistory();
  const [passcodeVal, setPasscodeVal] = useState("");
  const [passcodeError, setPasscodeError] = useState(false);

  const submitPasscodeHandler = () => {
    if (passcodeVal === "1234") {
      setPasscodeError(false);
      history.push("/mapa")
    } else {
      setPasscodeError(true);
    }
  }

  return (
    <div className="main">
      <main className="container">
        <div className="row container__title">
          <div className="col-12">
            <p>Celebración Día del Niño<br />2020 Negocio Cárnico</p>
          </div>
        </div>

        <div className="row container__body">
          <div className="col-6">
            <div className="container__body__left">
              <img src={ueColour} alt="UE" />
            </div>
          </div>

          <div className="col-4 offset-1">
            <div className="container__body__right">
              <img src={ueWhite} alt="Parque Explora" />
              
              <div className="container__body__right-middle">
                <p>
                  Universo Explora
                </p>

                <span>Virtualmente increíble</span>
              </div>

              <div className="container__body__right-form">
                <span>Para ingresar, pon la contraseña</span>
                <div>
                  <input
                    type="password"
                    id="passcode"
                    className={!!passcodeError ? "validation-error" : ""}
                    value={passcodeVal}
                    onChange={e => setPasscodeVal(e.target.value)}
                  />
                  <button
                    className="btn btn-primary container__body__right-button"
                    onClick={() => submitPasscodeHandler()}
                  >
                    Enviar
                  </button>
                </div>

                {!!passcodeError && (
                  <span className="container__body__right-form-error">Contraseña incorrecta</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <footer>
          <img src={sponsorImg} alt="patrocinador" />
        </footer>
      </main>
    </div>
  );
}

export default HomeComponent;
