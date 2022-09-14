import React from 'react'
import './Alumni.css'
import { alumni_trial } from './AlumniDataStructure'

export default function Alumni({alumni}) {
    
    
  
    return (
    <div class="alumniContainer">
        <div className="alumniHeading">
            <h1> <span style={{color: "white", fontSize: "3rem"}}> OUR </span> <span style={{color: "var(--secondary)", fontSize: "3rem"}} class="fat-underline"> ALUMNI! </span></h1>
        </div>

        {alumni.map(alum => {
            return (
                <div class="alumniItem">
            <div className="main">
                <div className="left">
                    <img src={alum.img} alt="Dr. Behdin's Headshot" />
                    <div class="img-desc">
                        <p class="title">
                        {alum.name}
                        </p>
                        <p class="duration">
                        {alum.duration}
                        </p>
                        <p className="title-desc">
                        {alum.title}
                        </p>
                    </div>
                </div>
                <div className="right">
                    <span class="desc">
                    {alum.description}
                    </span>
                </div>
            
            <div className="alumniSocial">
            {alum.linkedin ? <div class="iconContainer"><a href={alum.linkedin} class="icon" target="_blank"><i class="fa fa-linkedin"></i></a></div> : null}
            {alum.website ? <div class="iconContainer"><a href={alum.website} class="icon" target="_blank"><i class="fa fa-globe"></i></a></div> : null}
            {alum.email ? <div class="iconContainer"><a href={alum.email} class="icon" target="_blank"><i class="fa fa-envelope"></i></a></div> : null}
            </div>
            </div>
        </div>
            )
        })}

    </div>

  )
}
