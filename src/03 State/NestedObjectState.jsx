import { useState } from "react";

function NestedObjectState() {
  const initialData = {
    name: "Biswajit",
    address: {
      street: "10 Park street",
      city: "Bangalore",
      pin: "3211",
    },
  };

  const [person, setPerson] = useState(initialData);

  const handleNameChange = (value) => {
    setPerson({
      ...person,
      name: value,
    });
  };

  const handleCityChange = (value) => {
    setPerson({
      ...person,
      address: {
        ...person.address,
        city: value,
      },
    });
  };

  return (
    <>
      <h1>Name: {person.name}</h1>
      <h1>City:{person.address.city}</h1>
      <button onClick={() => handleNameChange("John")}>Change Name</button>
      <button onClick={() => handleCityChange("Mumbai")}>Change City</button>
    </>
  );
}

export default NestedObjectState;
