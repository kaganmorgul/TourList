import React from "react";
import Tour from "./Tour";
import "./tours.css";

function Tours({ tours, removeTourFromList }) {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour
            key={tour.id}
            {...tour}
            removeTourFromList={removeTourFromList}
          />
        ))}
      </div>
    </section>
  );
}

export default Tours;
