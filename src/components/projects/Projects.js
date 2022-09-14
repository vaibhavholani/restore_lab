import React, {useState, useEffect} from 'react'
import {projects_trial} from "./ProjectsData"
import { Button } from '../custom_components/Button';
import {download_file_by_id} from '../api_calls/get_all_project';
import "./Projects.css"

export default function Projects({projects}) {
    
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
    }, [])

    useEffect(() => {
        if (projects.length !== 0) {
            setLoad(false)
        }
    }, [projects])

    const onLink = (link) => {window.open(link, '_blank').focus();}
    const onDownload = (objectID) => {download_file_by_id(objectID);}

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
                                <img src={project.img} alt="Project Title Image" />
                                <div class="img-desc">
                                    <p class="title">{project.funder}</p>
                                </div>
                        </div>
                        <div className="right">
                            <span class="desc">
                            {project.desc}
                            </span>
                            {project.displayButton && project.displayButton.toUpperCase() === "TRUE"? 
                                <Button buttonStyle={`btn--outline`} customClass = {"projectButton"}customCSS={true} css={{color: "var(--secondary-base)", border: "var(--secondary-base) 1px solid"}} 
                                                    onClick={() => {project.buttonType==="link" ? onLink(project.buttonLink) : onDownload(project._id)}}>
                                    {project.buttonText}
                                </Button> : null }
                        </div>
                        </div>
                    </div>
                )
            })
        }
    </div> 
    )
}
