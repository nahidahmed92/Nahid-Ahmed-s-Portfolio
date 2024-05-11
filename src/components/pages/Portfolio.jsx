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
      title: 'Social Network',
      link: null,
      repo: 'https://github.com/nahidahmed92/Social-Network-API',
      description: 'Social Network API',
    },
  ];

  return (
    <div
      className="tab-pane fade show active"
      id="home-tab-pane"
      role="tabpanel"
      aria-labelledby="home-tab"
      tabIndex="0">
      <h1>Portfolio</h1>
      <div className="d-flex flex-row">
        {cards.map((card, index) => (
          <Card cards={card} key={index} />
        ))}
      </div>
    </div>
  );
}
