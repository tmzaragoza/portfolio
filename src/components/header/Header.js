import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Header.css';

function Header() {
  return (
    <>
      <header className={styles.Header}>
        <section className={styles.header}>
          <a href="teonna.dev" className={styles.TZ}>TZ</a>
          <a href='https://www.linkedin.com/in/teonnazaragoza/' target="_blank">
            <img src="../../../images/linkedin.png" alt="linkedIn logo" />
          </a>
          <a href='https://github.com/tmzaragoza' target="_blank">
            <img src="../../../images/github.png" alt="github logo" />
          </a>
        </section>
        <nav className={styles.nav}>
          <a to='/projects'>/WORK</a>
          <a to='/future'>/FUTURE</a>
          <a to='/about'>/ABOUT</a>
        </nav>
      </header>
    </>
  );
}
export default Header;
