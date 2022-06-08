import { useState } from "react";

function Footer() {
  const [person, setPerson] = useState({
    name: "No name yet",
    Age: 0,
  });

  const updatePerson = () => {
    setPerson({ name: "imran khan", Age: person.Age + 25 });
  };

  return (
    <div>
      <h2>name : {person.name}</h2>
      <h2>Age :{person.Age}</h2>
      <button onClick={updatePerson}>Update Person</button>
    </div>
  );
}

export default Footer;
