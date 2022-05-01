import React, { useContext } from "react";
import Card from "./components/Card";
import { ThemeContext } from "./context/ThemeContext";
import Persons from "./services/persons.json";
import "./assets/styles.css";
import Button from "./components/Button";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <h1>Phonebook</h1>
      <div className="container ">
        {Persons.map((person) => (
          <Card key={person.id} {...person} />
        ))}
      </div>
      <Button />
    </div>
  );
};

export default App;
