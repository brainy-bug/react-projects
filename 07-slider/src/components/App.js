// Import React
import React, { useEffect, useState } from "react";

import data from "../data";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

// Read a Component
function App() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, data]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
          <div className="underline"></div>
        </div>
        <div className="section-center">
          {data.map((people, personIndex) => {
            const { id, name, title, quote, image } = people;
            let position = "nextSlide";

            if (personIndex === index) position = "activeSlide";
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === data.length - 1)
            )
              position = "lastSlide";

            return (
              <article key={id} className={position}>
                <img className="person-img" src={image} alt={name} />
                <h4>{name}</h4>
                <p>{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon"></FaQuoteRight>
              </article>
            );
          })}
          <button
            className="prev"
            onClick={() => {
              setIndex(index - 1);
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next"
            onClick={() => {
              setIndex(index + 1);
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </section>
    </main>
  );
}
export default App;
