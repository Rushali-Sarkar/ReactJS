import React, { useState, useEffect } from 'react';
import './App.css';


function SecretComponent() {
  return (
    <h1>This is a piece of information for authorised users only</h1>
  );
}

function RegularComponent() {
  return (
    <h1>This is a piece of information for everyone</h1>
  );
}

const [first, second, third, fourth] = ["React", "Machine Learning", "Game Development", "App Development"];

function App({authorised}) {
  const [emotion, setEmotion] = useState("Happy");
  const [secondaryEmotion, setSecondaryEmotion] = useState("Tired");
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    console.log(`It's ${emotion} around the air`);
  }, [emotion]);
  useEffect(() => {
    console.log(`The secondary feeling is ${secondaryEmotion}`); 
  }, [secondaryEmotion]);  
  return (
    <React.Fragment>
      {authorised ? <SecretComponent /> : <RegularComponent />}
      <p>My Learning checklist includes: </p>
      <ul>
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
        <li>{fourth}</li>
      </ul>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <h1>My current Emotion is {emotion} and {secondaryEmotion}.</h1>
      <div>
      <button onClick={() => setEmotion("Happy")}>Make Happy</button>
      <button onClick={() => setEmotion("Sad")}>Make Sad</button>
      <button onClick={() => setEmotion("Excited")}>Make Excited</button>
      <button onClick={() => setEmotion("Frustrated")}>Make Frustrated</button>
      <button onClick={() => setEmotion("Amazed")}>Make Amazed</button>
      </div>
      <br/>
      <div>
      <button onClick={() => setSecondaryEmotion("Tired")}>Make Tired</button>
      <button onClick={() => setSecondaryEmotion("Exhausted")}>Make Exhausted</button>
      <button onClick={() => setSecondaryEmotion("Confused")}>Make Confused</button>
      <button onClick={() => setSecondaryEmotion("Clueless")}>Make Clueless</button>
      <button onClick={() => setSecondaryEmotion("Energised")}>Make Energised</button>
      </div>
    </React.Fragment>
  );
}

export default App;
