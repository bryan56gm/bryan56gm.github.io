import React from 'react';
// Styled Components
import { ProjectTitle } from './Project.styled';
// Components
import FlipCard from '../cards/FlipCard';
// SwiperJS CSS
import './project-swiper.css';
// ID generator
import { generate as id } from 'shortid';
// SwiperJS
import { register } from 'swiper/element/bundle';
register();

const ProjectSwiper = ({ title, navigationPrev, navigationNext, projects }) => {
  const swiperParams = {
    loop: "true",
    keyboard: "true",
    pagination: "true",
    'pagination-clickable': "true",
    'slides-per-view': "auto",
    'centered-slides': "true",
    'space-between': "30"
  };
  
  return (
    <section>
      <ProjectTitle>{title}</ProjectTitle>

      <div className='swiper-custom'>
        <swiper-container {...swiperParams} navigation-prev-el={`.${navigationPrev}`} navigation-next-el={`.${navigationNext}`}>
          {projects.map((project) => (
            <swiper-slide key={id()}>
              <FlipCard config={project} />
            </swiper-slide>
          ))}
        </swiper-container>

        <div className={`swiper-btn swiper-btn-prev ${navigationPrev}`}>
          <img src="/assets/icons/arrow-down.svg" alt="Icon prev button" />
        </div>
        <div className={`swiper-btn swiper-btn-next ${navigationNext}`}>
          <img src="/assets/icons/arrow-down.svg" alt="Icon next button" />
        </div>
      </div>
  </section>
  );
};


export default ProjectSwiper;