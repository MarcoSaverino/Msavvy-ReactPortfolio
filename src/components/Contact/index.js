import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from 'emailjs-com';

function Contact() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [loading, setLoading] = useState(false);  // Added state for loader indication

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "userName":
                setUserName(value);
                break;
            default:
                setMessage(value);
                break;
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (name === "email" && !validateEmail(value)) {
            setErrorMessage("Please enter a valid email address");
        } else if (name === "userName" && !value) {
            setErrorMessage("Name is required");
        } else if (name === "message" && !value) {
            setErrorMessage("Message is required");
        } else {
            setErrorMessage("");
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateEmail(email) || !userName || !message) {
            setErrorMessage("Please ensure all fields are filled correctly.");
            return;
        }

        // Provide feedback that email is being sent
        setLoading(true);

        try {
            await emailjs.send('service_ft6dy7k', 'template_tjfug6p', {
                from_name: userName,
                to_name: 'Marco Saverino',
                message: message,
                reply_to: email
            }, 'bvNibq52TWf0f4Du7');
            setEmailSent(true);
            setUserName("");
            setMessage("");
            setEmail("");
        } catch (error) {
            setErrorMessage("Failed to send the email. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="reach-out" className="contact">
            <div className="flex-row">
                <h2 className="section-title secondary-border">Get In Touch</h2>
            </div>
            <div className="contact-info">
                {/* ... (the rest remains the same) ... */}
                <div className="contact-form">
                    <h3>Contact Me</h3>
                    <form className="form" onSubmit={handleFormSubmit}>
                        {/* ... (the form fields remain the same) ... */}
                        <button type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Submit'}
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
