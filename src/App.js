import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/team/Team';
import Projects from './components/projects/Projects';
import Footer from './components/floating_social_links/FloatingSocialLinks.js';
import ContactUs from './components/contact_us/ContactUs';
import {get_all_project} from './components/api_calls/get_all_project';
import {get_all_team} from './components/api_calls/get_all_team';
import './App.css';



function App() {
  
  (function() {
    if (document.location.hash) {
        setTimeout(function() {
            window.scrollTo(window.scrollX, window.scrollY - 100);
        }, 10);
    }
  })();

  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services}/>
          <Route path='/projects' component={Projects} />
          <Route path='/contactus' component={ContactUs} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
