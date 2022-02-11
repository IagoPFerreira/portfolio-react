import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

function ProjectCard({ modulo }) {
  return (
    <>
      {modulo.map(({
        name, image, alt, repo, deploy, description,
      }) => (
        <Card className="project-card" as="section" key={name}>
          <img variant="top" src={image} alt={alt} className="project-image" />
          <Card.Body as="section">
            <Card.Title as="h5">{name}</Card.Title>
            <Card.Subtitle as="h6">{ description }</Card.Subtitle>
            <ButtonGroup as="section">
              <Button
                variant="primary"
                href={deploy || repo}
                target="_blank"
                rel="noreferrer"
                className="repo-links"
                disabled={!deploy}
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
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  modulo: PropTypes.object,
}.isRequired;
