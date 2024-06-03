import { useState } from "react";

function StateSolution() {
  const [name, setName] = useState("Guest");

  const handleClick = () => {
    setName("Alia");
    //name = "Alia";
    console.log(name);
  };
  return (
    <>
      <h2>{name}</h2>
      <button onClick={handleClick}>Update Name</button>
    </>
  );
}

export default StateSolution;
