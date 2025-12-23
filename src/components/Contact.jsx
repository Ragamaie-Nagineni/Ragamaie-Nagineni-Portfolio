// src/components/Contact.jsx

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="reveal">
      <h2 className="reveal">Contact Me</h2>

      <div className="contact-box">
        <p>
          I’m always open to discussing new opportunities, collaborations, or
          interesting projects. Feel free to reach out!
        </p>

        <div className="contact-links">
          <a href="mailto:ragamaie@email.com">
            <FaEnvelope/>
            ragamaie.n@gmail.com</a>

          <a
            href="https://www.linkedin.com/in/ragamaie-nagineni-9a3829293/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> Ragamaie Naineni
          </a>

          <a
            href="https://github.com/Ragamaie-Nagineni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />Ragamaie-Nagineni
          </a>
        </div>
      </div>
    </section>
  );
}
