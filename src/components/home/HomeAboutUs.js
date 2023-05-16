import React from 'react'
import './HomeAboutUs.css'

export default function HomeAboutUs() {
    return (
        
       <div>
         <div class="information-container" id="information-container">
            <div className="floating-text">
                
            <h1> <span style={{color: "white"}}> OUR </span>  <span class="fat-underline"> MISSION </span></h1>
            <p class="para">The Rehabilitation Sciences Through Occupational Research and Engagement (ReSTORE) lab is led by Dr. Behdin Nowrouzi-Kia and is housed in the Department of Occupational Science and Occupational Therapy in the Temerty Faculty of Medicine at the University of Toronto.

We are a team with researchers with occupational therapy, medical, health sciences, occupational medicine, public health, rehabilitation sciences, and psychology backgrounds. The mission of the ReSTORE lab is to identify and assess risk and develop occupation-based interventions for preventing high-risk behaviours and improving mental and physical health in the workplace. The ReSTORE lab works with partners in the public and private sectors including hospitals, community-based agencies, non-profits and profit organizations. The ReSTORE lab promotes and supports healthy and safe workplaces using an occupational lens. Currently the lab is engaged with multiple research projects funded by federal agencies in Canada, private industry and other international partners.</p>
            </div>
            
            <div class="our-lab">
            <h1>OUR <span style={{color: "white"}}>LAB</span></h1>
            <pre></pre>
            <nav></nav>
            <img src="/assets/restore.png" />
            </div>
           
        </div>
       </div>
    )
}
