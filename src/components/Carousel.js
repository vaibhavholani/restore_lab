import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';
import './Carousel.css'
import { HashLink as Link} from 'react-router-hash-link';

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }

    return (
        <div class="names-carousel-container">
        <h1> Meet our Team! </h1>
        <div className='div1'>
        <Slider {...settings}>
            <div className="card-wrapper">
            <Link 
                to="/services#behdin-service" 
                onClick={() => {
                    setTimeout(function() {
                      window.scrollTo(window.scrollX, window.scrollY - 100);
                  }, 10);
                  }}
            >
                <div className="card">
                    <div className="card-image">
                        <img src="/images/behdin.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com/in/behdin-nowrouzi-kia-42591664/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://twitter.com/behdin" target="_blank"><i className="fa fa-twitter"></i></a></li>
                    </ul>
                    <div className="details">
                    <h2>Dr. Behdin Nowrouzi-Kia</h2>
                    <span className="job-desc">PhD, assistant professor @ Department of Occupational Therapy and Occupational Science</span>
                    </div>
                </div>
                </Link>
            </div>
            <div className="card-wrapper">
            <Link 
                to="/services#parvin-service"
                onClick={() => {
                    setTimeout(function() {
                      window.scrollTo(window.scrollX, window.scrollY - 100);
                  }, 10);
                  }}
            >
                <div className="card">
                    <div className="card-image">
                        <img src="images/drparvin.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com/in/parvin-eftekhar-b2a15892/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://twitter.com/ParvinEftekhar1"><i className="fa fa-twitter"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Dr. Parvin Efthekar</h2>
                        <span className="job-desc">Occupational Therapist</span>
                    </div>
                </div>
                </Link>
            </div>
        </Slider>
        </div>
        </div>
    )
}

export default ImageSlider;