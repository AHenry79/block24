import { useState } from "react";
import { puppyList } from "./components/data";
console.log("puppyList: ", puppyList);
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  return (
    <>
      <div>
        {puppies.map((p) => {
          return (
            <p
              key={p.id}
              onClick={() => {
                setFeatPupId(p.id);
              }}
              id={"names"}
            >
              {p.name}
            </p>
          );
        })}
        {featPupId && (
          <div id={"feat"}>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
