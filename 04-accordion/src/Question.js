import React, { useState } from "react";

// Import icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ q }) => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <>
      <article className="question">
        <header>
          <h4>{q.title}</h4>
          <button className="btn" onClick={() => setIsClosed(!isClosed)}>
            {isClosed ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </button>
        </header>
        {isClosed || <p>{q.info}</p>}
      </article>
    </>
  );
};

export default Question;
