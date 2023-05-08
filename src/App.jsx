import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {Project} from "./components/Project";
import {Contact} from "./components/Contact";
import { Skills } from "./components/Skills";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import developer from "./assets/developer.svg";
import avatar from "./assets/avatar.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function App() {
  const [t] = useTranslation("global");

  return (
    <>
      <Header />
      <div className="container mt-5 presentation">
        <div className="row">
          <div className="col-md-6 col-sm-auto text-center">
            <h2 className="text-white">{t("presentation.text_1")}</h2>
            <h1
              className="text-white text-animation text-center"
              style={{ marginLeft: "20%" }}
            >
              Rafael Chevez S
            </h1>
            <h3 className="text-white">{t("presentation.text_2")}</h3>

            <Link to="https://github.com/rafaelchs">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ fontSize: "2em", color: "white", marginRight: "20px" }}
              />
            </Link>

            <Link to="https://www.linkedin.com/in/rafael-chevez-s%C3%A1nchez-1407b5199/">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: "2em", color: "white" }}
              />
            </Link>

            <div className="mt-3">
              <Link to="./file/cv.pdf">
              <button type="button" className="btn btn-primary">
                {t("presentation.text_3")}
              </button>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-sm-auto mt-2">
            <img className="img-fluid float-start" src={developer} alt="icon" style={{maxWidth:"70%", marginLeft: "25px"}} />
          </div>
        </div>

      </div>

      <div className="row about" id="idAbout">
        <div className="container">
          <div className="text-center mt-5">
            <h3 className="text-bold text-dark">{t("about.title")}</h3>
            <img alt="avatar" src={avatar} style={{ width: "190px" }} />
            <p className="text-dark text-bold text-center mt-4">
             {t("about.content")}
            </p>
          </div>
        </div>
      </div>
      <div className="row skills">
        <Skills/>
       
      </div>

      <div className="row project" id="IdProject">
       <Project/>
      </div>

      <div className="row beforeContact">
      </div>

      <div className="row contact" id="IdContact">
        <Contact/>
      
      </div>

      <Footer />
    </>
  );
}

export default App;
