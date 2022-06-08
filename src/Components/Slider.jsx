import { useState } from "react";

function Slider(props) {
  const [name, setName] = useState("Imran");
  const [marks, setMarks] = useState([34, 98, 67, 85]);

  function updatePerson() {
    setName("Imran Khan");
    props.setAge(props.numAge + 1);
  }

  return (
    <div>
      {/* <h2>Name: {name}</h2>
      <h2>Age: {props.numAge}</h2>
      <h2>Address: {props.address}</h2>
      <Test data={props.test} />
      <button onClick={updatePerson}>Update Person</button> */}

      <ul>
        {marks.map((m) => (
          <li>{m}</li>
        ))}
      </ul>
    </div>
  );
}

export default Slider;
