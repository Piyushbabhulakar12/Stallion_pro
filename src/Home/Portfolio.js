
import React from "react";
import "../Style/Portfolio.css";

const portfolioItems = [
  {
    title: "Films",
    image: "https://vervemedia.co.in/Assets/Media/feature-home/videos.jpg",
    link: "https://vervemedia.co.in/portfolio/videos/",
    className: "bento-left",
  },
  {
    title: "Social Media",
    image: "https://vervemedia.co.in/Assets/Media/feature-home/social-media.jpg",
    mobileImage: "https://vervemedia.co.in/Assets/Media/feature-home/social-media-1.jpg",
    link: "https://vervemedia.co.in/portfolio/social-medias/",
    className: "social-media",
  },
  {
    title: "SEO",
    image: "https://vervemedia.co.in/Assets/Media/feature-home/seo.jpg",
    link: "https://vervemedia.co.in/portfolio/seo/",
    className: "seo",
  },
  {
    title: "Website",
    image: "https://vervemedia.co.in/Assets/Media/feature-home/website.jpg",
    link: "https://vervemedia.co.in/portfolio/website/",
    className: "website",
  },
  {
    title: "Documentaries",
    image: "https://vervemedia.co.in/Assets/Media/feature-home/video-bd-desk.jpg",
    mobileImage: "https://vervemedia.co.in/Assets/Media/feature-home/video-bd.jpg",
    link: "https://vervemedia.co.in/portfolio/videos/?cat=Documentaries",
    className: "documentaries",
  },
];

const Portfolio = () => {
  return (
    <section className="section_3">
      <div className="container">
        <div className="row head_main">
          <h2 className="heading-2">Portfolio</h2>
        </div>

        <div className="row">
          <div className="pros">
            <div className="pros-bento-layout">
              <div className="bento-top">
                {portfolioItems.map((item, index) => (
                  <div
                    key={index}
                    className={`bento-card ${item.className}`}
                    onClick={() => (window.location.href = item.link)}
                  >
                    <img
                      className="bento-desk"
                      src={item.image}
                      alt={item.title}
                    />
                    {item.mobileImage && (
                      <img
                        className="bento-mobile"
                        src={item.mobileImage}
                        alt={`${item.title} Mobile`}
                      />
                    )}
                    <div className="overlay"></div>
                    <div className="text-overlay">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Portfolio;
