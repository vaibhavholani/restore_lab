import React from 'react'
import "./ContactUs.css"

export default function ContactUs() {
    return (
    
    <div class="contact-container">
    <div className="heading">
        <h1> <span style={{color: "var(--secondary)"}}> CONTACT </span>  <span class="fat-underline"> US </span></h1>
    </div>
    <div className="main">
        <div className="left">
        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=500%20university%20avenue%20toronto&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <div class="img-desc">
                <p class="title">
                ReSTORE Lab
                </p>
                <p className="title-desc">
                Dept. of Occupational Therapy and Occupational Science
                </p>
            </div>
        </div>
        <div className="right">
            <span class="desc">
            <pre><strong><i class="fa fa-envelope"></i></strong> Email:<a href="mailto:mail@restore.rehab" class="text-secondary" style={{color: "var(--secondary)"}}> mail@restore.rehab</a></pre></span><br/>
            <span class="desc">
            <pre><strong><i class="fa fa-facebook"></i></strong> Facebook:<a href="https://www.facebook.com/restorelabuoft/" class="text-secondary" style={{color: "var(--secondary)"}}> @restore_lab</a></pre></span><br/>
            <span class="desc">
            <pre><strong><i class="fa fa-linkedin"></i></strong> LinkedIn:<a href="mailto:mail@restore.rehab" class="text-secondary" style={{color: "var(--secondary)"}}> ReSTORE Lab</a></pre></span><br/>
            <span class="desc">
            <pre><strong><i class="fa fa-twitter"></i></strong> Twitter<a href="mailto:mail@restore.rehab" class="text-secondary" style={{color: "var(--secondary)"}}> @rehab</a></pre></span><br/>
        </div>
    </div>
</div>
)
};



