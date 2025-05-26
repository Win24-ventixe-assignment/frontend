/*import React from 'react';
import { Link } from 'react-router-dom';

const EventItem = ({ item }) => {
  return (
    <Link to={`/events/${item.id}`} className="event-link">
      <div className="event-card">
        <div className="card-header">
          <div className="card-image">
            <img src="/images/eventimage1.jpg" alt={`Image for ${item.title}`} />
          </div>
          <h2>{item.title}</h2>
        </div>
        <div className="card-body">
          <p>{item.date ? item.date : 'Date coming soon'}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventItem;*/
import React from 'react';

const EventItem = () => {
  

  return (
    <div className="event-card">
      <div className="card-header">
        <div className="card-image">
          <img src="/images/pexels-joshsorenson-154147.jpg" alt="eventimage" />
        </div>
        <h2>KONSERT</h2>
      </div>
      <div className="card-body">
        <p>konsert i göteborg</p>
      </div>
    </div>
  );
};

export default EventItem;
