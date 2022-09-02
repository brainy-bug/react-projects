import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, usePeople] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>{`${people.length} birthdays today`}</h3>
        <List allPeople={people} />
        <button onClick={() => usePeople([])}>Clear All</button>
      </div>
    </main>
  );
}

export default App;
