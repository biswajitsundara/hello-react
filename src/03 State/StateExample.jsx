import { useState } from "react";

function StateExample() {
  let fruitsdata = [
    { name: "Apple", symbol: "🍏" },
    { name: "Mango", symbol: "🥭" },
    { name: "Banana", symbol: "🍌" },
  ];

  const [fruits, setFruits] = useState(fruitsdata);

  const filterFruits = () => {
    const filteredFruits = fruits.filter((fruit) => fruit.name.startsWith("A"));
    setFruits(filteredFruits);
  };

  return (
    <div>
      {fruits.map((fruit) => (
        <li key={fruit.name}>
          {fruit.name} {fruit.symbol}
        </li>
      ))}
      <button onClick={filterFruits}>Filter</button>
    </div>
  );
}

export default StateExample;
