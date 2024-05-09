import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-secondary fixed-bottom">
      <div className="container text-center">
        {/* <span className="text-light">Hello World</span> */}
        <div>
          <a href="https://github.com/nahidahmed92" target="_blank">
            <img src={githubLogo} className="logo mx-2" alt="Github logo" width="35" height="35" />
          </a>
          <a href="https://linkedin.com/in/nahidahmed92" target="_blank">
            <img
              src={linkedinLogo}
              className="logo react mx-2"
              alt="LinkedIn logo"
              width="35"
              height="35"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
