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
            If you are looking for high quality of results - I am the right person for you and your project.
          </p>

          <p className='py-2 text-gray-600'>
            I am an experienced web front/back-end developer.
            I have worked with Angular for over 3 years.
            Also highly experienced with JS, React, Node.js, Bootstrap, Material, Jquery etc.

            The main goal for me - to take your project and lead it to a successful finish.
            Done this a lot of times. You can count on me.
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