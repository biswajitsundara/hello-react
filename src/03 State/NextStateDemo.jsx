import { useState } from "react";

function NextStateDemo() {
  const [counter, setCounter] = useState(0);

  const handleIncrement1 = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  const handleIncrement2 = () => {
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement1}>Click</button>
      <button onClick={handleIncrement2}>Click</button>
    </div>
  );
}

export default NextStateDemo;
