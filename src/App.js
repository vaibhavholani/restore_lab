import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/team/Team';
import Projects from './components/projects/Projects';
import Footer from './components/floating_social_links/FloatingSocialLinks.js';
import ContactUs from './components/contact_us/ContactUs';
import './App.css';



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
          <Route path='/contactus' component={ContactUs} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
