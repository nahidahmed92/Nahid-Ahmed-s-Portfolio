import Card from '../UI/Card.jsx';

export default function Portfolio() {
  const cards = [
    {
      title: 'PWA',
      link: 'https://pwa-text-editor-u1c9.onrender.com',
      repo: 'https://github.com/nahidahmed92/PWA-Text-Editor',
      description: 'Web Text Editor',
    },
    {
      title: 'Social Network',
      link: null,
      repo: 'https://github.com/nahidahmed92/Social-Network-API',
      description: 'Social Network API',
    },
    {
      title: 'Tech Blog',
      link: 'https://tech-blog-2w3g.onrender.com/',
      repo: 'https://github.com/nahidahmed92/Tech-Blog',
      description: 'About Tech by Tech',
    },
    {
      title: 'Employee Tracker',
      link: null,
      repo: 'https://github.com/nahidahmed92/Employee-Tracker',
      description: 'Track Employee Data with Database',
    },
    {
      title: 'Note Taker',
      link: 'https://note-taker-lqxj.onrender.com',
      repo: 'https://github.com/nahidahmed92/Note-Taker',
      description: 'Note taking application using express.js',
    },
    {
      title: 'Weather',
      link: 'https://nahidahmed92.github.io/Weather-App/',
      repo: 'https://github.com/nahidahmed92/Weather-App',
      description: 'Weather Forecast API',
    },
  ];

  return (
    <div
      className="tab-pane fade show active"
      id="portfolio-tab-pane"
      role="tabpanel"
      aria-labelledby="portfolio-tab"
      tabIndex="0">
      <h1>Portfolio</h1>

      <div className="row">
        {cards.map((card, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <Card cards={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
