import React from 'react'
import './HomeAboutUs.css'

export default function HomeAboutUs() {
    return (
        
       <div>
         <div class="information-container" id="information-container">
            <div className="floating-text">
                
            <h1> <span style={{color: "white"}}> OUR </span>  <span class="fat-underline"> MISSION </span></h1>
            <p class="para">The mission of the ReSTORE lab is to identify and assess 
                risk and develop occupation-based interventions for 
                preventing high-risk behaviours and improving mental and physical health in the workplace. </p>
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
