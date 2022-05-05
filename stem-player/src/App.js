import React,  { useState } from 'react';



function App() {
  
  const [song, setSong] = useState("/Future712.mp3");

  // let audio = new Audio("/Future712.mp3")
  // let audio2 = new Audio("/FutureWaitForYou.mp3")

  let audio = new Audio(song)
  let audio_on = false

  const start = () => {
    audio.play()
    audio_on = true
  }

  const stop = () => {
    audio.pause()
    audio_on = false
  }



  const onChangeHandler = (e) => {
    if(audio_on){
      audio.pause()
      audio_on = false
    }
    setSong(e.target.value)
  };

  
  return (
    < div >
      <button onClick={start}>Play</button>
      <button onClick={stop}>Stop</button>

      <p>{song}</p>

      <select onChange={onChangeHandler}>
        <option value="/Future712.mp3">song1</option>
        <option value="/FutureWaitForYou.mp3">song2</option>
      </select>

    </div >
  );
}

export default App;
