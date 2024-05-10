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
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0">
          HOME Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, molestiae non?
          Quibusdam at sapiente, ipsum illum necessitatibus odit veniam enim odio provident, saepe
          fugiat recusandae optio voluptates, consequatur deserunt amet? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Error odit sunt architecto reprehenderit rem corporis, eaque
          voluptate eum perspiciatis ipsam dicta. Sequi omnis, earum illo numquam accusantium iure
          quia exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          laborum sit rerum odio obcaecati eveniet veritatis magni, beatae sapiente similique earum
          voluptas tenetur doloribus eos quaerat, quam deleniti error autem? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Alias assumenda consequuntur possimus quidem iste,
          totam, ipsum pariatur praesentium, nisi illo aspernatur? Atque, modi praesentium aperiam
          facere alias hic animi porro? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Totam quia ipsam enim? Id nulla ullam, quae sunt nemo molestias, sapiente facilis dolorum
          fugit odio magni eos quod, laudantium a odit? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Veniam dignissimos, temporibus sapiente ad in consectetur repellendus,
          voluptas laudantium adipisci laborum, repudiandae porro ducimus quis dolore maiores
          laboriosam magnam ea vero? HOME
        </div>
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
