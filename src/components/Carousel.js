import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';
import './Carousel.css'

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
            <a href="/services/#behdin-service" target="_self">
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
                </a>
            </div>
            <div className="card-wrapper">
            <a href="/services/#parvin-service" target="_self">
                <div className="card">
                    <div className="card-image">
                        <img src="images/drparvin.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Dr. Parvin Efthekar</h2>
                        <span className="job-desc">Occupational Therapist</span>
                    </div>
                </div>
                </a>
            </div>

        </Slider>
        </div>
        </div>
    )
}

export default ImageSlider;