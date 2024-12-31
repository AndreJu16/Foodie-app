import React from 'react';
import AboutBackground from '../assets/about-background.png';
import AboutBackgroundImage from '../assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';



const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" id="home" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Food Is An Important Part Of A Balanced Diet</h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque obcaecati ipsam aliquam distinctio quam, facere dolorem cum consectetur molestiae nesciunt sequi laborum non minus cupiditate praesentium ut! Eos, veniam distinctio?
                </p>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laborum vero temporibus, adipisci excepturi iusto amet dolores error non quis quaerat voluptas. Quia commodi dolor iste obcaecati unde corrupti consequuntur.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">< BsFillPlayCircleFill />Watch Video</button>
                </div>
            </div>
        </div>
    )
}

export default About;