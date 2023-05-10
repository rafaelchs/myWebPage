import { useTranslation } from "react-i18next";

export const Card = ({ image, title, url }) => {
  const [t] = useTranslation("global");

  return (
    <>
      <div className="card text-center">
        <img
          src={image}
          className="card-img-top"
          alt="coming soon"
          height="145px"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{}</p>
          <div>
            <a
              href={url}
              className="btn btn-primary d-flex align-items-center justify-content-center"
            >
              {t("project.go")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
