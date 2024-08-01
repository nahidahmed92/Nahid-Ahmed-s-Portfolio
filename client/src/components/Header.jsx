import { useState } from 'react';
// // import About from './pages/About.jsx';
// // import Portfolio from './pages/Portfolio.jsx';
// // import Contact from './pages/Contact.jsx';
// // import Resume from './pages/Resume.jsx';

// export default function Header() {
//   const [currentPage, setCurrentPage] = useState('Home');

//   const handleNavLink = (targetTab) => {
//     // Update URL
//     window.history.pushState(null, null, targetTab);
//     setCurrentPage(targetTab);
//   };

//   // const handlePageChange = (page) => {
//   //   setCurrentPage(page);
//   // };

//   // const renderPage = () => {
//   //   if (currentPage === 'Home') {
//   //     return <About handlePageChange={handlePageChange} />;
//   //   }
//   //   if (currentPage === 'Portfolio') {
//   //     return <Portfolio handlePageChange={handlePageChange} />;
//   //   }
//   //   if (currentPage === 'Contact') {
//   //     return <Contact handlePageChange={handlePageChange} />;
//   //   }
//   //   if (currentPage === 'Resume') {
//   //     return <Resume handlePageChange={handlePageChange} />;
//   //   }
//   // };

//   return (
//     <>
//       <header className="fixed-top" id="header">
//         <nav className="navbar navbar-expand-lg bg-secondary text-light">
//           <div className="container-fluid d-flex justify-content-between">
//             <a className="navbar-brand" href="/">
//               Full Stack Developer | QA Automation Engineer
//             </a>
//             {/* <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button> */}
//             <div className="" id="navbarSupportedContent">
//               <ul className="nav nav-tabs" id="myTab" role="tablist">
//                 <li className="nav-item" role="presentation">
//                   <a
//                     href="#home-tab-pane"
//                     className={`nav-link ${currentPage === 'Home' ? 'active text-dark' : 'text-dark'}`}
//                     data-bs-toggle="tab"
//                     onClick={() => handleNavLink('Home')}>
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <a
//                     href="#portfolio-tab-pane"
//                     className={`nav-link ${currentPage === 'Portfolio' ? 'active text-dark' : 'text-dark'}`}
//                     data-bs-toggle="tab"
//                     onClick={() => handleNavLink('Portfolio')}>
//                     Portfolio
//                   </a>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <a
//                     href="#contact-tab-pane"
//                     className={`nav-link ${currentPage === 'Contact' ? 'active text-dark' : 'text-dark'}`}
//                     data-bs-toggle="tab"
//                     onClick={() => handleNavLink('Contact')}>
//                     Contact
//                   </a>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <a
//                     href="#resume-tab-pane"
//                     className={`nav-link ${currentPage === 'Resume' ? 'active text-dark' : 'text-dark'}`}
//                     data-bs-toggle="tab"
//                     onClick={() => handleNavLink('Resume')}>
//                     Resume
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
//       <div className="tab-content d-flex justify-content-center text-light mx-4 mt-5 mb-4 py-5" id="myTabContent">
//         {/* {renderPage()} */}
//       </div>
//     </>
//   );
// }

import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavLink = (path) => {
    navigate(path);
    setCurrentPage(path);
  };

  return (
    <>
      <header>
        {/* Navigation Links */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavLink('/');
          }}>
          Home
        </a>
        <a
          href="/portfolio"
          onClick={(e) => {
            e.preventDefault();
            handleNavLink('/portfolio');
          }}>
          Portfolio
        </a>
        <a
          href="/contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavLink('/contact');
          }}>
          Contact
        </a>
        <a
          href="/resume"
          onClick={(e) => {
            e.preventDefault();
            handleNavLink('/resume');
          }}>
          Resume
        </a>
      </header>
    </>
  );
}
