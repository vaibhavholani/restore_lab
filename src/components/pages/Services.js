import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {services} from './DataServices'
import './Services.css'


export default function Services() {
    return (
    <>
        <section className="section servicesPage">
        <div class="page-sec" id="about"/>
            <div class="cntnr">
                <div class="text-center">
                    <h2 class="custom-heading text-uppercase black">Meet our Team!</h2>
                </div>
                <ul class="timeline">
                    {
                        services.map((item, index) => {
                            if (index % 2 == 0) {
                                return (
                                    <>
                                    <li id = {item.id}>
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