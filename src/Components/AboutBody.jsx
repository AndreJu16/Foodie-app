import React from 'react';
import BosMuda from '../assets/bos_muda.png';
import Navbar from '../Components/Navbar';
import PanahBawah from '../assets/arrowdown.png';
import Logo from '../assets/Logo.svg';
import Diet from '../assets/diet_img.jpg';
import { HashLink as Link } from 'react-router-hash-link'; // fungsi nya seperti anchor di HTML tapi ini versi React
import SocialImpact from '../assets/social_impact.svg';
import Inovation from '../assets/about_us_speed.svg';
import Speed from '../assets/about_us_innovation.svg';


const AboutBody = () => {
    return (
        <div className="about-body">
            <Navbar />  {/* untuk manggil bagian navbar */}
            <div className="about-body-container">
                <div className="about-text-section">
                    <h1 className="primary-heading-about">
                        Diet adalah salah satu prioritas bagi kamu yang oversize
                    </h1>
                    <div className="button-container">
                        <div className="button-block">
                            <Link smooth to="#profile-section"> {/*ini adalah cara membuat link ke bawah */}
                                <button className="first-button">Mengapa itu penting ? </button>
                                <img className="button-image" src={PanahBawah} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="young-boss">
                    <img src={BosMuda} alt="" />
                </div>
            </div>
            <div className="profile-section-company">
                <div id="profile-section" className="profile-image-container" > {/* ini adalah id nya dari link diatas */}
                    <img src={Logo} alt="" id="profile" />
                </div>
                <div className="about-section-text-container">
                    <p className="first-paragraph">kami membantu klien dengan masalah kelebihan lemak dan nafsu makan tak terkontrol, untuk mencapai berat ideal serta meningkatkan kontrol diri. Program komprehensif Foodie dilengkapi dengan pola makan yang mudah diikuti efektif, serta program simulasi yang menarik di bawah pengawasan medis.
                        Dokter spesialis gizi, psikiater, psikolog, ahli gizi, dan perawat siap membuat program penurunan berat badan Anda mudah dan menyenangkan. Selain konsultasi dan terapi pembentukan tubuh seperti Injex, Lipostripping, lightWave, Lipo Burn dan banyak lainnya, klinik Foodie juga memberikan konsultasi psikologi serta hipnoterapi, relaksasi, dan terapi tingkah laku kognitif.
                        Didirikan sejak 2004, klinik Foodie kini sudah menangani lebih dari 26.000 pasien. Klinik yang sudah mengantongi sertifikat ISO 9001:2015 ini memiliki sebelas cabang di Kebayoran, Cilandak, Thamrin, BSD City, Cibubur, LOTTE Shopping Avenue, Lippo Mall Puri, Kelapa Gading dan 2 klinik di Surabaya dan Medan. Join us and get a fun, easy, and medically-supervised weight loss program!
                    </p>
                </div>
                <img className="image-profile-section" src={Diet} alt="" />
            </div>
            <div className="benefits-diet">
                <h1 className="title">Keuntungan mengikuti Diet Foodie</h1>
                <div className="cards">
                    <div className="card green">
                        <div className="text-section">
                        <h2>Melangsingkan Diri</h2>
                        <p>Dengan melangsingkan diri kita akan bersegera menjemput rejeki kita, dan layanan itu ada disini</p>
                        </div>
                        <img className="image-green" src={Inovation} alt="" />
                    </div>
                    <div className="card pink">
                        <h2>Inovasi</h2>
                        <p>Dengan langsing menyelesaikan masalah dalam skala besar</p>
                        <img src={SocialImpact} alt="" />
                    </div>
                    <div className="card orange">
                        <h2>Dampak Sosial</h2>
                        <p>Mentransformasi hidup menginspirasi perubahan</p>
                        <img src={Speed} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBody;