import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import laptop from '/./public/Images/laptop.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='mx-8 col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
             I am an enthusiastic, self-motivated, reliable, responsible and hard working person. After 3 years of studing programming I desire to start working 
             in this field. I am adaptable to all challenging situations and able to work well both in a team environment as well as using own initiative.
          </p>
          
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I am
            now spending my time building projects with Angular and
            learning backend technologies. 
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-11/12 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={laptop} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  )
}

export default About