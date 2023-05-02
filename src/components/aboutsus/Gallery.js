

import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Gallery() {
    
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
        adaptiveHeight: true,
    })

    const [banners, setBanner] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
    }, [])

  return (
   <div class="sliderContainer2" id="gallery">
    <Slider {...settings}>
    <div className='imagediv2'>
          <img src={process.env.PUBLIC_URL + "/assets/reSTORewhite.jpg"} class="edtimg2"/>          
          </div>
    <div className='imagediv2'>
            <img src={process.env.PUBLIC_URL + "/assets/labfam.png"} class="edtimg2"/>
          </div>
          <div className='imagediv2'>
          <img src={process.env.PUBLIC_URL + "/assets/partnersrestore.png"} class="edtimg2"/>          
          </div>

          <div className='imagediv2'>
          <img src={process.env.PUBLIC_URL + "/assets/pdmdr.nk.jpg"} class="edtimg2"/>          
          </div>

          
          <div className='imagediv2'>
          <img src={process.env.PUBLIC_URL + "/assets/microsoftteamsimage.png"} class="edtimg2"/>          
          </div>

                    


          <div className='imagediv2'>
          <img src={process.env.PUBLIC_URL + "/assets/event.jpg"} class="edtimg2"/>          
          </div>

          <div className='imagediv2'>
          <img src={process.env.PUBLIC_URL + "/assets/drawinglab.jpg"} class="edtimg2"/>          
          </div>

          
          <div className='imagediv2'>
          <img src={process.env.PUBLIC_URL + "/assets/Platinum.png"} class="edtimg2"/>          
          </div>
          
          
          

    </Slider>
    </div>
  )
}
