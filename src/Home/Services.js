import React, { useState } from 'react';
import '../Style/Services.css';

const services = [
  {
    id: '01',
    title: 'Film & Photography',
    description: (
      <>
        <p><b>Stories that move. Frames that stay.</b></p>
        <p>From brand films to product shoots, we bring visuals to life that go beyond appearances. They leave an impression. We approach direction with clarity, shoot with care, and edit with feeling. Each frame has a purpose.</p>
      </>
    ),
    link: {
      // href: 'https://vervemedia.co.in/film-production-company',
      label: 'See what we’ve filmed'
    }
  },
  {
    id: '02',
    title: 'Digital Marketing',
    description: (
      <>
        <p><b>Visibility is just the start.</b></p>
        <p>Strategy, content, and tech come together in our campaigns to help you get noticed, engaged with, and remembered. By linking the right audience to the right message, we build narratives that deliver meaningful impact.</p>
      </>
    ),
    link: {
      // href: 'https://vervemedia.co.in/digital-marketing-agency',
      label: 'Dive into our strategy'
    }
  },
  {
    id: '03',
    title: 'Web Development',
    description: (
      <>
        <p><b>Pixel‑perfect meets purpose‑built.</b></p>
        <p>Our team designs and develops digital products built for performance. Smooth, scalable, and smart from the ground up. Beginning with clean wireframes to refined UI/UX, the outcome is always clarity in experience.</p>
      </>
    ),
    link: {
      // href: 'https://vervemedia.co.in/web-development-agency',
      label: 'Explore our builds'
    }
  },
  {
    id: '04',
    title: 'Graphic Designing',
    description: (
      <>
        <p><b>Design that thinks before it speaks.</b></p>
        <p>Every visual is the result of thought and purpose. It mirrors your brand and speaks directly to your audience. Beyond visual appeal, we embed meaning, usability, and recall into every piece.</p>
      </>
    ),
    link: {
      // href: 'https://vervemedia.co.in/graphic-design-agency',
      label: 'Browse our work'
    }
  }
];

const Services = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="section_3 py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h2 className="inter heading-2">Our Services</h2>
          </div>
        </div>

        <div className="faq">
          {services.map((svc, idx) => (
            <div key={idx} className="faq-item mb-3" style={{ '--order': idx }}>
              <button className="faq-question d-flex justify-content-between align-items-center w-100 px-4 py-3 text-white "
              style={{ background: 'transparent' }}
                      onClick={() => toggle(svc.id)}>
                <div className="services_title d-flex align-items-center gap-2">
                  <span className="inter me-3">{svc.id}</span>
                  <span className="syne">{svc.title}</span>
                </div>
                <span className={`faq-arrow ${openId === svc.id ? 'open' : ''}`}>
                  +
                </span>
              </button>

              <div className={`faq-answer text-white  ${openId === svc.id ? 'expanded' : ''}`}>
                {svc.description}
                <div className="mt-3">
                  <a href={svc.link.href} className="btn btn-outline-light">{svc.link.label}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
