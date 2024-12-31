import React from 'react';
import Navbar from '../Components/Navbar';
import BannerImage from '../assets/home-banner-background.png';
import Logo from "../assets/Logo.svg";
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Contacts = () => {
    return (
        <div className="home-contacts">
        <Navbar />
        <div className="contacts-banner-container">
            {/* <img className="contacts-image" src={BannerImage} alt="" /> */}
            <p className="contact-title">
                Connect With Us 
                <li className="contact-logo"><Link to="/" ><img src={Logo} alt="" /></Link></li>
            </p>
            <div className="contacts-social-media">
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebook />
            </div>
        </div>
        <Footer />
    </div>
    );
    
};

export default Contacts;