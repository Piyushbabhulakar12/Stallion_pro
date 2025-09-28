import React from 'react';
import Faq from '../Component/Faq.js';
import About from './About.js';
import HeroSlider from './HeroSlider.js';
import Process from './Process.js';
import Services from './Services.js';
import Team from './Team.js';
import TextSlider from './TestSlider.js';
import Work from './Work.js';
import SliderModern from './SliderModern.js';
import HeadSlide from './HeadSlide.js';
import Portfolio from './Portfolio.js';

function Index() {
  return (
    <>
        <HeroSlider />
        <HeadSlide />
        <About />
        <Services />
        <Portfolio />
    </>
  );
}

export default Index;