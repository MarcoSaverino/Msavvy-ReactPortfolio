import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p >
            Oh Hey there! My name is Marco Saverino. I have a ton of interests. I like to make electronic music. I enjoy working on my science fiction novel. 
            Going out with my friends and having family dinners with my family are somethings i enjoy doing. I'm also an
            avid soccer and hockey fan. Fitness is also important to me so i try and get as much excersize as possible including
            playing on a recreational mens soccer team. Travel is also a big part of my personality. I've been to over 20 countries 
            from all over the world. Coding is something ive become very passionate about and would love to
            have the opportunity to work in.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
