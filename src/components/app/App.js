import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Header from '../header/Header';
import ProjectsContainer from '../../container/ProjectsContainer';
import styles from './main.css';

function App() {
  return (
    <section className={styles.main}>
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={ProjectsContainer} />
          </Switch>
        </Router>
      </>
    </section>

  );
}
export default App;
