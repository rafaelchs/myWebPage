import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import photo from "./assets/photo.jpg";
import avatar from "./assets/avatar.svg";
import { useTranslation } from "react-i18next";

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
              style={{ marginLeft: "17%" }}
            >
              Rafael Chevez Sanchez
            </h1>
            <h3 className="text-white">{t("presentation.text_2")}</h3>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: "2em", color: "white", marginRight: "20px" }}
            />

            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ fontSize: "2em", color: "white" }}
              href="https://www.linkedin.com/in/rafael-chevez-s%C3%A1nchez-1407b5199/"
            />

            <div className="mt-3">
              <button type="button" className="btn btn-primary">
                {t("presentation.text_3")}
              </button>
            </div>
          </div>

          <div className="col-md-6 col-sm-auto"></div>
        </div>

        <div className="row"></div>
      </div>

      <div className="row about" id="idAbout">
        <div className="container">
          <div className="text-center mt-5">
            <h3 className="text-bold text-dark">{t("about.title")}</h3>
            <img alt="avatar" src={avatar} style={{ width: "190px" }} />
            <p className="text-dark text-bold text-center mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>

      <div className="row proyect" id="IdService">
        <div></div>
      </div>

      <div className="row contact" id="IdContact">
        <div className="container">
          <div className="row mt-4 text-center">
            <h2 className="text-bold text-center">{t("contact.title")}</h2>
            <hr className="border border-dark border-3 opacity-75"></hr>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <div className="">
              <div className="mb-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  {t("contact.message")}
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <button className="btn btn-primary mt-3">{t("contact.send")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
