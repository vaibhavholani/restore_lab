import React from 'react';
import '../../App.css';
import HomeCards from './HomeCards';
import HomeTitle from './HomeTitle';
import HomeAboutUs from './HomeAboutUs';
import HomeImageSlider from './HomeCarousel';
import HomeLeader from './HomeLeader';
import TwitterData from './TwitterData';


function Home() {
  return (
    <>
      <HomeTitle />
      <HomeAboutUs/>
      <HomeLeader />
      {/* <HomeImageSlider /> */}
      <HomeCards />
      <TwitterData/>
    </>
  );
}

export default Home;
