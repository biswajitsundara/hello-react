import { useEffect, useState } from "react";

function EffectDemo() {
  const [counter, setCounter] = useState(0);

  console.log("Component Loaded");

  useEffect(() => {
    console.log("use effect called for.." +counter);

    return () => {
      console.log("clean up is called.." +counter);
    };
  });

  return <>
     <h1>Hello</h1>
     <button onClick={()=>setCounter(counter+1)}>Click</button>
  </>
}

export default EffectDemo;
