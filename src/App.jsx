import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import photo from "./assets/photo.jpg";
import avatar from "./assets/avatar.svg";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-5 presentation">
        <div className="row">
          <div className="col-md-6 col-sm-auto text-center">
            <h2 className="text-white">Hello there, I'm</h2>
            <h1
              className="text-white text-animation text-center"
              style={{ marginLeft: "17%" }}
            >
              Rafael Chevez Sanchez
            </h1>
            <h3 className="text-white">I'm Full stack Developer</h3>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: "2em", color: "white", marginRight: "20px" }}
            />

            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ fontSize: "2em", color: "white" }}
            />

            <div className="mt-3">
              <button type="button" className="btn btn-primary">
                Descargar cv
              </button>
            </div>
          </div>

          <div
            className="col-md-6 col-sm-auto
          "
          ></div>
        </div>

        <div className="row"></div>
      </div>

      <div className="row about" id="idAbout">
        <div className="container">
          <div className="text-center mt-5">
            <h3 className="text-bold text-dark">Acerca de mi</h3>
            <img alt="avatar" src={avatar} style={{ width: "190px" }} />
          </div>
        </div>
      </div>

      <div className="row about">
        <section className=""></section>
      </div>

      <Footer />
    </>
  );
}

export default App;
