import React from 'react'
import './information.css'

export default function Information() {
    return (
        <div class="information-container" id="information-container">
            <h1> About us</h1>
            <p>The Rehabilitation Sciences through Occupational Research and Engagement (ReSTORE) 
            lab is led by Behdin Nowrouzi-Kia, OT. Reg. (Ont.), PhD, FRSA. 
            The ReSTORE lab is a multidisciplinary research group with backgrounds 
            in occupational therapy, occupational health and safety, 
            work disability prevention, work ability and stroke rehabilitation. 
            Our mission is to identify and assess risk and develop 
            occupation-based interventions for preventing or improving 
            high-risk behaviours in the workplace. 
            Through a biopsychosocial lens, 
            we seek to understand how work disability 
            extends towards personal characteristics (e.g., psychosocial) and 
            environmental (e.g., healthcare system, workplace, workers’ compensation system) 
            factors in order to improve health outcomes. Drawing on mixed-methods, 
            our team works to get a deeper understanding of workplace experiences, 
            functioning and well-being. </p>
            <img src={process.env.PUBLIC_URL + '/assets/behdin.jpg'} alt="Dr. Behdin's Headshot" />
        </div>
    )
}
