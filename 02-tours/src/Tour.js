import React, { useState } from "react";

const Tour = ({ singleTour, removeTour }) => {
  const [readmore, setReadmore] = useState(false);

  const { id, info, name, image, price } = singleTour;

  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadmore(!readmore);
            }}
          >
            {readmore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
