import React, {useState, useEffect} from 'react'
import './Banner2.css'
import { Button } from '../custom_components/Button';
import ReactHtmlParser from 'react-html-parser';


export default function Banner({bannerData}) {
  
  const [bannerProps, setBannerProps] = useState(bannerData)
  useEffect(()=> {
    console.log(bannerProps);
  }, [bannerProps])

  const createBannerText = (bannerProps) => {
    return (
      <div>
            <p class="bannerHeading" style={{color: bannerProps.heading.color, fontSize: bannerProps.heading.fontSize}}> {ReactHtmlParser(bannerProps.heading.text)} </p>
            <p class="bannerSubHeading" style={{color: bannerProps.subHeading.color, fontSize: bannerProps.subHeading.fontSize}}> {ReactHtmlParser(bannerProps.subHeading.text)} </p>
            <div className="bannerButton">
              <Button buttonStyle={`btn--outline`} onClick={() => {window.open(bannerProps.button.redirect, '_blank').focus();}} customCSS={true} css={{color: bannerProps.button.color, background: bannerProps.button.background}}> {ReactHtmlParser(bannerProps.button.text)} </Button>
            </div> 
      </div>
    )
  }

  const createImage = (img) => {
    return (
      <img src={img} class="bannerImage" />
    )
  }

  return (
    <div class="banner">

        <div class="bannerSection" style={{background: bannerProps.general.background}}>
            {bannerProps.general.orientation === "text-image" ? createBannerText(bannerProps) : createImage(bannerProps.img)}
            {bannerProps.general.orientation === "text-image" ? createImage(bannerProps.img) : createBannerText(bannerProps)}
          
        </div>
    </div>
  )
}
