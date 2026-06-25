import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";

function MainLayout() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const users = ["Vaibhav", "Gaurav", "Himanshu"];

  const filteredUsers = useMemo(() => {
    console.log("Filtering users........");
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ul>
        {filteredUsers.map((user) => {
          return <li key={user}>{user}</li>;
        })}  
      </ul>
    </div>
  );
}
export default MainLayout;


// A -> B