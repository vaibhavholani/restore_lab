import React, { useState, useEffect } from 'react';
import { Button } from '../custom_components/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import {InvestigatorItems} from './NavInvestigatorItems.js'
import {getNavProjectItems} from '../api_calls/get_all_project'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false)
  const [dropdown, setDropdown] = useState(false);
  const [dropdownProject, setDropdownProject] = useState(false);
  const [ProjectItems, setProjectItems] = useState([])

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
    getNavProjectItems(setProjectItems);
    showButton();
  }, []);

  const joinUs = () => {
    window.open("https://forms.gle/3kfx81nunxdaj5UR9", '_blank').focus();
  }
  

  const onMouseEnter = () => {
    if (window.innerWidth < 1100) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1100) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  const onMouseEnterProject = () => {
    if (window.innerWidth < 1100) {
      setDropdownProject(false);
    } else {
      setDropdownProject(true);
    }
  };

  const onMouseLeaveProject = () => {
    if (window.innerWidth < 1100) {
      setDropdownProject(false);
    } else {
      setDropdownProject(false);
    }
  };

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <nav className={`navbar`}>
        <div className='navbar-container'>
          <Link to='/' className={`navbar-logo ${navbar ? "active-navbar": null}`} onClick={closeMobileMenu}>
            <h4><span class="spacing"><img src='../../assets/restore_lab_logo.png' class='logo_class'></img></span><span style={{color: "var(--secondary)"}}></span></h4>
          </Link>
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
            <li className='nav-item'
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

            <li className='nav-item'>
              <Link to='/contactus' className={`nav-links ${navbar ? "active-navbar": null}`} onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/jobpostings' className={`nav-links ${navbar ? "active-navbar": null}`} onClick={closeMobileMenu}>
                Job Postings
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
