import React, {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {team} from './TeamMembersData'
import {get_all_team} from '../api_calls/get_all_team'
import './Team.css'


export default function Team() {

    const [team, setTeam] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        get_all_team(setTeam)
    }, [])
    useEffect(() => {
        if (team.length !== 0) {
            setLoad(false)
        }
    }, [team])

    

    return (
    <>
        <section className="section servicesPage">
        <div class="page-sec" id="about"/>
            <div class="cntnr">
                <div class="text-center">
                    <h2 class="custom-heading text-uppercase black">Meet our Team!</h2>
                    {load?
                    <div class="loader-wrapper">
                        <h2 style={{color: 'white', background: "black"}}class="custom-heading text-uppercase">Loading Team!</h2>
                        <span class="loader"><span class="loader-inner"></span></span>
                    </div> : null}
                </div>
                <ul class="timeline">
                    {
                        team.map((item, index) => {
                            if (index % 2 == 0) {
                                return (
                                    <>
                                    <li >
                                        <section style={{padding: 0, margin: 0}} id = {item.id}>
                                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={item.img} alt="..." /></div>
                                        <div class="timeline-panel">
                                            <div class="timeline-heading">
                                                <h4 class="secondary-color subheading">{item.title}</h4>
                                                <h4 class="black subheading">{item.name}</h4>
                                            </div>
                                        <div class="timeline-body"><p class="text-muted">{item.desc}</p></div>
                                    </div>
                                    </section>
                                    </li>
                                    </>
                                )
                            }
                            else {
                                return (
                                    <>
                                    <li class="timeline-inverted" id={item.id}>
                                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={item.img} alt="..." /></div>
                                            <div class="timeline-panel">
                                                <div class="timeline-heading">
                                                    <h4 class="secondary-color subheading">{item.title}</h4>
                                                    <h4 class="black subheading">{item.name}</h4>
                                                </div>
                                                <div class="timeline-body"><p class="text-muted">{item.desc}</p></div>
                                            </div>
                                    </li>
                                    </>
                                )
                            }
                        })
                    }
                    
                </ul>
            </div></section></>)}