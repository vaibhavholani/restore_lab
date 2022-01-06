import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import {InvestigatorItems} from './InvestigatorItems.js'
import {ProjectItems} from './ProjectItems.js'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false)
  const [dropdown, setDropdown] = useState(false);
  const [dropdownProject, setDropdownProject] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
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
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  const onMouseEnterProject = () => {
    if (window.innerWidth < 960) {
      setDropdownProject(false);
    } else {
      setDropdownProject(true);
    }
  };

  const onMouseLeaveProject = () => {
    if (window.innerWidth < 960) {
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
            <h4><span class="spacing">ReSTORE</span> <span style={{color: "var(--secondary)"}}>LAB</span></h4>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active-navbar' : 'nav-menu'}>
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

          </ul>
          {button && <Button buttonStyle={`btn--outline`} buttonGreen={navbar} onClick={joinUs}>JOIN US</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
