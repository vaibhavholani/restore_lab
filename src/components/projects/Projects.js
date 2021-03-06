import React, {useState, useEffect} from 'react'
import "./Projects.css"
import {get_all_project} from '../api_calls/get_all_project'

export default function Projects() {
    
    const [projects, setProject] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        get_all_project(setProject)
    }, [])
    useEffect(() => {
        if (projects.length !== 0) {
            setLoad(false)
        }
    }, [projects])

    return (
    <div class="all-projects">

        <h1> <span style={{color: "white", fontSize: "3rem"}}>OUR </span><span style={{color: "var(--secondary)", fontSize: "3rem"}} class="fat-underline"> PROJECTS </span></h1>
        {load?
                    <div class="loader-wrapper">
                        <h2 style={{color: 'white', background: "black", fontSize: "5em", padding: "30px 0"}}class="custom-heading text-uppercase">LOADING PROJECTS!</h2>
                        <span class="loader"><span class="loader-inner"></span></span>
                    </div> : null}
        {
            (projects ? projects: []).map(project => {
                return (
                    <div class="project-container" id={project.id}>
                        <div className="heading">  
                            <h1> <span style={{color: "black"}}> {project.title} </span></h1>
                        </div>
                        <div className="main">
                            <div className="left">
                                <img src={project.img} alt="SSHRC Grant" />
                                <div class="img-desc">
                                    <p class="title">{project.funder}</p>
                                </div>
                        </div>
                        <div className="right">
                            <span class="desc">
                            {project.desc}
                            </span>
                        </div>
                        </div>
                    </div>
                )
            })
        }
    </div> 
    )
}
