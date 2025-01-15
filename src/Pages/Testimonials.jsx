import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { getAllTestimonials } from '../utils/local-data.js';
import BannerImage from '../assets/home-banner-background.png';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]); // State untuk daftar testimonial
    const [activeTestimonial, setActiveTestimonial] = useState(null); // State untuk testimonial yang sedang aktif

    // Ambil data testimonial saat pertama kali komponen dimuat
    useEffect(() => {
        const data = getAllTestimonials() || []; // Fallback jika data kosong
        setTestimonials(data);

        // Set testimonial pertama sebagai default aktif jika ada data
        if (data.length > 0) {
            setActiveTestimonial(data[0]);
        }
    }, []);

    // Fungsi untuk mengubah testimonial aktif saat diklik dan ini adalah kunci berjalan nya code
    const handleClick = (testimonial) => {
        setActiveTestimonial(testimonial);
    };

    return (
        <div className="wrapper">
            <Navbar />
            <div className="testimonials">
                {/* Bagian judul */}
                <div className="title">
                    <h2>
                        Our <span>Testimonials</span>
                    </h2>
                    <h3>Our Clients</h3>
                </div>

                {/* Bagian konten */}
                <div className="content">
                    <div className="clients-list">
                        <img className="testimonials-image" src={BannerImage} alt="" />

                        {/* Daftar testimonial */}
                        <div className="clients-tabs">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className={`client-item ${activeTestimonial?.id === testimonial.id ? 'active' : ''}`}
                                    onClick={() => handleClick(testimonial)}
                                >
                                    <div className="client-thumbnail">
                                        <img src={testimonial.image || 'default-image-path.jpg'} alt={testimonial.name} />
                                    </div>
                                    <div className="client-intro">
                                        <h5 className="client-name">{testimonial.name}</h5>
                                        <small className="client-designation">{testimonial.designation}</small>
                                        <p className="client-description">{testimonial.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Informasi testimonial aktif */}
                        {activeTestimonial && (
                            <div className="show-info">
                                <div className="show-item">
                                    <div className="show-img">
                                        <img
                                            src={activeTestimonial.image || 'default-image-path.jpg'}
                                            alt={activeTestimonial.name}
                                        />
                                    </div>
                                    <div className="show-text">
                                        <div>
                                            <h4 className="show-name">{activeTestimonial.name}</h4>
                                            <small className="show-navigation">{activeTestimonial.designation}</small>
                                        </div>
                                        <p className="show-description">{activeTestimonial.description}</p>
                                        <a href="#">Inquire now</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Testimonials;