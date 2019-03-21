import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import styles from './Projects.css';

function Projects({ projects }) {
  const listOfProjects = projects.map((project, id) => {
    return <li key={id}><Project project={project} /></li>;
  });

  return (
    <>
      <section>
        <h2 className={styles.projecth2}>PROJECTS</h2>
        <ul className={styles.ul}>{listOfProjects}</ul>
      </section>
    </>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Projects;
