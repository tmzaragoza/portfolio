import React from 'react';
import PropTypes from 'prop-types';
import styles from './Projects.css';
import linkedIn from '../../../public/images/linkedin.png';
import gitHub from '../../../public/images/github.png';

function Project({ project }) {
  const { title, date, concept, about, pic, tech, github, site } = project;
  return (
    <article className={styles.Project}>
      <section>
        <h2>{title}</h2>
        <section className={styles.links}>
          <a href={github} target="_blank"><img src={gitHub} /></a>
          <a href={site} target="_blank"><img src={linkedIn} /></a>
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
