import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { getAllTestimonials } from '../utils/local-data.js';
import BannerImage from '../assets/home-banner-background.png';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const data = getAllTestimonials();
        setTestimonials(data);

        const handleLoad = () => {
            const clientTabItems = document.querySelectorAll('.client-item');
            const showDiv = document.querySelector('.show-info');

            // Jika elemen tidak ditemukan, hentikan eksekusi
            if (!clientTabItems || !showDiv) return;

            clientTabItems.forEach((item) => {
                item.addEventListener('click', () => {
                    showInfo(item);
                });
            });

            const showInfo = (item) => {
                showDiv.querySelector('.show-img img').src = item.querySelector('.client-thumbnail img').src;
                showDiv.querySelector('.show-name').innerHTML = item.querySelector('.client-name').innerHTML;
                showDiv.querySelector('.show-navigation').innerHTML = item.querySelector('.client-designation').innerHTML;
                showDiv.querySelector('.show-description').innerHTML = item.querySelector('.client-description').innerHTML;
                setActiveTab(item);
            };

            const setActiveTab = (item) => {
                clientTabItems.forEach((tab) => {
                    tab.classList.remove('active'); // Reset active tab
                });
                item.classList.add('active'); // Set active tab
            };

            if (clientTabItems.length > 0) {
                showInfo(clientTabItems[0]); // Set default active tab
            }
        };

        // Tambahkan event listener pada saat DOM selesai dirender
        window.addEventListener('load', handleLoad);

        // Bersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div className="wrapper">
            <Navbar />
            <div className="testimonials">
                <div className="title">
                    <h2>Our <span>Testimonials</span></h2>
                    <h3>Our Clients</h3>
                </div>

                <div className="content">
                    <div className="clients-list">
                        <img className="testimonials-image" src={BannerImage} alt="" />
                        <div className="clients-tabs">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="client-item">
                                    <div className="client-thumbnail">
                                        <img src={testimonial.image} alt={testimonial.name} />
                                    </div>
                                    <div className="client-intro">
                                        <h5 className="client-name">{testimonial.name}</h5>
                                        <small className="client-designation">{testimonial.designation}</small>
                                        <p className="client-description">{testimonial.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="show-info">
                            {testimonials.length > 0 && (
                                <div className="show-item">
                                    <div className="show-img">
                                        <img src={testimonials[0].image} alt={testimonials[0].name} />
                                    </div>

                                    <div className="show-text">
                                        <div>
                                            <h4 className="show-name">{testimonials[0].name}</h4>
                                            <small className="show-navigation">{testimonials[0].designation}</small>
                                        </div>
                                        <p className="show-description">{testimonials[0].description}</p>
                                        <a href="#">Inquire now</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Testimonials;
