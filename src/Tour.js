import React, { useState } from "react";
import "./tour.css";

function Tour({ id, image, info, price, name, removeTourFromList }) {
  const [readmore, setReadmore] = useState(false);
  return (
    <article className="single-tour">
      <div className="tour-image">
        <img src={image} alt={name} />
      </div>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <div className="info-text">
          <p>{readmore ? info : `${info.substring(0, 200)}...`}</p>
          <button onClick={() => setReadmore(!readmore)}>
            {readmore ? "Hidden" : "Read More"}
          </button>
        </div>
        <button onClick={() => removeTourFromList(id)} className="delete-btn">
          not interest
        </button>
      </footer>
    </article>
  );
}

export default Tour;
