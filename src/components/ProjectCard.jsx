import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

function ProjectCard({ modulo }) {
  return (
    <>
      {modulo.map(({ name, repo }) => (
        <Card className="project-card" as="section">
          <Card.Img variant="top" src="" />
          <Card.Body as="section">
            <Card.Title as="h5">{name}</Card.Title>
            <ButtonGroup as="section">
              <Button
                variant="primary"
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="repo-links"
              >
                Aplicação
              </Button>
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
