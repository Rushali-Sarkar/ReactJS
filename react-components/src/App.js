import React from 'react';
import './App.css';
import logo from "./logo.svg";

function Image() {
  return(
    <div>
    <h1>Welcome to React</h1>
    <img src={logo} alt="ReactJS logo"/>
    </div>);
}

function Header() {
  return (
    <header>
      <h2>Hi I am currently learning to use components</h2>
    </header>
    );
}

function Main() {
  return (
    <section>
      <h3>Components are nothing but functions that render a user interface </h3>
      </section>
    );
}

function Footer() {
  return (
    <footer>
    <h4> Here I have created three components to make three sections </h4>
    </footer>
    );
}

function CustomName(props) {
  return(
    <div>
    <p>I am just saying out loud my name.</p>
    <p>My Name is {props.name}</p>
    <p>In Reality {props.name} is learning to use the props</p>
    <p>The current year is {props.year} </p>
    <p>Some of {props.name}'s favourite tools are</p>
    <ul>
    {props.tools.map((tool) => 
      (<li key={tool.id}>{tool.title}</li>))
    }
    </ul>
    </div>
    );
}

const favourite_tools = ["Haskell", "React", "C++", "Python"];
const tools_objects = favourite_tools.map((tool, index) => ({id: index, title: tool}));
function App() {
  return (
    <div className="mypage">
    <Image />
    <Header />
    <Main />
    <Footer />
    <CustomName name="Rushali"  year={new Date().getFullYear()} tools={tools_objects}/>
    </div>
    );
}

export default App;
