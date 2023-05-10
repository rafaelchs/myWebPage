import coming from "../assets/coming.jpg";
import pixeo from "../assets/pixeo.jpg";
import { useTranslation } from "react-i18next";
import { Card } from "./Card";

export const Project = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <section>
        <h3 className="text-dark text-center mt-5">{t("project.title")}</h3>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <Card
                image={pixeo}
                title="Pixeo.com"
                url="https://rafaelchs.github.io/project-pixeo/Index.html"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <Card image={coming} title={t("project.soon")} url="" />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <Card image={coming} title={t("project.soon")} url="" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};
