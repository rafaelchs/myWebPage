import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Contact = () => {
  const [t] = useTranslation("global");
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const serviceId = "service_rffh0xc";
  const templateId = "template_0y48oom";
  const publicKey = "mCx1WzmrTA6iZFc2d";

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      errorAlert();
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        cleanFields();
        successAlert();
      },
      (error) => {
        console.log(error.text);
        cleanFields();
        errorToSendAlert(error.text);
      }
    );

  };

  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: t("alert.emptyField"),
      width: "300px",
    });
  };

  const cleanFields = () =>{
    setName("");
    setEmail("");
    setMessage("");
  }

  const errorToSendAlert = (text) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: text,
      width: "300px",
    });
  };

  const successAlert = () => {
    Swal.fire({
      icon: "success",
      text: t("alert.success"),
      width: "300px",
    });
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row mt-4 text-center">
            <h2 className="text-bold text-center">{t("contact.title")}</h2>
            <hr className="border border-dark border-3 opacity-75"></hr>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <form ref={form}>
              <div className="mb-4">
                <label htmlFor="idName" className="form-label">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="idName"
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="idEmail" className="form-label">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="idEmail"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  id="idMessage"
                  name="message"
                  rows="3"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>

                <button className="btn btn-primary mt-4" onClick={sendEmail}>
                  {t("contact.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
