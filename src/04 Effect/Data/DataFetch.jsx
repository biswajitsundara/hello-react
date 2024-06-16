import { useEffect, useState } from "react";

function DataFetch() {
  const [person, setPerson] = useState("john");
  const [bio, setBio] = useState(null);

  useEffect(() => {
    async function fetchBio() {
      setBio(null);
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${person}`
      );
      const result = await response.json();
      if (!ignore) {
        setBio(result.users[0]);
      }
    }

    let ignore = false;
    fetchBio();

    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <div>
      <button onClick={() => setPerson("Michael")}>Next User</button>
      <pre>{JSON.stringify(bio, null, 2)}</pre>
    </div>
  );
}

export default DataFetch;
