import React, { useState } from "react";

function InitializeDemo() {
  const setInitialMessage = () => {
    console.log("Initial message");
  };

  const [messageFunction, setMessageFunction] = useState(setInitialMessage);

  const messageHi = () => {
    console.log("Hi");
  };

  const messageHello = () => {
    console.log("Hello");
  };

  const updateMessage1 = () => {
    setMessageFunction(() => {
      console.log("Hey");
    });
  };

  const updateMessage2 = () => {
    setMessageFunction(messageHi);
  };

  const updateMessage3 = () => {
    setMessageFunction(messageHello);
  };

  return (
    <div>
      {messageFunction}  
      <button onClick={updateMessage1}>Update Message1</button>
      <button onClick={updateMessage2}>Update Message2</button>
      <button onClick={updateMessage3}>Update Message3</button>
    </div>
  );
}

export default InitializeDemo;
