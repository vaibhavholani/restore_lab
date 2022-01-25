import React from 'react'
import "./Projects.css"

export default function Projects() {
    return (
    <div class="all-projects">
        <h1> <span style={{color: "white", fontSize: "3rem"}}>OUR </span><span style={{color: "var(--secondary)", fontSize: "3rem"}} class="fat-underline"> PROJECTS </span></h1>
        <div class="project-container" id='sshrc_project'>
        <div className="heading">  
                <h1> <span style={{color: "black"}}> Participation and engagement needs of home care rehabilitation professionals transitioning out of the COVID-19 pandemic:</span><span class="fat-underline" style={{color: "var(--secondary)"}}> A Pilot Study </span></h1>
            </div>
            <div className="main">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + '/images/sshrc.jpg'} alt="SSHRC Grant" />
                    <div class="img-desc">
                        <p class="title">Funded by: Social Sciences and Humanities Research Council (SSHRC)</p>
                        <p className="title-desc">E-mail:<a href="mailto:mail@restore.rehab" className="title-desc">mail@restore.rehab</a></p>
                        <p className="title-desc">Telephone: 416-946-3249</p>
                    </div>
                </div>
                <div className="right">
                    <span class="desc">
                    The COVID-19 pandemic has changed the way millions of Canadians live, work, and interact within their communities. Specifically, it has impacted the participation and engagement of Rehabilitation Professionals (RPs) working for homecare agencies, such as VHA Home HealthCare. Among the health professions studied in the stress and burnout literature, RPs have received little attention. This study aims to examine the nature of burnout and occupational stress among RPs at VHA Home HealthCare while they transition out of the COVID- 19 pandemic and evaluates the impact of burnout and occupational stress on participation at work.
                    </span>
                </div>
            </div>
        </div>
        <div class="project-container" id='blue_branch_project'>
        <div className="heading">  
                <h1><span style={{color: "black"}}>Impact of Labour Mobility on the Physical and Mental Health of Skilled Trades Workers in </span> <span class="fat-underline" style={{color: "var(--secondary)"}}>Ontario, Canada</span></h1>
            </div>
            <div className="main">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + '/images/someB.png'} alt="SSHRC Grant" />
                    <div class="img-desc">
                        <p class="title">Funded by: Blue Branch</p>
                        <p className="title-desc">E-mail: <a href="mailto:mail@restore.rehab" className="title-desc">mail@restore.rehab</a></p>
                        <p className="title-desc">Telephone: 416-946-3249</p>
                    </div>
                </div>
                <div className="right">
                    <span class="desc">
                    Labor mobility and subsequent workers migration is an increasing trend around the world as migrant workers make a huge quota of the economic growth of high-income countries. There is a paucity of data in the literature about labor mobility and its effect on mental health. This study aims to examine the impact of labour mobility on the physical and mental health of skilled trade workforce in Ontario.
                    </span>
                </div>
            </div>
        </div>
        <div class="project-container" id='ontario_elec_project'>
        <div className="heading">  
                <h1> <span style={{color: "black"}}>Supporting Employers in Apprentice Training: </span><span class="fat-underline" style={{color: "var(--secondary)"}}>Outcomes of a Training and Mentoring Program for Electrical and Plumbing Employers</span></h1>
            </div>
            <div className="main">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + '/images/oel.jpeg'} alt="Ontario Electrical League" />
                    <div class="img-desc">
                        <p class="title">Ontario Electrical League</p>
                        <p className="title-desc">E-mail: <a href="mailto:mail@restore.rehab" className="title-desc">mail@restore.rehab</a></p>
                        <p className="title-desc">Telephone: 416-946-3249</p>
                    </div>
                </div>
                <div className="right">
                    <span class="desc">
                    Ontario faces a serious labor force shortage in the skilled trades – a problem compounded by inadequate training opportunities provided through apprenticeships. The Ontario Construction Secretariat estimates that 100,000 additional workers will be needed across the province by 2029 Yet, apprenticeships aren’t keeping up with this demand. The study aims to evaluate the impact of the project and make recommendations for future supports that will lead to more completions of apprenticeship pathways and improved employer participation in apprenticeships.
                    </span>
                </div>
            </div>
        </div>
        <div class="project-container" id='workers_comp_project'>
        <div className="heading">  
                <h1> <span style={{color: "black"}}>Rapid review of telehealth treatments of psychological disorders</span></h1>
            </div>
            <div className="main">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + '/images/wcb.jpg'} alt="SSHRC Grant" />
                    <div class="img-desc">
                        <p class="title">Workers’ Compensation Board - Alberta</p>
                        <p className="title-desc">E-mail: <a href="mailto:mail@restore.rehab" className="title-desc">mail@restore.rehab</a></p>
                        <p className="title-desc">Telephone: 416-946-3249</p>
                    </div>
                </div>
                <div className="right">
                    <span class="desc">
                    In Canada, the pandemic has created unprecedented stress for the health care system, and it is likely to negatively impact workers differently because of issues and concerns such as threat of infection, job tenure, income levels and organizational perceptions, and health-focused interventions that support RTW. As a first step, we will conduct a rapid review of the literature to describe the efficacy of telehealth interventions for clinical depression in the workplace.
                    </span>
                </div>
            </div>
        </div>
    </div>)
}
