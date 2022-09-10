import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import swim from '/./public/Images/swim.jpg';
import hiking from '/./public/Images/hiking.jpg';
import sports from '/./public/Images/sports.jpg';
import food from '/./public/Images/food.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='ml-8 text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='ml-8 py-4'>What I&apos;ve Built</h2>
        <div className='px-6 grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={swim}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={sports}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={hiking}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={food}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
