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

import { Link } from 'react-router-dom';

// Tre olika fallback-bilder, Got this from Chat GPT(I know the pictures change everytime you reload the page)
const fallbackImages = [
  "/images/pexels-joshsorenson-154147.jpg",
  "/images/pexels-mark-angelo-sampan-738078-1587927.jpg",
  "/images/pexels-wendywei-1190298.jpg"
];

// Funktion för att slumpa en av fallback-bilderna
const randomImage = () => fallbackImages[Math.floor(Math.random() * fallbackImages.length)];

const EventItem = ({ item }) => {
  const image = item.imageUrl || randomImage();

  return (
    <Link to={`/events/${item.id}`} className="event-link">
      <div className="event-card">
        <div className="card-header">
          <div className="card-image">
            <img 
              src={image} 
              alt={`Bild för ${item.title || 'event'}`} 
            />
          </div>
        </div>
        <div className="card-body">
          <h6>{item.title}</h6>
          <p>{item.location}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventItem;
