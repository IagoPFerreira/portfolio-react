import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

function ProjectCard({ modulo }) {
  return (
    <>
      {modulo.map(({
        name, image, alt, repo, deploy,
      }) => (
        <Card className="project-card" as="section">
          <img variant="top" src={image} alt={alt} className="project-image" />
          <Card.Body as="section">
            <Card.Title as="h5">{name}</Card.Title>
            <ButtonGroup as="section">
              <Button
                variant="primary"
                href={deploy}
                target="_blank"
                rel="noreferrer"
                className="repo-links"
                disabled={!deploy}
              >
                Aplicação
              </Button>
              { console.log(image) }
              <Button
                variant="primary"
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="repo-links"
              >
                Repositório
              </Button>
            </ButtonGroup>
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
