import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import resume from '../assets/nahid-ahmed-resume.docx';
import resumePDF from '../assets/nahid-ahmed-resume.pdf';

export default function Header() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavLink = (path) => {
    navigate(path);
    setCurrentPage(path);
  };

  return (
    <>
      <header className="fixed-top" id="header">
        <nav className="navbar navbar-expand-lg bg-light text-light" id="nav">
          <div className="container-fluid d-flex justify-content-sm-between justify-content-center" id="nav-container">
            <a
              className="navbar-brand"
              // href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavLink('/');
              }}>
              Full Stack Dev | QA Automation Engineer
            </a>
            <div>
              <a className="btn btn-primary mx-1" href={resume} target="_blank">
                <span id="resume" data-desc="Click to Download">
                  Download Resume
                </span>
              </a>
              <a className="btn btn-light mx-1" href={resumePDF} target="_blank">
                <span id="resume" data-desc="Click to Download">
                  Open Resume
                </span>
              </a>
            </div>
            <div className="" id="navbarSupportedContent">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    href="#home-tab-pane"
                    className={`nav-link ${currentPage === 'Home' ? 'active text-dark' : 'text-dark'}`}
                    data-bs-toggle="tab"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLink('/');
                    }}>
                    Home
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#portfolio-tab-pane"
                    className={`nav-link ${currentPage === 'Portfolio' ? 'active text-dark' : 'text-dark'}`}
                    data-bs-toggle="tab"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLink('/portfolio');
                    }}>
                    Portfolio
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#contact-tab-pane"
                    className={`nav-link ${currentPage === 'Contact' ? 'active text-dark' : 'text-dark'}`}
                    data-bs-toggle="tab"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLink('/contact');
                    }}>
                    Contact
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#resume-tab-pane"
                    className={`nav-link ${currentPage === 'Resume' ? 'active text-dark' : 'text-dark'}`}
                    data-bs-toggle="tab"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLink('/resume');
                    }}>
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
