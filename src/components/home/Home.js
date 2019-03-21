import React from 'react';
import About from '../about/About';
import ProjectsContainer from '../../container/ProjectsContainer';
import styles from './Home.css';

// const text = [
//   {
//     title: 'SimAlchemy',
//     date: '02/19',
//     concept: 'CLI game',
//     about: 'How does one make a database fun? We chose to make a code school adventure game in the command line to show case our understand of a NOSQL database.',
//     tech: 'Express, MongoDB, Node.js',
//     pic: ''
//   }
// ];
function Home() {
  return (
    <>
    <section>
      <article className={styles.Home}>
        <h3>HELLO MY NAME IS TEONNA ZARAGOZA</h3>
      </article>
    </section>
    <section className={styles.desktop}>
      <About />
      <ProjectsContainer />
    </section>
    </>
  );
}
export default Home;
