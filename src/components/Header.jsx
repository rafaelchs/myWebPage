import { useTranslation } from "react-i18next";

export const Header = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand text-bold" href="#">
              rchs
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li>
                  <a
                    href="#idAbout"
                    className="text-dark nav-link font-weight-bold"
                  >
                    {t("navbar.home")}
                  </a>
                </li>
                <li>
                  <a
                    href="#idAbout"
                    className="text-dark nav-link font-weight-bold"
                  >
                    {t("navbar.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#IdService"
                    className="text-dark nav-link font-weight-bold"
                  >
                    {t("navbar.service")}
                  </a>
                </li>
                <li>
                  <a
                    href="#IdService"
                    className="text-dark nav-link font-weight-bold"
                  >
                    {t("navbar.contact")}
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark text-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {i18n.language}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item text-dark text-bold"
                        href="#"
                        onClick={() => i18n.changeLanguage("es")}
                      >
                        es
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-dark text-bold"
                        href="#"
                        onClick={() => i18n.changeLanguage("en")}
                      >
                        en
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
