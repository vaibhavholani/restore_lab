import React from 'react';
import '../../App.css';
import HomeCards from './HomeCards';
import HomeTitle from './HomeTitle';
import HomeAboutUs from './HomeAboutUs';
// import HomeImageSlider from './HomeCarousel';
import HomeLeader from './HomeLeader';
import TwitterData from './TwitterData';
import HomeDynamicTitle from './HomeDynamicTitle';
import Banner from '../banner/Banner'


function Home() {
  return (
    <div>
      <HomeDynamicTitle/>
      {/* <HomeTitle /> */}
      {/* <Banner/> */}
      <HomeAboutUs/>
      <HomeLeader />
      {/* <HomeImageSlider /> */}
      {/* <HomeCards /> */}
      {/* <TwitterData/> */}
    </div>
  );
}

export default Home;
