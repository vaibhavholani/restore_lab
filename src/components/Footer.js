import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id="fixed-social">
          <div><a href="https://www.facebook.com/restorelabuoft/" class="fixed-facebook" target="_blank"><i class="fa fa-facebook"></i> <span>Facebook</span></a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/restore-lab/" class="fixed-instagrem" target="_blank"><i class="fa fa-linkedin"></i> <span>LinkedIn</span></a>
    </div>
  <div>
    <a href="https://twitter.com/restore_lab" class="fixed-tumblr" target="_blank"><i class="fa fa-twitter"></i> <span>Twitter</span></a>
  </div>
</div>
  //   <div className='footer-container'>
  //     <div class='footer-links'>
  //       <div className='footer-link-wrapper'>
  //       </div>
  //       <div className='footer-link-wrapper'>
  //         <div class='footer-link-items'>
  //           <h2>Contact Us</h2>
  //           <a href='#' target='_blank'>Instagram</a>
  //           <a href='https://www.facebook.com/restorelabuoft/' target='_blank'>Facebook</a>
  //           <a href='#' target='_blank'>Youtube</a>
  //           <a href='https://twitter.com/restore_lab' target='_blank'>Twitter</a>
  //           <a href='https://www.linkedin.com/in/restore-lab/' target='_blank'>Linkedin</a>
  //         </div>
  //         {/* <div class='footer-link-items'>
  //           <h2>About Us</h2>
  //           <a href='/projects'>Publlications</a>
  //         </div> */}
  //       </div>
  //     </div>
  //     <section class='social-media'>
  //       <div class='social-media-wrap'>
  //         <div class='footer-logo'>
  //           <Link to='/' className='social-logo' style={{fontWeight: "bold"}}>
  //             <pre>
  //             RESTORE LAB</pre>
  //           </Link>
  //         </div>
  //         <small class='website-rights' style={{fontWeight: "bold"}}>ReSTORE © 2021</small>
  //         <div class='social-icons' style={{display: "none"}}>
  //           <Link
  //             class='social-icon-link facebook'
  //             to='/'
  //             target='_blank'
  //             aria-label='Facebook'
  //           >
  //             <i class='fab fa-facebook-f' />
  //           </Link>
  //           <Link
  //             class='social-icon-link instagram'
  //             to='/'
  //             target='_blank'
  //             aria-label='Instagram'
  //           >
  //             <i class='fab fa-instagram' />
  //           </Link>
  //           <Link
  //             class='social-icon-link youtube'
  //             to='/'
  //             target='_blank'
  //             aria-label='Youtube'
  //           >
  //             <i class='fab fa-youtube' />
  //           </Link>
  //           <Link
  //             class='social-icon-link twitter'
  //             to='/'
  //             target='_blank'
  //             aria-label='Twitter'
  //           >
  //             <i class='fab fa-twitter' />
  //           </Link>
  //           <Link
  //             class='social-icon-link twitter'
  //             to='/'
  //             target='_blank'
  //             aria-label='LinkedIn'
  //           >
  //             <i class='fab fa-linkedin' />
  //           </Link>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
  )}

export default Footer;
