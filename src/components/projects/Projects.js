import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

function Projects({ projects }) {
  const listOfProjects = projects.map(project => {
    return <li key={project.name}><Project /></li>;
  });

  return (
    <ul>{listOfProjects}</ul>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Projects;
