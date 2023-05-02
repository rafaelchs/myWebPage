export const Header = () => {
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
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <ul className="navbar-nav ms-auto">
                  <li>
                    <a
                      href="#idAbout"
                      className="text-dark nav-link font-weight-bold"
                    >
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#idAbout"
                      className="text-dark nav-link font-weight-bold"
                    >
                      Acerca
                    </a>
                  </li>
                  <li>
                    <a
                      href="#IdService"
                      className="text-dark nav-link font-weight-bold"
                    >
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#IdService"
                      className="text-dark nav-link font-weight-bold"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
