import React from 'react';
import '../Style/about.css';

const About = () => {
  return (
    <section className="section_3 py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="row mb-4">
          <div className="col">
            <h2 className="inter heading-2">About Us</h2>
          </div>
        </div>


     

        <div className="row align-items-start">
          {/* Text Section */}
          <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
            <p className="inter para-main">
            We specialize in delivering high-quality video editing services tailored to your needs.
            </p>
            <p className="inter para-main">
            From capturing the magic of weddings, to creating captivating trailers, teasers, and reels, we ensure every moment is transformed into a story worth remembering.
            </p>
            <p className="inter para-main">
            Our expertise extends to producing highlight videos, impactful commercial films, and engaging event promos that help brands and businesses connect with their audiences.
            </p>
            <p className="inter para-main">
            For those who love to explore, we bring destinations to life with breathtaking travel videos. And when it comes to telling stories that matter, we craft meaningful documentaries with depth and clarity.
            </p>

            <p className="inter para-main">
            At Stallion Productions, we don’t just make videos.

              </p>

              <p className="inter para-main">
            At Stallion Productions, we don’t just make videos.
            We create experiences.
We create impact.
              </p>

            <div className="btn-main">
              <a className="btn-pls" href="https://vervemedia.co.in/about">
                <div className="glow"></div>
                <div className="btn"></div>
                <span className="inter">Read More</span>
              </a>
            </div>
          </div>

          {/* Counter Section */}
          <div className="col-lg-5   col-md-12">
  <div className="row counter_main gx-3 gy-3">
    <div className="col-6 col-md-6">
      <div className="counter-box text-center">
        <span className="counter-value" data-target="300">300+</span>
        <p className="inter para-main">Films</p>
      </div>
    </div>
    <div className="col-6 col-md-6">
      <div className="counter-box text-center">
        <span className="counter-value" data-target="250">250+</span>
        <p className="inter para-main">Brands</p>
      </div>
    </div>
    <div className="col-6 col-md-6">
      <div className="counter-box text-center">
        <span className="counter-value" data-target="100">100+</span>
        <p className="inter para-main">Websites</p>
      </div>
    </div>
    <div className="col-6 col-md-6">
      <div className="counter-box text-center">
        <span className="counter-value" data-target="10">10+</span>
        <p className="inter para-main">Awards</p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
