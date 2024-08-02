import { Link } from 'react-router-dom';

import '../../NotFound.css';

export default function NotFound() {
  return (
    <div className="tab-content d-flex justify-content-center text-light mx-4 mt-5 mb-4 py-5" id="myTabContent">
      <div className="not-found">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
