import { useState } from "react";

function Restaurants() {
  const restlist = ["Hilton", "Mariot", "Taj"];

  const rest = useState(restlist);

  console.log(rest);
  return (
    <>
      <p>{rest[0]}</p>
      <p>{console.log(rest[1])}</p>
    </>
  );
}

export default Restaurants;
