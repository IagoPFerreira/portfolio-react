import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function ProjectCard({ modulo }) {
  return (
    <>
      {modulo.map(({ name, repo }) => (
        <Card className="project-card">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text />
            <Button variant="primary">
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="repo-links"
              >
                Repositório
              </a>
            </Button>
          </Card.Body>

          {/* <section className="project-card"> */}
          {/* <h5></h5> */}

          {/* </section> */}
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  modulo: PropTypes.object,
}.isRequired;
