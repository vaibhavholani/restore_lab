
import React, { useState, useEffect } from 'react';
import { Button } from '../custom_components/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import {ReactComponent as ReactLogo} from './restore_lab_logo.svg';
import {InvestigatorItems} from './NavInvestigatorItems.js'
import {getNavProjectItems} from '../api_calls/get_all_project'
import {global_items} from './GlobalConsortiumItems.js'

import { about_items } from './AboutUsitems';


function Navbar({ProjectItems}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false)
  const [dropdown, setDropdown] = useState(false);
  const [dropdownProject, setDropdownProject] = useState(false);
  const [dropdownRestoreGlobal, setDropdownRestoreGlobal] = useState(false)
  const [dropdownAboutUs, setDropdownAboutUs] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1100) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const joinUs = () => {
    window.open("https://forms.gle/3kfx81nunxdaj5UR9", '_blank').focus();
  }
  

  const onMouseEnter = () => {

      setDropdown(true);
    
  };

  const onMouseLeave = () => {

      setDropdown(false);
    
  };
  
  const onMouseEnterProject = () => {

      setDropdownProject(true);
    
  };

  const onMouseLeaveProject = () => {

      setDropdownProject(false);
    
  };
  const onMouseEnterRGlobal = () => {

      setDropdownRestoreGlobal(true);
    
  };

  const onMouseLeaveRGlobal = () => {

      setDropdownRestoreGlobal(false);
    
  };

  const onMouseEnterAboutUs = () => {

      setDropdownAboutUs(true);
    
  };

  const onMouseLeaveAboutUs = () => {

      setDropdownAboutUs(false);
    
  };

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
      setNavbar(false)
  }



  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <nav className={`navbar`}>
          <Link to='/' className={`navbar-logo ${navbar ? "active-navbar": null}`} onClick={closeMobileMenu}>
        <ReactLogo/>
          </Link>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className={`nav-links ${navbar ? "active-navbar": null}`} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'
                          onMouseEnter={onMouseEnterAboutUs}
                          onMouseLeave={onMouseLeaveAboutUs}>
              <Link to='/aboutus' className={`nav-links ${navbar ? "active-navbar": null}`} onClick={closeMobileMenu}>
                About Us
              </Link>
              {dropdownAboutUs && <Dropdown MenuItems={about_items} />}

            </li> 

            <li className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
              <Link
                to='/services'
                className={`nav-links ${navbar ? "active-navbar": null}`}
                onClick={closeMobileMenu}
              >
                Our Team
              </Link>
              {dropdown && <Dropdown MenuItems={InvestigatorItems} />}
            </li>
            <li  className='nav-item'
              onMouseEnter={onMouseEnterProject}
              onMouseLeave={onMouseLeaveProject}
            >
              <Link
                to='/projects'
                className={`nav-links ${navbar ? "active-navbar": null}`}
                onClick={closeMobileMenu}
              >
                Research
              </Link>
              {dropdownProject && <Dropdown MenuItems={ProjectItems} />}
            </li>

            {/* <li className='nav-item'>
              <Link to='/alumni' className={`nav-links ${navbar ? "active-navbar": null}`} onClick={closeMobileMenu}>
                Alumni
              </Link>
            </li> */}
            
            <li className='nav-item'
              onMouseEnter={onMouseEnterRGlobal}
              onMouseLeave={onMouseLeaveRGlobal}
            >
            <Link
                to='/restore_global'
                className={`nav-links ${navbar ? "active-navbar": null}`}
                onClick={closeMobileMenu}
              >
                ReSTORE- Global 
              </Link>
              {dropdownRestoreGlobal && <Dropdown MenuItems={global_items} />}
            </li>

            <li className='nav-item'>
              <Link to='/contactus' className={`nav-links ${navbar ? "active-navbar": null}`} onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>


            <li className='nav-item active-button'>
              <Link onClick={joinUs} className={`nav-links ${navbar ? "active-navbar": null}`} >
                Join Us
              </Link>
            </li>

          </ul>
          {button && <Button buttonStyle={`btn--outline`} buttonGreen={navbar} onClick={joinUs}>JOIN US</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;