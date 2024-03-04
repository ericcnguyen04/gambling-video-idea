import './App.css';
import Navbar from './Components/Navbar';

import { useState } from 'react';

function App() {

  const [balance, useBalance] = useState(5000)
  const [win, useWin] = useState(95)

  const handleCoinToss = () => {
    const chance = (Math.random() * 100)
    console.log(Math.round(chance))

    if (chance > win) {
      console.log("You lose")
    } else {
      console.log("You win")
    }
  }

  return (
    <div className="App">
      <Navbar/>

      coin toss
      <div className='balance'>
        <h1>Balance: {balance}</h1>
      </div>

      <button onClick={handleCoinToss}>Heads</button>
      <button onClick={handleCoinToss}>Tails</button>
    </div>
  );
}

export default App;
