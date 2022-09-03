import React, { useState } from "react";

import data from "./data";

import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>Questions And Answers About Login</h3>
        <div>
          {questions.map((question) => {
            return <SingleQuestion q={question} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
