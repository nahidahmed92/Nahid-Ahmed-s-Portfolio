import Home from './pages/About.jsx';

export default function Header() {
  const handleNavLink = (targetTab) => {
    // Update  URL
    window.history.pushState(null, null, targetTab);
  };

  return (
    <>
      <header className="fixed-top" id="header">
        <nav className="navbar navbar-expand-lg bg-secondary text-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Nahid Ahmed
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    href="#home-tab-pane"
                    className="nav-link active text-dark"
                    data-bs-toggle="tab"
                    onClick={() => handleNavLink('/home')}>
                    Home
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#portfolio-tab-pane"
                    className="nav-link text-dark"
                    data-bs-toggle="tab"
                    onClick={() => handleNavLink('/portfolio')}>
                    Portfolio
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#contact-tab-pane"
                    className="nav-link text-dark"
                    data-bs-toggle="tab"
                    onClick={() => handleNavLink('/contact')}>
                    Contact
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#resume-tab-pane"
                    className="nav-link text-dark"
                    data-bs-toggle="tab"
                    onClick={() => handleNavLink('/resume')}>
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="tab-content text-light mx-4 mt-5 mb-4 py-5" id="myTabContent">
        <Home />
        <div
          className="tab-pane fade"
          id="portfolio-tab-pane"
          role="tabpanel"
          aria-labelledby="portfolio-tab"
          tabIndex="0">
          This is the work tab
        </div>
        <div
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabIndex="0">
          Contact form will go here
        </div>
        <div
          className="tab-pane fade"
          id="resume-tab-pane"
          role="tabpanel"
          aria-labelledby="resume-tab"
          tabIndex="0">
          Resume download and skills will go here
        </div>
      </div>
    </>
  );
}
