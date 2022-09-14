// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize, 
  buttonGreen, 
  buttonBlack, 
  customCSS, 
  css, 
  customClass
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='#' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${buttonGreen ? "btn-green": null} ${buttonBlack ? "btn-black": null} ${customClass ? customClass : null}` }
        style={customCSS ? css : null}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
