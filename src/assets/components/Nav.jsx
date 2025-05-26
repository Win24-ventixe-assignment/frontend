import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className="nav-logo">
      <a className="ventixe-logotype" href="#">
        <img src="/images/ventrixe-icon.svg" alt="Ventixe logotype" /></a>
        <h4>Ventixe</h4>
      </div>
        <div className="nav-links">
          <a className="nav-link" href="#">
            <i class="bi bi-ticket"></i>
            <span>Events</span>
          </a>
        
      </div>
    </nav>
  );
};

export default Nav;

