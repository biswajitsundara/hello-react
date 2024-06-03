function StateProblem() {
  let name = "Guest";

  const handleClick = () => {
    name = "Alia";
    console.log(name);
  };
  return (
    <>
      <h2>{name}</h2>
      <button onClick={handleClick}>Update Name</button>
    </>
  );
}

export default StateProblem;
