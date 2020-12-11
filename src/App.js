import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Nav/index.js';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Router basename="/">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
