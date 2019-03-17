import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';

function Header() {
  return (
    <>
    <header>
      <a href='https://www.linkedin.com/in/teonnazaragoza/' target="_blank">Linked icon</a>
      <a href='https://github.com/tmzaragoza' target="_blank">Github icon</a>
      <a href='https://www.instagram.com/t_on_a/' target="_blank">instagram icon</a>
    </header>
      <Router>
        <nav>
          {/* <Link to='/'></Link> */}
          <Link to='/projects'>PROJECTS</Link>
          <Link to='/future'>FUTURE</Link>
          <Link to='/about'>ABOUT</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </>
  );
}
export default Header;
