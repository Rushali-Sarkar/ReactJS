import React, { useState, useEffect, useReducer } from "react";
import './App.css';
import restaurant from "./restraunt.jpg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={restaurant} height={200} alt="chef with restaurant menu"/>
      <ul style={{textAlign: "left"}}>
      {props.dishes.map((dish) => 
      (<li key={dish.id}>{dish.title}</li>
      ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return(
    <footer>
      <p>Copyright {props.year}.</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Minestrone"
];

const dish_objects = dishes.map((dish, i) => ({id: i, title: dish}));

function SecretComponent() {
  return (
    <h1>Secret Information for Authorized Users Only</h1>
  );
}

function RegularComponent() {
  return (
    <h1>Everyone can see this component</h1>
  );
}

function App({authorized}) {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  console.log(emotion);
  useEffect(() => {
    console.log(`It's ${emotion} around here!`)
  }, [emotion]);
  useEffect(() => {
    console.log(`It's ${secondary} around here!`)
  }, [secondary]);
  const [checked, setChecked] = useState(false);
  function toggle() {
    setChecked((checked) => !checked);
  }
  const [check, toggleCheck] = useReducer((check) => !check, false);
  return(
      <>
      <h1>Current Emotion is {emotion} and {secondary}.</h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
      <button onClick={() => setSecondary("tired")}>Tire</button>
      <button onClick={() => setSecondary("crabby")}>Crab</button>
      <button onClick={() => setSecondary("exhausted")}>Exhaust</button>
      <input type="checkbox" value={checked} onChange={toggle}/>
      <p>{checked ? "checked": "not checked"}</p>
      <input type="checkbox" value={check} onChange={toggleCheck} />
      <p>{check ? "checked": "not checked"}</p>
      {authorized ? <SecretComponent />: <RegularComponent />}
      <div className="App">
        <Header name="Horacio"/>
        <Main adjective="amazing" dishes={dish_objects}/>
        <Footer year={new Date().getFullYear()}/>
      </div>
      </>
  );
}

export default App;
