import { Link } from 'react-router-dom';

const Nav = () => { 
  return (
    <nav>
      <div className="nav-logo">
        <Link className="ventixe-logotype" to="/">
          <img src="/images/ventrixe-icon.svg" alt="Ventixe logotype" />
        </Link>
        <h4>Ventixe</h4>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/">
          <i className="bi bi-ticket"></i>
          <span>Events</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;


