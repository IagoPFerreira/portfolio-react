import React from 'react';
import { Image } from 'react-bootstrap';
import profile from '../images/profile.jpeg';

function Main() {
  return (
    <section id="home">
      <h1>Iago de Paula Ferreira</h1>
      <h3>Desenvolvedor Júnior</h3>
      <Image src={profile} className="profile-picture" alt="" />
    </section>
  );
}

export default Main;
