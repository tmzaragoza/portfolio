import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import styles from './Header.css';

function Header() {
  return (
    <>
      <header className={styles.Header}>
        <header className={styles.header}>
          <a href="teonna.dev" className={styles.TZ}>TZ</a>
          <a href='https://www.linkedin.com/in/teonnazaragoza/' target="_blank">
            <img src="../../../images/linkedin.png" alt="linkedIn logo"/>
          </a>
          <a href='https://github.com/tmzaragoza' target="_blank">
            <img src="../../../images/github.png" alt="github logo" />
          </a>
        </header>
        <Router>
          <nav className={styles.nav}>
            {/* <Link to='/'></Link> */}
            <Link to='/projects'>/WORK</Link>
            <Link to='/future'>/FUTURE</Link>
            <Link to='/about'>/ABOUT</Link>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Router>
      </header>
    </>
  );
}
export default Header;
