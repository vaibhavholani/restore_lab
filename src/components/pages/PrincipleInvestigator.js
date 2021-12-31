import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Services.css'


export default function PrincipleInvestigator() {
    return (
    <>
        <section className="section servicesPage">
        <video src='https://wave.video/embed/61c010798653f875863246c9/61c010798653f875863246c7.mp4' autoPlay loop muted 
             poster = "https://wallpapers-hub.art/wallpaper-images/38119.jpg"
      />
        <div class="page-sec" id="about"/>
            <div class="cntnr">
                <div class="text-center">
                    <h2 class="custom-heading text-uppercase">Meet our Team!</h2>
                </div>
                <ul class="timeline">
                    <li id="behdin-service">
                        <div class="timeline-image" id="behdin-service"><img class="rounded-circle img-fluid" src="/images/nowrouzikia-behdin.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="subheading">Dr. Behdin Nowrouzi-Kia</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Behdin Nowrouzi-Kia, PhD, is an assistant professor in the Department of Occupational Therapy and Occupational Science, where he also holds the inaugural  Emily Geldsaler Grant Early Career Professorship in Workplace Mental Health. Through an occupational lens, his research program is a systematic study of occupations in the areas of work disability prevention, return to work, and disability management. This approach is designed to produce results directly applicable to identify and assess risk and to develop interventions for preventing or improving high-risk behaviours in the workplace. Dr. Nowrouzi-Kia’s work is motivated by efforts in the field of work disability prevention that extends beyond the efforts to prevent or cure diseases from a purely physical perspective, towards more holistic approaches.</p></div>
                        </div>
                    </li>
                </ul>
            </div></section></>)}