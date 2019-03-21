import React from 'react';
import PropTypes from 'prop-types';
import styles from './Projects.css';

function Project({ project }) {
  const { title, date, concept, about, pic, tech, github, site } = project;
  return (
    <article className={styles.Project}>
      <section>
        <h2>{title}</h2>
        <section className={styles.links}>
          <a href={github} target="_blank"><img src="../../../images/github.png" /></a>
          <a href={site} target="_blank"><img src="../../../images/www.png" /></a>
        </section>
        <p className={styles.date}>{date}</p>
        <h3>CONCEPT</h3>
        <p> {concept}</p>
      </section>
      <section>
        <h3>TECHNOLOGIES</h3>
        <p>{tech}</p>
        <h3>ABOUT</h3>
        <p>{about}</p>
      </section>
      <figure className={styles.pic}>
        <img src={pic} alt='screen shot of project' />
      </figure>
    </article>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
