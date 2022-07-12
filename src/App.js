import { useState } from "react"


function App() {
  const [number, setNumber] = useState(0);
  return (
    <>

      <h1>{number}</h1>
      <h2 className={number >= 0 ? "positive" : "negative"}>
        {number >= 0 ? "Positivo" : "Negativo"}
      </h2>
      <input
        type="number"
        name="number"
        value={number}
        onChange={({target}) => setNumber(parseInt(target.value))}
      />

      {/*Tabuada*/}
      <ul>
        {Array.from({length: 11}).map((_, i)=>(
        <li key = {i}>
          {number} x {i} = {number * i}
        </li>
      ))}
      </ul>
    </>
  );
}

export default App;
