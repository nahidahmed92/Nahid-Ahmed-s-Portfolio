import GitHubLogo from '../assets/github.jsx';
import linkedinLogo from '../assets/linkedin.svg';
import mediumLogo from '../assets/medium.svg';

export default function Footer() {
  return (
    <footer className="footer fixed-bottom bg-light opacity-75 mt-auto py-2">
      <div className="container text-center">
        <div>
          <a href="https://github.com/nahidahmed92" target="_blank">
            <GitHubLogo className="logo mx-2" alt="github logo" width="30" height="30" fill="black" />
          </a>
          <a href="https://linkedin.com/in/nahidahmed92" target="_blank">
            <img src={linkedinLogo} className="logo mx-2" alt="linkedIn logo" width="30" height="30" />
          </a>
          <a href="https://medium.com/@npahmed92" target="_blank">
            <img src={mediumLogo} className="logo mx-2" alt="medium logo" width="30" height="30" />
          </a>
        </div>
      </div>
    </footer>
  );
}
