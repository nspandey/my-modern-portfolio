import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
      className='mt-20'
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </motion.div>
      <motion.h3
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi! I'm Nilesh Pandey
        <Image src={assets.hand_icon} alt='' className='w-6' />
      </motion.h3>
      <motion.h1
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        "MERN" stack developer based in India.
      </motion.h1>


      <div className='flex flex-cols sm:flex-wor items-center gap-4 mt-4'>
        <motion.a
          href='#contact'
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Contact Me <Image src={assets.right_arrow} alt='' className='w-4' />
        </motion.a>
        <motion.a
          href='/Nilesh_Resume.pdf'
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          My Resume <Image src={assets.download_icon} alt='' className='w-4' />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
