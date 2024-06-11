import { useState } from "react";
import React from "react";

function UndefinedState() {
  const [person, setPerson] = useState({name:'bis'});

  return (
    <>
      <h1>Name is {person?.name}</h1>
    </>
  );
}

export default UndefinedState;
