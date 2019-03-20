import React from 'react';
import styles from './About.css';

function About() {
  return (
    <article className={styles.About}>
      <section>
        <h2>TEONNA ZARAGOZA</h2>
        <h4>software developer</h4>
        <h4>nurse</h4>
        <h4>ultra runner</h4>
      </section>
      <section className={styles.bio}>
        <h3> /bio</h3>
        <p>I am an Oregon native with a passion for outdoor adventures and pushing your to the other side of your physical limits. Apart from running, I am passionate about serving those in my community and empowering the future.</p>
      </section>
      <section className={styles.hobbies}>
        <h3>/hobbies</h3>
        <ul>
          <li>Running</li>
          <li>Coaching cross-country</li>
        </ul>
      </section>
    </article>
  );
}

export default About;
