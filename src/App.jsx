import { useState } from "react";
const data = require('./Lines.json');

function App() {
  const [line, setLine] = useState(data[(Math.floor(Math.random() * data.length))]);
  const [click, setClick] = useState(false);

  const handleOnClick = () => {
    setClick(false);
    setLine(data[(Math.floor(Math.random() * data.length))]);
  }

  const handleCpClick = () => {
    let text = line.message;
    setClick(true);
    console.log(text)
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="App">
      <div className="main">
        <p>{line.message}</p>
        <div>
          <button onClick={handleOnClick}>Mja Nhi Aya</button>
          <button className={click?"coppied" : ""} onClick={handleCpClick}>{click ? "Coppied" : "Click To Copy"}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
