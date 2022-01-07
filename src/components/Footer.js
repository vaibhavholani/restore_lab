import React from 'react';
import './Footer.css';


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
  <div>
    <a href="mailto:mail@restore.rehab" class="fixed-tumblr" target="_blank"><i class="fa fa-envelope"></i> <span>Email</span></a>
  </div>
</div>)}

export default Footer;
