import React, {useState, useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import Typist from 'react-typist';
import './HeroSection.css';

function HeroSection() {

  const [hide, setHide] = useState(true)

  useEffect(()=> {
    
    setTimeout(()=> {setHide(false)}, 9500)
  }, [])

  const exploreOnClick = () => {
    const element = document.getElementById("information-container")
    element.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className='hero-container'>
      <video src='https://wave.video/embed/61c010798653f875863246c9/61c010798653f875863246c7.mp4' autoPlay loop muted 
             poster = "https://wallpapers-hub.art/wallpaper-images/38119.jpg"
      />
      <Typist cursor={{hideWhenDone: true}} >
        <Typist.Delay ms={2500} />
          <span class="hero-typist">We are ReSTORE <i class="fas fa-sync-alt"></i></span>
          <br/>
        <Typist.Delay ms={0} />
          <span class="hero-typist-small">We research Rehabilation Sciences Through Occupational Research and Engagement</span>
      </Typist>
      <p className={`smooth ${hide? "hero-hidden": ""}`}>What are you waiting for?</p>
      <div className={` smooth ${hide? "hero-hidden": "hero-btns"}`}>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={exploreOnClick}
        >
          Explore Restore
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
