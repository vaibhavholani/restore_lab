import React from 'react'
import "./HomeLeader.css"

export default function HomeLeader() {
    return (
        <div class="leader-container">
            <div className="heading">
                <h1> <span style={{color: "var(--secondary)"}}> TEAM </span>  <span class="fat-underline"> LEAD </span></h1>
            </div>
            <div className="main">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + "/images/behdin.jpg"} alt="Dr. Behdin's Headshot" />
                    <div class="img-desc">
                        <p class="title">
                        Dr. Behdin Nowrouzi-Kia
                        </p>
                        <p className="title-desc">
                        Principal Investigator
                        </p>
                    </div>
                </div>
                <div className="right">
                    <span class="desc">
                    Dr. Behdin Nowrouzi-Kia, PhD, is an assistant professor in the Department of Occupational Therapy and Occupational Science, 
                    where he also holds the inaugural Emily Geldsaler Grant Early Career Professorship in 
                    Workplace Mental Health. Through an occupational lens, his research program is a sy
                    stematic study of occupations in the areas of work disability prevention, return to work, 
                    and disability management. This approach is designed to produce results directly applicable to identify 
                    and assess risk and to develop interventions for preventing or improving high-risk behaviours in the workplace. 
                    </span>
                </div>

            </div>
        </div>
    )
}
