import React from 'react'
import "./ContactUs.css"

export default function ContactUs() {
    return (
    <div class="parent-contact-container">
    {/* <h1 style={{marginTop: 40, marginBottom: 40}}> <span style={{color: "white", fontSize: "3rem"}}> CONTACT </span><span style={{color: "var(--secondary)", fontSize: "3rem"}} class="fat-underline"> US </span></h1> */}
    <div class="contact-container">
   
    <div className="main">
        <div className="left">
        <h3 style={{marginBottom: 30}}><span style={{color: "white", fontSize: "2.7rem"}}>OUR</span> <span style={{color: "var(--secondary)", fontSize: "2.7rem"}} class="fat-underline">LOCATION</span></h3>
        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=500%20university%20avenue%20toronto&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"></iframe>
            <div class="img-desc">
                <p className="title-desc">
                <span style={{color:"white", letterSpacing: 3}}> ADDRESS: </span> 500 University Avenue
                </p>
                <p className="title-desc">
                <span style={{color:"white", letterSpacing: 3}}> LAB ROOM NUMBER: </span> 961
                </p>
                <p className="title-desc">
                <span style={{color:"white", letterSpacing: 3}}> PHONE NUMBER: </span> (416) 946-3249
                </p>
                <p className="title-desc">
                <span style={{color:"white", letterSpacing: 3}}> FAX NUMBER: </span> (416) 946-8570
                </p>
            </div>
        </div>
        <div className="left">
        <h3 style={{marginBottom: 30}}><span style={{color: "white", fontSize: "2.7rem"}}>OUR</span> <span style={{color: "var(--secondary)", fontSize: "2.7rem"}} class="fat-underline">SOCIALS</span></h3>
            <div class="social-desc">
                <p class="title-desc">
                <pre><strong><i class="fa fa-envelope"></i></strong><span style={{color: "white", letterSpacing: 3}}> Email: </span><a href="mailto:mail@restore.rehab" class="text-secondary" style={{color: "var(--secondary)"}}> mail@restore.rehab</a></pre></p>
                <p class="title-desc">
                <pre><strong><i class="fa fa-facebook"></i></strong><span style={{color: "white", letterSpacing: 3}}> Facebook: </span><a href="https://www.facebook.com/restorelabuoft/" class="text-secondary" style={{color: "var(--secondary)"}}> @restore_lab</a></pre></p>
                <p class="title-desc">
                <pre><strong><i class="fa fa-linkedin"></i></strong><span style={{color: "white", letterSpacing: 3}}> LinkedIn: </span>
                <a href="mailto:mail@restore.rehab" class="text-secondary" style={{color: "var(--secondary)"}}> ReSTORE Lab</a></pre></p>
                <p class="title-desc">
                <pre><strong><i class="fa fa-twitter"></i></strong><span style={{color: "white", letterSpacing: 3}}> Twitter</span><a href="mailto:mail@restore.rehab" class="text-secondary" style={{color: "var(--secondary)"}}> @rehab</a></pre></p>
            </div>
        </div>
    </div>
</div>
    </div>
)
};



