import React from "react";
import SavvyTechBlog from "../../assets/small/Savvy-Tech-Blog.png";
import PWATextEditor from "../../assets/small/PWA-TextEditor.png";
import weatherApp from "../../assets/small/Weather_App.png";
import EmployeeTracker from "../../assets/small/Employee-Tracker.png";
import Bloodtale from "../../assets/small/BLOODTALE.png";
import kb_fanatics from "../../assets/small/e-commerce-store.png";


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">  
          <h2 className="section-title secondary-border">List of Projects</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
            </div>
            
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://kb-fanatics-2-c059b16fa22f.herokuapp.com/myaccount">
                {" "}
                <img
                  src={kb_fanatics}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="kb_fanatics"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>FB fanatics E-Commerce Site</h4>
              <p>
              a mock online store dedicated to mechanical keyboard enthusiasts. 
              On the frontend, we utilize React and Apollo Client for an intuitive 
              and dynamic user experience. For the backend, we've chosen NodeJS, Apollo Server, 
              and MongoDB, providing a powerful, scalable, and real-time solution.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/rethissunstar/BloodTale_AMurderMystery">
                {" "}
                <img
                  src={Bloodtale}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Bloodtale"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>BloodTale_AMurderMystery</h4>
              <p>
              A murder mystery game. The point of the game is that a Serial killer is coming after you and 
              you will have to find out who he is based on the clues he provides. 
              Each day will present you with a new clue and a new puzzle then by the 
              last day you are tasked with inputting the killers name into a prompt to 
              survive or you die. .{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/MarcoSaverino/Msavvy-Employee-Tracker">
                {" "}
                <img
                  src={EmployeeTracker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Employee-Tracker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Employee-Tracker</h4>
              <p>
              application to manage a company's employee database, 
              using Node.js, Inquirer, and MySQL.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/MarcoSaverino/Msaverino-Weather_App">
                {" "}
                <img
                  src={weatherApp}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="weather-App"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather_App</h4>
              <p>
              This is a weather forecast application{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/MarcoSaverino/Msavvy-PWA-TextEditor">
                {" "}
                <img
                  src={PWATextEditor}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="PWATextEditor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>PWA-TextEditor</h4>
              <p>
              Text editor that runs in the browser that meets the PWA criteria.
              This app is a single-page application that meets the PWA criteria. 
              Additionally, it will feature a number of data persistence techniques 
              that serve as redundancy in case one of the options is not supported 
              by the browser. The application also functions offline.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/MarcoSaverino/Savvy-Tech-Blog">
                {" "}
                <img
                  src={SavvyTechBlog}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Savvy-Tech-Blog"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Savvy-Tech-Blog</h4>
              <p>
              A cms style tech blog site.
              a CMS-style blog site SO THAT 
              I can publish articles, blog posts, and my thoughts and opinions {" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
