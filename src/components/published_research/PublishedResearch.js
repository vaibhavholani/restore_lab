import React, {useState, useEffect} from 'react'
import "./PublishedResearch.css"
import {get_all_published_research} from '../api_calls/get_all_published_research'

export default function PublishedResearch() {
    
    const [research, setResearch] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        get_all_published_research(setResearch)
    }, [])
    useEffect(() => {
        if (research.length !== 0) {
            setLoad(false)
        }
    }, [research])

    return (
    <div class="all-research">

        <h1> <span style={{color: "white", fontSize: "3rem"}}>OUR </span><span style={{color: "var(--secondary)", fontSize: "3rem"}} class="fat-underline"> PUBLISHED RESEARCH </span></h1>
        {load?
                    <div class="loader-wrapper">
                        <h2 style={{color: 'white', background: "black", fontSize: "5em", padding: "30px 0"}}class="custom-heading text-uppercase">LOADING RESEARCH PROJECTS!</h2>
                        <span class="loader"><span class="loader-inner"></span></span>
                    </div> : null}
        {
            (research ? research: []).map(research => {
                return (
                    <div class="research-container" id={research.id}>
                        <div className="heading">  
                            <h1> <span style={{color: "black"}}> {research.title} </span></h1>
                        </div>
                        <div className="main">
                            <div className="left">
                                <img src={research.img} alt="Our Published Research" />
                                <div class="img-desc">
                                    <p class="title">{research.funder}</p>
                                </div>
                        </div>
                        <div className="right">
                            <span class="desc">
                            {research.desc}
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
