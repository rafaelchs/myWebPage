import { useTranslation } from "react-i18next";

export const Contact = () => {

  const [t] = useTranslation("global");

  return (
    <>
      <section>
        <div className="container">
          <div className="row mt-4 text-center">
            <h2 className="text-bold text-center">{t("contact.title")}</h2>
            <hr className="border border-dark border-3 opacity-75"></hr>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <div className="">
              <div className="mb-4">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <button className="btn btn-primary mt-3">
                  {t("contact.send")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
