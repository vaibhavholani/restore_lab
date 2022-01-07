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
              <a
                className={item.cName}
                href={item.path}
                target="_self"
                onClick={() => setClick(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;