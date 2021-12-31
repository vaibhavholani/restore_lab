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
        slidesToShow: 3,
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
                        <img src="images/nowrouzikia-behdin.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
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
            <div className="card-wrapper">
            <a href="/services/#alibbani-service" target="_self">
                <div className="card">
                    <div className="card-image">
                        <img src="images/dralibani.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Dr. Ali Bani-Fatemi </h2>
                        <span className="job-desc">Please provide Profession</span>
                    </div>
                </div>
                </a>
            </div>
            <div className="card-wrapper">
            <a href="/services/#abosede-service" target="_self">
                <div className="card">
                    <div className="card-image">
                        <img src="images/abosede.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Dr. Abosede Okoduwa</h2>
                        <span className="job-desc">Clinical research Intern</span>
                    </div>
                </div>
                </a>
            </div>
            <div className="card-wrapper">
            <a href="/services/#vanessa-service" target="_self">
                <div className="card">
                    <div className="card-image">
                        <img src="images/vanessa.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Vanessa Tam</h2>
                        <span className="job-desc">BKin, MScOT Student</span>
                    </div>
                </div>
                </a>
            </div>
            <div className="card-wrapper">
            <a href="/services/#joyce-service" target="_self">
                <div className="card">
                    <div className="card-image">
                        {/* <img src="vaibhav.jpg" /> */}
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Joyce Lo </h2>
                        <span className="-desc">Student @ UTSC, Specializing in Mental Health Studies</span>
                    </div>
                </div>
                </a>
            </div>
            <div className="card-wrapper">
            <a href="/services/#faizah-service" target="_self">
                <div className="card">
                    <div className="card-image">
                        <img src="images/faizah.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Faizah Abdullah </h2>
                        <span className="job-desc">Student @ UofT, Majoring in biochemistry and immunology</span>
                    </div>
                </div>
                </a>
            </div>
            <div className="card-wrapper">
            <a href="/services/#vaibhav-service" target="_self">
                <div className="card">
                    <div className="card-image">
                        <img src="images/vaibhav.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Vaibhav Holani</h2>
                        <span className="job-desc">Student @ Uoft, Majoring in Computer Science, Specializing in Machine Learning</span>
                    </div>
                </div>
                </a>
            </div>
            <div className="card-wrapper">
            <a href="/services/#vaibhav-service" target="_self">
                <div className="card">
                    <div className="card-image">
                        <img src="images/divij.jpg"/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Divij Sanjanwala </h2>
                        <span className="job-desc">Student @ UofT, Specializing in Computer Science, Economics, & Statistics</span>
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