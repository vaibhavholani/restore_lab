import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Services.css'


export default function Services() {
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
                    <li class="timeline-inverted" id="abosede-service">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="/images/abosede.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="subheading">Clinical Research Intern @ Dept. of Occupational Therapy and Occupational Sciences</h4>
                                <h4 class="subheading">Dr. Abosede Okoduwa</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">I am currently a Clinical research Intern at the Department of Occupational Science and Occupational Therapy, University of Toronto, Ontario, Canada. She assists the research team with literature search, protocol writing and review of questionnaires. She has over 10years of experience as a clinician and has extensive knowledge in clinical research. She possesses strong interpersonal and teaming skills, she is self motivated and result driven. Abosede has a passion for improving the quality of life of people.</p></div>
                        </div>
                    </li>
                    <li id="vanessa-service"> 
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="/images/vanessa.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="subheading">BKin, MScOT Student @ Dept. of Occupational Therapy and Occupational Sciences</h4>
                                <h4 class="subheading">Vanessa Tam</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Vanessa is currently in the Occupational Therapy program in the Faculty of Medicine at the University of Toronto. She has a passion in working with individuals achieve their rehabilitation goals. Prior to the Occupational Therapy program, Vanessa worked in a Mental Health Return to Work Program where she supported individuals with mental health conditions return to activities that are meaningful to them. She is currently assisting with a systematic review project related to return-to-work interventions for individuals with work-related mental health conditions.</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted" id="joyce-service"> 
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="/images/joyce.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>Co-op Student @ ReSTORE Lab specializing in Mental Health Studies</h4>
                                <h4 class="subheading">Joyce Lo</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Joyce is a fourth year co-op student at the University of Toronto Scarborough, specializing in Mental Health Studies. Her research interests include occupational and mental health. Joyce joined the ReSTORE Lab in September 2021 and has been contributing as a Research Assistant. She is currently working on projects that look at workplace well-being in different healthcare provider groups as well as skilled trades workers.</p></div>
                        </div>
                    </li>
                    <li id="faizah-service">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="/images/faizah.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>Research Student Majoring in Biochemistry and Immunology</h4>
                                <h4 class="subheading">Faizah Abdullah</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Faizah is in her third year at the University of Toronto and is majoring in Biochemistry and Immunology. Her research interests include cancer biology and return-to-work interventions for individuals with mental health conditions. Faizah joined the lab in May 2021 as a work-study student and is assisting in the preparation of a systematic review and with laboratory materials for the Department of Occupational Science & Occupational Therapy. When not helping out in the lab, you can find Faizah exploring different coffee shops around Toronto!</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted" id="vaibhav-service">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="/images/vaibhav.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="subheading">Webmaster and Research Intern @ ReSTORE Lab</h4>
                                <h4 class="subheading">Vaibhav Holani</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Vaibhav is a Third year undersgraduate student at the University of Toronto, St, George and is pursuing a specialization in Computer Science & Statistical Sciences with a Focus in Artificial Intelligence. Vaibhav's interests dives into reducing complexity of Algorithms and apply innovative data-driven techniques to solve real-world problems thorugh Machine Learning.</p></div>
                        </div>
                    </li>
                    <li id="divij-service">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="/images/divij.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="subheading">Webmaster and Research Intern @ ReSTORE Lab</h4>
                                <h4 class="subheading">Divij Sanjanwala</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Divij is a Third Year undergraduate student at the University of Toronto and is pursuing Computer Science, Economics with a Focus in Data Analytics, and Statistical Sciences. Divij's Interests lies in the fields that leverage the power of Data using Efficient techniques Machine Learning Algorithms and techniques to achieve decision making</p></div>
                        </div>
                    </li>
                </ul>
            </div></section></>)}