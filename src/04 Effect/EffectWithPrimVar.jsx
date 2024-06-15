import { useEffect } from "react";

function EffectWithPrimVar() {
  let greet = "Hello";

  const handleClick = () => {
    greet = "hi";
    console.log(greet);
  };

  const a = useEffect(() => {
    console.log(greet);
  }, [greet]);

  console.log(a);
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default EffectWithPrimVar;
