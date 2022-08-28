import React, { useState } from "react";

function App() {
  const title = "stateManagement.TEST";
  const web = "flashmike.com";
  const copyright = 2022;
  //console.log(state);
  //console.log(state[0]);
  const [count, setCount] = useState(0);

  function incNum() {
    setCount(count + 1);
  }

  function decNum() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={incNum}>+</button>
      <button onClick={decNum}>-</button>
      <p>
        &copy; {copyright} | {web} | {title}
      </p>
    </div>
  );
}

export default App;
