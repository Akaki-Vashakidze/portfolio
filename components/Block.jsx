import React from 'react';
import bkImage from "/./public/Images/bees/background1.jpg";
import Image from 'next/image';
const Block = () => {

  return (
   <div className='block fixed'>
    <Image src={bkImage} alt='' className='bk'/>
   </div>
  )
}

export default Block