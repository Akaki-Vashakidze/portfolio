import React from 'react';
import Image from 'next/image';
import propertyImg from  '/./public/Images/todo.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const todo = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={propertyImg}
        alt='/'
      />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'>Registration app</h2>
        <h3>Angular / Scss / Node js / Material</h3>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p>
          This is app for swim coaches. They can register their athletes on new competitions. 
        </p>
        <p>
          You can register only with single use activation code. Here is the email and pass to log in and check this out
        </p>
        <b>user@gmail.com</b>
        <b>user1234</b>
        <a
          href='https://github.com/Akaki-Vashakidze/regFront'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4 mr-8'>Code Front-end</button>
        </a>
        <a
          href='https://github.com/Akaki-Vashakidze/regBack'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4 mr-8'>Code Back-end</button>
        </a>
        <a
          href='https://embassy-swim-team.vercel.app/main?fbclid=IwAR2vrDOVTSu4zo9ZI23-ruEYXyVEi9u7aDJMUpRBoCpbcQ4qJJUzjWn4E1o'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4'>Demo</button>
        </a>
      </div>
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Angular
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Node
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Javascript
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> scss
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Material
            </p>
            
          </div>
        </div>
      </div>
      <Link href='/#projects'>
        <p className='underline cursor-pointer'>Back</p>
      </Link>
    </div>
  </div>
  )
}

export default todo