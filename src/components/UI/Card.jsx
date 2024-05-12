import { useState } from 'react';
import GitHubLogo from '../../assets/github.jsx';
import pwa from '../../../assets/portfolio/pwa.png';
import socialNetwork from '../../../assets/portfolio/social-network-api.png';
import techBlog from '../../../assets/portfolio/tech-blog.png';
import employeeTracker from '../../../assets/portfolio/employee-tracker.png';
import noteTaker from '../../../assets/portfolio/note-taker.gif';
import weather from '../../../assets/portfolio/weather-app.png';

export default function Card({ cards }) {
  // checks if card is hovered
  const [isHovered, setIsHovered] = useState(false);
  // chekcs if deployment link is hovered
  const [isHoveredLive, setIsHoveredLive] = useState(false);
  const { title, link, repo, description } = cards;
  const cardImages = {
    PWA: pwa,
    'Social Network': socialNetwork,
    'Tech Blog': techBlog,
    'Employee Tracker': employeeTracker,
    'Note Taker': noteTaker,
    Weather: weather,
  }[title];

  // sets the card style when hovered
  const overlayStyle = {
    display: isHovered ? 'flex' : 'none',
    backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
    transition: 'background-color 0.3s ease',
  };

  // sets the live link style when hovered
  const liveLinkStyle = {
    border: isHoveredLive ? '1px solid #dee2e6' : '',
    borderRadius: isHoveredLive ? '0.25rem' : '',
  };

  // certain apps do not have a live deployment link, set no border style
  if (link === null) {
    liveLinkStyle.border = '';
  }

  return (
    <div
      className="card text-bg-secondary justify-content-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: '327px',
        objectFit: 'cover',
        // add custom backgroundColor here and remove text-bg-secondary
        // backgroundColor: 'powderblue',
      }}>
      {cardImages && (
        <img
          src={cardImages}
          className="card-img"
          alt={title}
          style={{
            width: '90%',
            alignSelf: 'center',
          }}
        />
      )}
      <div className="card-img-overlay flex-column justify-content-end" style={overlayStyle}>
        <div className="d-flex flex-row justify-content-center align-items-center mb-3">
          <h5 className="card-title px-3 justify-content-end">
            <a
              className="text-decoration-none text-light p-2"
              href={link}
              onMouseEnter={() => setIsHoveredLive(true)}
              onMouseLeave={() => setIsHoveredLive(false)}
              style={liveLinkStyle}
              target="_blank">
              {title}
            </a>
          </h5>
          <a href={repo} target="_blank">
            <GitHubLogo
              className="logo mx-2"
              aria-label="Github logo"
              fill="white"
              height="35"
              width="35"
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
