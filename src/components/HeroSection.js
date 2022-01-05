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
      <div className="title">
        <h1 class="main"><span style={{color: "white"}}>ReSTORE</span> LAB</h1>
        <p className="desc"><b>Re</b>habilitation <b>S</b>ciences <b>T</b>hrough <b>O</b>ccupational <b>R</b>esearch and <b>E</b>ngagement</p>
      </div>
    </div>

  );
}

export default HeroSection;
