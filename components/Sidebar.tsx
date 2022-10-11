import React, { useState } from 'react';
import { ArrowCircleRight, UserSearch } from 'iconsax-react';
import { useDispatch } from 'react-redux';
import { setVisibility } from '../slices/postsSlice';

const Sidebar = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const dispatch = useDispatch();
  return (
    <aside className=' py-4'>
      <div className='search_container flex items-center rounded-md p-2 border  border-white'>
        <UserSearch size='16' color='#ffffff' />
        <input
          type='text'
          placeholder='Search users'
          className='w-full outline-none bg-transparent placeholder:text-white placeholder:font-medium p-2'
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
      <div className='mt-4'>
        <div
          className='flex justify-between cursor-pointer items-center'
          onClick={() => dispatch(setVisibility())}
        >
          <h1 className='font-medium'>Posts</h1>

          <ArrowCircleRight size='32' color='#ffffff' />
        </div>

        <div
          className='mt-4 flex items-center  justify-between cursor-pointer'
          onClick={() => dispatch(setVisibility())}
        >
          <h1 className='font-medium'> Users</h1>

          <ArrowCircleRight size='32' color='#ffffff' />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;