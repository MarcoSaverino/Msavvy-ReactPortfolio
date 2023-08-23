import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  const [currentTab, handleTabChange] = useState("About");  // Adjusted to have a consistent case

  // Object map to manage tabs and their corresponding components
  const tabComponents = {
    About: <About />,
    Contact: <Contact />,
    Portfolio: <Portfolio />,
    Resume: <Resume />
  };

  // Rendering tab based on the currentTab's value
  const renderTab = () => tabComponents[currentTab] || <About />;

  return (
    <>
      <Helmet>
        <title>Marco Saverino's Portfolio| {currentTab} </title>
      </Helmet>
      
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
      
      <main>{renderTab()}</main>
      
      <Footer />
    </>
  );
}

export default App;
