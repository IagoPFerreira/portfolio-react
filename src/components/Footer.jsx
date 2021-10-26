import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <section className="contacts-container">
        <a href="https://github.com/IagoPFerreira" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon-contact" />
        </a>
        <a href="https://www.linkedin.com/in/iago-de-paula-ferreira-45b501128/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon-contact" />
        </a>
        <p href="mailto:iago.pferreiravr@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="icon-contact" />
          {' '}
          <span className="email">iago.pferreiravr@gmail.com</span>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
