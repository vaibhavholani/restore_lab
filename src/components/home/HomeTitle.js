import React, {useState, useEffect} from 'react';
import '../../App.css';
import './HomeTitle.css';

function HomeTitle() {

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
        <h1 class="main"><span style={{color: "white"}}>ReSTORE</span> Lab</h1>
        <p className="desc">
        <div><b>Re</b>habilitation </div>
        <div><b>S</b>ciences <b>T</b>hrough </div>
        <div><b>O</b>ccupational </div>
        <div><b>R</b>esearch </div>
        <div>and </div>
        <div><b>E</b>ngagement</div></p>
      </div>
    </div>

  );
}

export default HomeTitle;
