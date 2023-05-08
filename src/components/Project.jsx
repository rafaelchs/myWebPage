import coming from "../assets/coming.jpg";
import pixeo from "../assets/pixeo.jpg";
import { useTranslation } from "react-i18next";

export const Project = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <section>
        <h3 className="text-dark text-center mt-5">{t("project.title")}</h3>
        <div className="d-flex align-items-center justify-content-center">
          <div className="row ">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card card-size">
                  <img
                    src={pixeo}
                    className="card-img-top"
                    alt="coming soon"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Pixeo.com</h5>
                    <p className="card-text">{}</p>
                    <div>
                      <a
                        href="https://rafaelchs.github.io/project-pixeo/Index.html"
                        className="btn btn-primary d-flex align-items-center justify-content-center"
                      >
                        {t("project.go")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-size">
                  <img
                    src={coming}
                    className="card-img-top"
                    alt="coming soon"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{t("project.soon")}</h5>
                    <p className="card-text">{}</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card card-size">
                  <img
                    src={coming}
                    className="card-img-top"
                    alt="coming soon"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{t("project.soon")}</h5>
                    <p className="card-text">{}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
