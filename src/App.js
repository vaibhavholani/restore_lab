import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Team from './components/team/Team';
import Projects from './components/projects/Projects';
import Footer from './components/floating_social_links/FloatingSocialLinks.js';
import ContactUs from './components/contact_us/ContactUs';
import JobPosting from './components/jobposting/JobPosting';
import Alumni from './components/alumni/Alumni'
import {get_all_project} from './components/api_calls/get_all_project';
import {get_all_team_no_img, get_img_by_id} from './components/api_calls/get_all_team';
import {get_all_alumni_no_img, get_alum_img_by_id} from './components/api_calls/get_all_alumni';
import {getNavProjectItems} from './components/api_calls/get_all_project';
import './App.css';
import Publications from './components/publications/Publications';
import ProjectForm from './components/PDM/ProjectForm';
import AboutUs from './components/aboutsus/description';
import RestoreGlobal from './components/restore_global/RestoreGlobal';

function App() {
  
  // Loading all the data here
  const [ProjectItems, setProjectItems] = useState([])
  const [projects, setProject] = useState([])
  const [team, setTeam] = useState([])
  const [alumni, setAlumni] = useState([])
  const [load, setLoad] = useState(false);
  const [loadAlumni, setLoadAlumni] = useState(false)
  const [cookie, setCookie] = useState()
  
  // UseEffect to load all data
  useEffect(() => {
    // Setting the cookie if not already stored
    if (localStorage.getItem("restorelabcookieimp") == null) {
      localStorage.setItem("restorelabcookieimp", `${(Math.random() + 1).toString(36).substring(1)}`)
    }
    getNavProjectItems(setProjectItems);
    get_all_team_no_img(setTeam);
    get_all_alumni_no_img(setAlumni);
    get_all_project(setProject);
  }, []);

  useEffect(() => {
    if (team.length > 0 && load===false) {
      setLoad(true)
    }
  }, [team])

  useEffect(() => {
    if (load) {
      team.map((team_mem, i) => { return get_img_by_id(team_mem._id, i, setTeam)} )
    }
  }, [load]);
  
  useEffect(() => {
    if (alumni.length > 0 && loadAlumni===false) {
      setLoadAlumni(true)
    }
  }, [team])

  useEffect(() => {
    if (loadAlumni) {
      alumni.map((alumni_mem, i) => { return get_alum_img_by_id(alumni_mem._id, i, setAlumni)} )
    }
  }, [load]);

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
        <Navbar ProjectItems={ProjectItems}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services'> <Team team={team}/> <Alumni alumni={alumni}/></Route>
          <Route path='/projects'> <Projects projects={projects}/>  </Route>
          <Route path='/contactus' component={ContactUs} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/restore_global' component={RestoreGlobal} />



          
        </Switch>

      </Router>



      <Footer />
    </>
  );
}

export default App;
