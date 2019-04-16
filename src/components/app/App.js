import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Header from '../header/Header';
import Projects from '../projects/Projects';
import './main.css';

function App() {
  return (
    <section>
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/work' component={Projects} />
          </Switch>
        </Router>
      </>
    </section>

  );
}
export default App;
