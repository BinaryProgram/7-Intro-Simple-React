import { useEffect, useState } from "react";
import User from "./User";
export default function Users() {
  // initially empty array
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div style={{ border: "2px solid tomato", borderRadius: "20px" }}>
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
}
/*
    - useState initially hold empty array
    - useEffect with callback and dependency array
    - use fetch to load data from api
*/

/*
     1. state to hold data
     2. use effect with dependency array
     3. use fetch to load data
     4. set loaded data to the state
     5. display data on the component

*/

/*
    * Any screen update in a react app happens in three steps -
        1. trigger
        2. render
        3. commit
      React doesn't not touch the dom if the rendering result is
      the same as last time.  

*/