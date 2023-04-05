import React from "react";
import ReactDOM from "react-dom";

const Pet = (Props) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, Props.name),
    React.createElement("h2", {}, Props.animals),
    React.createElement("h2", {}, Props.breed)
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Fadel Ellah ERRAMI"),
    React.createElement(Pet, {
      name: "Luna",
      animals: "Dog",
      breed: "Havaness",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animals: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animals: "Cat",
      breed: "Mixed",
    }),
  ]);
};
const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
