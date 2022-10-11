import React from 'react';
import { showVisibility } from '../slices/postsSlice';
import { useDispatch } from 'react-redux';
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className='flex justify-between items-center bg-secondary p-6 sticky'>
      <h2 className='bg-clip-text font-bold text-xl text-transparent bg-gradient-to-r from-[#ea4996] to-[#8d56f4]'>
        Shipbubble
      </h2>
      <button
        onClick={() => dispatch(showVisibility())}
        className='py-2 px-4 rounded-lg font-semibold  hover:bg-primary'
      >
        View All Posts
      </button>
    </header>
  );
};

export default Header;
