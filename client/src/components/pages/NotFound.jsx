import { Link } from 'react-router-dom';

import '../../NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
}
