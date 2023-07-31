import React, { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

import emailjs from 'emailjs-com';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleBlur = (e) => {
    const {target} = e;
    const inputType = target.name;

    if (inputType === "email"){
      if(!validateEmail (email)){
        setErrorMessage("Please enter a valid email address");        
      } else {
        setErrorMessage("");
      }
    } else if (inputType === "userName" && !userName){
      setErrorMessage("Name is required");
    } else if (inputType === "message" && !message){
      setErrorMessage("Message is required");
    }
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
  
    if (!message) {
      setErrorMessage(`Message is required.`);
      return;
    }

    emailjs.send('service_ft6dy7k', 'template_tjfug6p',{
      from_name: userName,
      to_name:'Marco Saverino',
      message: message,
      reply_to: email
    }, 'bvNibq52TWf0f4Du7')
    .then((result) => {
        console.log(result.text);
        setEmailSent(true);
        setUserName("");
        setMessage("");
        setEmail("");
    }, (error) => {
      console.log(error.text);
    });

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.

  
    // If everything goes according to plan, we want to clear out the input after a successful submission.

  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Get In Touch</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>Hello {userName}</h3>
          <p>Want to reach out?</p>
          <address>
            Toronto, Ontario <br />
            E:{" "}
            <a href="mailto://marcosaverino@live.ca">
              marcosaverino@live.ca
            </a>
          </address>
          <p>
            <strong>Can't wait to hear from you!</strong>
          </p>
        </div>

        {/* contact form section  */}
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form" onSubmit={handleFormSubmit}>
            {/* Name */}
            <label htmlFor="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              onBlur={handleBlur}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            {/* Email */}
            <label htmlFor="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              onBlur={handleBlur}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            {/* Message */}
            <label htmlFor="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              onBlur={handleBlur}
              type="text"
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        {emailSent && (
          <div>
            <p className="success-text">Email has been sent!</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
