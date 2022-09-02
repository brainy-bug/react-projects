import React from "react";

const List = ({ allPeople }) => {
  const extendedLists = allPeople.map((person) => {
    return (
      <div key={person.id} className="person">
        <img src={person.image} alt={person.name} />
        <div>
          <h4>{person.name}</h4>
          <p>{person.age} years</p>
        </div>
      </div>
    );
  });

  return <>{extendedLists}</>;
};

export default List;
