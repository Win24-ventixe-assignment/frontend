import React from 'react';
import { Link } from 'react-router-dom';

const EventItem = ({ item }) => {
  return (
    <Link to={`/events/${item.id}`} className="event-link">
      <article className="event-card">
        <div className="card-header">
          <div className="card-image">
            <img src="/images/eventimage1.jpg" alt={`Image for ${item.title}`} />
          </div>
          <h2>{item.title}</h2>
        </div>
        <div className="card-body">
          <p>{item.date ? item.date : 'Date coming soon'}</p>
        </div>
      </article>
    </Link>
  );
};

export default EventItem;
