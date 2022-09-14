import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeTitle from './HomeTitle';
import Banner from '../banner/Banner'
import {bannerData} from '../banner/bannerData'
import {get_all_banner} from '../api_calls/get_all_banner'

export default function HomeDynamicTitle() {
    
    const [settings, setSettings] = useState({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear", 
        adaptiveHeight: true
    })

    const [banners, setBanner] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        get_all_banner(setBanner)
    }, [])

  return (
   <div class="sliderContainer">
    <Slider {...settings}>
    <HomeTitle/>
    {
        (banners ? banners: []).map(banner => {
            return (
              <Banner bannerData={banner}/>
            )
        })
    }
    </Slider>
   </div>
  )
}
