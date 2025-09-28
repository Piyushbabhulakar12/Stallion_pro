import React from 'react';
import '../Style/HeroSlider.css';

function HeroSlider() {

  const backgroundImage = 'https://vervemedia.co.in/Assets/Media/banner.jpg'

  return (
    <section
      className="banner hero"
      id="banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        // top: 0,
        // bottom: 0
      }}
    >
      {/* <div className="banner-overlay" id="bannerOverlay"></div> */}

      <div className="text-box" id="bannerText">
        <h1 className="syne heading-2">
        Visuals That Speak. Stories That Last.
        </h1>
        <p className="inter para-main hero-p">
        Stallion Productions blends creativity and technology to create timeless films for brands and businesses.        </p>
        <div className="btn-main text-center">
          <a className="btn-cls" href="https://vervemedia.co.in/contact">
            <div className="glow"></div>
            <div className="btn"></div>
            <span className="inter">Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
