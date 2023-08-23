import React from "react";
import { VscGithubAlt } from "react-icons/vsc";

function Footer() {
  return (
    <footer>
      <h2>Made by Marco Saverino</h2>
      <a 
         href="https://github.com/MarcoSaverino" 
         target="_blank" 
         rel="noopener noreferrer"
         className="logo"
      >
        <VscGithubAlt />
      </a>
    </footer>
  );
}

export default Footer;
