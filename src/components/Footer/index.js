import React from "react";
import { VscGithubAlt } from "react-icons/vsc";

function Footer() {
  return (
    <footer>
      <h2>Made by Marco Saverino</h2>
      <ul>
        <a href="https://github.com/MarcoSaverino" target="_blank" rel="noopener noreferrer">
          <li className="logo">
            <VscGithubAlt />
          </li>
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
