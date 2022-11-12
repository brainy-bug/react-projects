import React, { useState, useEffect } from "react";
import { icons } from "./data";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const {
      phone,
      email,
      dob: { age },
      login: { password },
    } = person;

    const { large: image } = person.picture;
    const { first, last } = person.name;
    const {
      street: { number, name },
    } = person.location;

    const newPerson = {
      image,
      age,
      password,
      phone,
      email,
      street: `${number} ${name}`,
      name: `${last} ${first}`,
    };
    setPerson(newPerson);
    setLoading(false);
    setTitle("name");
    setValue(newPerson.name);
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            {icons.map(({ label, icon }) => {
              return (
                <button
                  key={label}
                  className="icon"
                  data-label={label}
                  onMouseOver={handleValue}
                >
                  {icon}
                </button>
              );
            })}
          </div>
          <button className="btn" type="button" onClick={getPerson}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
