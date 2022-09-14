import React from 'react'
import './Banner2.css'
import { Button } from '../custom_components/Button';

export default function Banner() {


  return (
    <div class="banner">
        <div class="bannerSection" >
            
            <img src="/images/helpingPeople.jpeg" class="bannerImage" />
            
            <div className="bannerText">
            <span class="bannerHeading" style={{color: "black"}}>  <span style={{fontWeight: 200}}>JOIN US AT </span> RESTORE</span>
            <p class="bannerSubHeading">
                Read about what we are working on and how you can find your place at restore lab! This is just to make it look better.
            </p>
            <div className="bannerButton">
              <Button buttonStyle={`btn--outline`} buttonBlack={true} customCSS={true} > Our Research</Button>
            </div>
            </div>
           
        </div>
    </div>
  )
}
