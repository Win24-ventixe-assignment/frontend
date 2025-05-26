import React from 'react';
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
          <h2>{item.id}</h2>
          <p>{item.date ? item.date : 'Date coming soon'}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventItem;


// const EventItem = () => {
  

//   return (
//     <div className="event-card">
//       <div className="card-header">
//         <div className="card-image">
//           <img src="/images/pexels-joshsorenson-154147.jpg" alt="eventimage" />
//         </div>
//         <h2>KONSERT</h2>
//       </div>
//       <div className="card-body">
//         <p>konsert i göteborg</p>
//       </div>
//     </div>
//   );
// };

// export default EventItem;
