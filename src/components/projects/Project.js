import React from 'react';
import PropTypes from 'prop-types';

function Project({ project }) {
  const { title, date, concept, about, pic, tech } = project;
  return (
    <article>
      <section>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{concept}</p>
      </section>
      <section>
        <p>{tech}</p>
        <p>{about}</p>
      </section>
      <figure>
        <img src={pic} alt='screen shot of project'/>
      </figure>
    </article>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
