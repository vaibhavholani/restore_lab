import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects.js';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer.js';



function App() {

  (function() {
    if (document.location.hash) {
        setTimeout(function() {
            window.scrollTo(window.scrollX, window.scrollY - 100);
        }, 10);
    }
  })();

  window.addEventListener('locationchange', function(){
    console.log('location changed!');
  })

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/projects' component={Projects} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
