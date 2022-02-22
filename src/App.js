import {useEffect, useState, useRef} from "react";
import './App.css';
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [showDiv, setShowDiv] = useState(true);

  return (
    <div className="App">
     <Input showDiv={showDiv} />
     <Button />
    </div>
  );
}

export default App;
