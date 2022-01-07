import React, { useState } from 'react';
import './Dropdown.css';
// import { Link } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';

function Dropdown({MenuItems}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => {
                  setClick(false)
                  setTimeout(function() {
                    window.scrollTo(window.scrollX, window.scrollY - 100);
                }, 10);
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;