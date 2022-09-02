import React from "react";

// import components
import Tour from "./Tour";

// Read a component
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      {tours.map((tour) => {
        return (
          <div key={tour.id}>
            <Tour singleTour={tour} removeTour={removeTour} />
          </div>
        );
      })}
    </section>
  );
};

export default Tours;
