import React from 'react';

const Header = ({ viewAllPosts }: any) => {
  return (
    <header className='flex justify-between items-center bg-secondary p-6 sticky'>
      <h2 className='bg-clip-text font-bold text-xl text-transparent bg-gradient-to-r from-[#ea4996] to-[#8d56f4]'>
        Shipbubble
      </h2>
      <a
        href='/'
        className='py-2 px-4 rounded-lg font-semibold hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300'
      >
        View All Posts
      </a>
    </header>
  );
};

export default Header;
