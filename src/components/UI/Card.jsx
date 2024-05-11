import { useState } from 'react';
import GitHubLogo from '../../assets/github.jsx';
import pwa from '../../../assets/portfolio/pwa.png';
import socialNetwork from '../../../assets/portfolio/social-network-api.png';
import techBlog from '../../../assets/portfolio/tech-blog.png';

export default function Card({ cards }) {
  const [isHovered, setIsHovered] = useState(false);
  const { title, link, repo, description } = cards;
  const cardImages = {
    PWA: pwa,
    'Social Network': socialNetwork,
    'Tech Blog': techBlog,
  }[title];

  const overlayStyle = {
    display: isHovered ? 'flex' : 'none',
    backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
    transition: 'background-color 0.3s ease',
  };

  const linkStyle = {
    textDecoration: isHovered ? 'none' : 'underline',
  };

  /**
   * dynamically add:
   * h5 title - title of project
   * link
   * description
   */

  return (
    <div
      // className=" card text-bg-secondary justify-content-center col-12 col-md-6 col-lg-4 m-3"
      className=" card text-bg-secondary justify-content-center col-4 m-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // style={{
      //   backgroundColor: 'blue',
      // }}
    >
      {cardImages && <img src={cardImages} className="card-img" alt={title} />}
      <div className="card-img-overlay flex-column justify-content-end" style={overlayStyle}>
        <div className="d-flex flex-row justify-content-center align-items-center mb-3">
          <h5 className="card-title px-3 justify-content-end">
            <a className="text-decoration-none text-light" href={link} target="_blank">
              {title}
            </a>
          </h5>
          <a href={repo} target="_blank">
            <GitHubLogo
              width="35"
              height="35"
              fill="white"
              className="logo mx-2"
              aria-label="Github logo"
            />
          </a>
        </div>
        <p className="card-text d-flex justify-content-center">
          <small>{description}</small>
        </p>
      </div>
    </div>
  );
}
