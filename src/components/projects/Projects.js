import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

const text = [
  {
    title: 'SimAlchemy',
    date: '02/19',
    concept: 'CLI game',
    about: 'How does one make a database fun? We chose to make a code school adventure game in the command line to show case our understand of a NOSQL database.',
    tech: 'Express, MongoDB, Node.js',
    pic: 'pic'
  }
];
function Projects({ projects = text }) {
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
