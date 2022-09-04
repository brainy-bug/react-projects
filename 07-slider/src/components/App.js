// Import React
import React from "react";

// Import Components
import Slider from "./Review";

// Read a Component
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>
            <span className="">/</span> reviews
          </h2>
          <div className="underline"></div>
        </div>
        <Slider />
      </section>
    </main>
  );
}

export default App;
