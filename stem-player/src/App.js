import React,  { useState } from 'react';



function App() {
  
  const [song, setSong] = useState("/Future712.mp3");

  // let audio = new Audio("/Future712.mp3")
  // let audio2 = new Audio("/FutureWaitForYou.mp3")

  let audio = new Audio(song)

  const start = () => {
    audio.play()
  }

  const stop = () => {
    audio.pause()
  }

  


  return (
    < div >
      <button onClick={start}>Play</button>
      <button onClick={stop}>Stop</button>

      <p>{song}</p>

      <select onChange={(e) => setSong(e.target.value)}>
        <option value="/Future712.mp3">song1</option>
        <option value="/FutureWaitForYou.mp3">song2</option>
      </select>

    </div >
  );
}

export default App;
