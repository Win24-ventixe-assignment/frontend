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
        </div>
        <div className="card-body">
          <h6>{item.id}</h6>
          <p>{item.date ? item.date : 'Date coming soon'}</p>
        </div>
      </div>
    </Link>
  );
}; 

export default EventItem; */


 /*const EventItem = () => {
  

  return (
    
     <div className="event-card">
       <div className="card-header">
         <div className="card-image">
           <img src="/images/pexels-joshsorenson-154147.jpg" alt="eventimage" />
         </div>
       </div>
       <div className="card-body">
        <h6>KONSERT</h6>
         <p>konsert i göteborg</p>
      </div>
    </div>
    
   );
 };

 export default EventItem;*/
import React from 'react';
import { Link } from 'react-router-dom';

const EventItem = ({ item }) => {
  return (
    <Link to={`/events/${item.id}`} className="event-link">
      <div className="event-card">
        <div className="card-header">
          <div className="card-image">
            <img 
              src={item.imageUrl || "/images/pexels-joshsorenson-154147.jpg"} 
              alt={`Bild för ${item.title || 'event'}`} 
            />
          </div>
        </div>
        <div className="card-body">
          <h6>{item.title || 'KONSERT'}</h6>
          <p>{item.location || 'konsert i göteborg'}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventItem;