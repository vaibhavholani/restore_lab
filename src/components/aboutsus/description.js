import React from 'react'
import './description.css'
import Gallery from './Gallery'
export default function AboutUs() {
    
    
  
    return (
    <div class="aboutContainer" >
      <div>
        <h1 className='diversity' id="edi">Gallery</h1>
              <Gallery />
              </div>

                    <h1 className='diversity' id="edi">ReSTORE Lab's commitment to Equity, Diversity and Inclusion</h1>

        <div class="imagediv">
        <img src={process.env.PUBLIC_URL + "/assets/option2.jpg"} class="edtimg"/>
        </div >
        <div class="edit">
            <p >We recognize the inequities and barriers against marginalized populations in society including in academia/research workspaces. It is important that we combat discrimination and injustice, thus; our lab is committed to upholding the University of Toronto’s commitment to diversity, equity, inclusion, and recruitment of a diverse range of employees. Our lab works hard to ensure that we take active steps toward creating a diverse and inclusive team. The ReSTORE lab recruits and supports a research team that includes underrepresented populations (women, immigrants, individuals of differing sexual orientations, individuals with disabilities, and minor ethnic groups). In addition, our team consists of various educational levels to allow for a holistic learning environment, including undergraduate and graduate learners, and post-doctoral scholars. It is essential that we create a space for underrepresented groups to have equal opportunity and that our workplace environment is accommodating to the needs of all individuals and allows for unique contributions and participation in research activities. We ensure that this environment is created and maintained by implementing new initiatives to meet all team members learning accommodations. This includes supporting the participation, engagement, and skill development of all team members.</p>



            <p class="secondpara">
The ReSTORE lab implements widespread advertisement and inclusive communication (e.g., ReSTORE lab website, social media platforms, and university job postings) of job opportunities to allow a wide range of applicants of various ethnicities, identified genders, education levels, sexual orientations, and levels of disability. Additionally, we ensure that we engage in collaborations with diverse companies, laboratories, and individuals. It is important that we uphold a non-hierarchical lab environment where trainees of different expertise levels have equal opportunity to engage with industry partners/organizations.  
We ensure that trainees can access support, mentorship, and opportunities to further their career goals. For instance, we promote open communication across a variety of online platforms (e.g., Microsoft teams, email, and zoom) and ensure online meetings for trainees to share questions, challenges openly, and professional/personal goals and developments. We commit weekly sessions to allow team members to address questions or difficulties to ensure all employees have access to support. We additionally ensure that we have a biweekly informal meeting for all team members to discuss professional or personal topics to encourage team building. Additionally, senior lab members mentor incoming trainees by passing along expertise and experience in this workplace. Overall, we ensure that we include a diverse cohort of team members with equal learning and engagement opportunities. 
</p>
</div>


        </div>



  )
}
    