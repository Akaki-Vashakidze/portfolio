import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import guide from '/./public/Images/guide.png';
import todo from '/./public/Images/todo.png';
import swimTeam from '/./public/Images/swimTeam.png';
import PoolManagement from '/./public/Images/PoolManagement.png';

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
            title='Travel App'
            backgroundImg={guide}
            projectUrl='/guide'
            tech='Angular'
          
          />
          <ProjectItem
            title='Todo App'
            backgroundImg={todo}
            projectUrl='/todo'
            tech='Angular'
           
          />
          <ProjectItem
            title='Swim Team Website'
            backgroundImg={swimTeam}
            projectUrl='/swimTeam'
            tech='Angular'
           
          />
          
          <ProjectItem
            title='Pool Management System'
            backgroundImg={PoolManagement}
            projectUrl='/PoolManegment'
            tech='Angular'
           
          />

         

        </div>
      </div>
    </div>
  );
};

export default Projects;
