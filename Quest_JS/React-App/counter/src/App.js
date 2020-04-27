import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  const handleChangeName = (e) => {
    
    setCount(e.target.value)
    
  }


  return (
    <div className="App App-header">
      <label for="set-value">Entrez une valeur de départ: </label>
      <input value={count} onChange={handleChangeName} type="text" name="set-value" id="setValue" required />
      <p>Le compteur est  à : {count} </p>
      <div className="button-handler">
        <button className="plus-one" id="beep" onClick={() => setCount(count + 1)}>+1</button>
        <button className="minus-one" id="beep" onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </div>
  );
}

export default App;
