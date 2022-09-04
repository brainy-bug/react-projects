import React, { useState, useEffect } from "react";

import { FaAngleDoubleRight } from "react-icons/fa";

// Import components
import Loading from "./Loading";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchJobs = async () => {
    // setLoading(true)
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  const { title, company, duties, dates } = jobs[index];

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map(({ company, id }, i) => {
              return (
                <button
                  className={`job-btn ${index === i ? "active-btn" : null}`}
                  key={id}
                  onClick={() => {
                    setIsActive(!isActive);
                    setIndex(i);
                  }}
                >
                  {company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{dates}</p>
            {duties.map((duty) => {
              return (
                <>
                  <div className="job-desc">
                    <div className="job-icon">
                      <FaAngleDoubleRight />
                    </div>
                    <p>{duty}</p>
                  </div>
                </>
              );
            })}
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
