import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";
import Bookstore from "./Bookstore";

// React component names must start with a capital letter, like StatusBar and SaveButton.
function App() {
  const actors = ["Chirs", "Peter", "Kristian", "Tom Cruise", "bale"];
  const singers = [
    { id: 1, name: "kygo", age: 35 },
    { id: 2, name: "avicii", age: 24 },
    { id: 3, name: "bruno", age: 37 },
    { id: 4, name: "sea feast", age: 23 },
    { id: 5, name: "sia", age: 32 },
  ];

  const books = [
    { id: 1, name: "physics", price: 100 },
    { id: 2, name: "Math", price: 120 },
    { id: 3, name: "Chemistry", price: 130 },
    { id: 4, name: "Biology", price: 150 },
  ];
  return (
    <>
      <h1>Vite + React</h1>


      <Bookstore books={books}></Bookstore>

      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
      {/* <Todo task="Learn react" isDone= {false}></Todo>
      <Todo task="Learning jsx" isDone= {true}></Todo> */}

      {/* <Person></Person> */}
      {/* bangla system of passing props to Device component */}
      {/* <Student name="Ted" age="18" grade="12"></Student>
      <Student name="Fed" age="17" grade="11"></Student>
      <Student name="Meda" age="17"></Student>
      <Developer></Developer>

      <Device name="Laptop" monitor="16 inch"></Device> */}
    </>
  );
}

function Person() {
  // const name = 'Han';
  // const age = 27;
  // const city = 'Tokyo';
  const person = { name: "Han", age: "27", city: "Tokyo" };
  return (
    <h2>
      My name is {person.name}. I am {person.age} years old.
    </h2>
  );
}

const { name, age, grade } = { name: "Sam", age: 16, grade: 10 };

function Student({ name, age, grade = 0 }) {
  return (
    // add style to app.css which is .student class
    <div className="student">
      <h3>This is a student</h3>
      <p>Name: {name} </p>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}
function Developer() {
  // we can use direct style - style = "" or style class.
  const developerStyle = {
    padding: "20px",
    border: "2px solid tomato",
    borderRadius: "20px",
    marginTop: "20px",
  };
  return (
    <div style={developerStyle}>
      <h3>Web Developer</h3>
      <p>IDE - Visual Studio Code</p>
      <p>Tools - HTML,CSS,Tailwind,javaScript,React</p>
    </div>
  );
}

// props - properties
function Device(props) {
  return (
    <div>
      <h4>
        My device is {props.name}. I have a {props.monitor} monitor
      </h4>
    </div>
  );
}

export default App;
