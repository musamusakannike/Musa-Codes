import { faLinkedin, faThreads, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color } from "framer-motion";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const mailtoLink = `mailto:musamusakannike@gmail.com?subject=Contact%20from%20${name}&body=${encodeURIComponent(
      message
    )}%0A%0AFrom:%20${name}%20(${email})`;

    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="contact-section" style={styles.contactSection}>
      <h2 className="text-light animate__animated animate__bounce animate__infinite animate__slow">Contact Me</h2>
      <div className="row">
        <div className="col-md-6">
          <p className="text-light text-start">
            I'd love to hear from you! Send me an email or fill out the form below. I'll
            get back to you as soon as possible.
          </p>
          <dl className="list-unstyled text-start text-light ms-3">
            <dt>Twitter X:</dt>
            <dd>https://x.com/musa_codes</dd>

            <dt>GitHub:</dt>
            <dd>https://github.com/musamusakannike</dd>

            <dt>LinkedIn:</dt>
            <dd>https://www.linkedin.com/in/musamusakannike</dd>

            <dt>Telegram:</dt>
            <dd>https://t.me/musa_codes</dd>

            <dt>Email:</dt>
            <dd>musamusakannike@gmail.com</dd>
          </dl>
        </div>

        <div className="col-md-6">
          <form onSubmit={handleSubmit} style={styles.form}>
            <div className="form-group text-start">
              <label htmlFor="name" className="text-light">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control border-light"
                style={styles.input}
                required
              />
            </div>
            <div className="form-group text-start">
              <label htmlFor="email" className="text-light">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control border-light"
                style={styles.input}
                required
              />
            </div>
            <div className="form-group text-start">
              <label htmlFor="message" className="text-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control border-light"
                style={styles.textarea}
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="button btn-purple"
              style={styles.button}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  contactSection: {
    textAlign: "center",
    padding: "50px 20px",
  },
  form: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #444",
    backgroundColor: "transparent",
    color: "#fff",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #444",
    backgroundColor: "transparent",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
  },
};

export default Contact;
