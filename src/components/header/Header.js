import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

function Header() {
  return (
    <header className={styles.Header}>
      <section className={styles.section}>
        <Link to='/' className={styles.TZ}>TZ</Link>
        <a href='https://www.linkedin.com/in/teonnazaragoza/' target="_blank">
          <img src="../../../images/linkedin.png" alt="linkedIn logo" />
        </a>
        <a href='https://github.com/tmzaragoza' target="_blank">
          <img src="../../../images/github.png" alt="github logo" />
        </a>
      </section>
      <nav className={styles.nav}>
        <Link to='/projects'>/WORK</Link>
        <Link to='/future'>/FUTURE</Link>
        <Link to='/about'>/ABOUT</Link>
      </nav>
    </header>
  );
}
export default Header;
