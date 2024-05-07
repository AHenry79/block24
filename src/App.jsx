import { useState } from "react";
import { puppyList } from "./components/data";
console.log("puppyList: ", puppyList);
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  return (
    <>
      <div>
        {puppies.map((p) => {
          return <p key={p.id}>{p.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
