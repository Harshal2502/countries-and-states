import React from "react";
import Country from "./Country";
import './App.css'

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <Country />
    </div>
  );
}

export default App;
