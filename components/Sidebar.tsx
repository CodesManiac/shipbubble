import React, { useState } from 'react';
import { ArrowCircleRight, UserSearch } from 'iconsax-react';
import { useDispatch } from 'react-redux';
import { showVisibility, hideVisibility } from '../slices/postsSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <aside className='py-4'>
      <div className='mt-4'>
        <div
          className='flex justify-between cursor-pointer items-center hover:text-primary'
          onClick={() => dispatch(showVisibility())}
        >
          <h1 className='font-medium hover:font-bold'>Posts</h1>

          <ArrowCircleRight size='32' color='#ffffff' />
        </div>

        <div
          className='mt-4 flex items-center  justify-between cursor-pointer  hover:text-primary'
          onClick={() => dispatch(hideVisibility())}
        >
          <h1 className='font-medium hover:font-semibold'> Users</h1>

          <ArrowCircleRight size='32' color='#ffffff' />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
