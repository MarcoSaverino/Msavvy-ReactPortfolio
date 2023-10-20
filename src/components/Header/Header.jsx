import React from "react";
import Nav from "../Nav";

function Header({ currentTab, handleTabChange }) {
  return (
    <header className="flex-row px-1">
      <h1>Marco Saverino's Portfolio</h1>
      
      <Nav currentTab={currentTab} handleTabChange={handleTabChange} />
      
      <div className="hero">
        <h2>Welcome</h2>
        <p>To my Portfolio!</p>
      </div>
    </header>
  );
}

export default Header;
