import React, { useState } from 'react';
import { hideVisibility, showVisibility } from '../slices/postsSlice';
import { setSearchInput } from '../slices/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CloseCircle, Menu, UserSearch } from 'iconsax-react';
import { RootState } from '../store';
const Header = () => {
  const visibility = useSelector((state: RootState) => state.posts.visibility);

  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);

  const handleNavSwitch = () => {
    setNav(!nav);
  };
  return (
    <header className='flex justify-between items-center bg-secondary p-6 sticky'>
      <h2 className='bg-clip-text font-bold text-xl text-transparent bg-gradient-to-r from-[#ea4996] to-[#8d56f4]'>
        Shipbubble
      </h2>
      <div className='hidden md:flex md:gap-5'>
        <div className='flex items-center rounded-md p-2 border  border-white'>
          <UserSearch size='16' color='#ffffff' />
          <input
            type='text'
            placeholder='Search users'
            className='outline-none bg-transparent placeholder:text-white placeholder:font-medium p-2'
            onChange={(e) => {
              dispatch(setSearchInput(e.target.value));
            }}
          />
        </div>
        <button
          onClick={() => dispatch(showVisibility())}
          className='py-2 px-4 rounded-lg font-medium md:font-semibold  hover:bg-primary'
        >
          View All Posts
        </button>
      </div>
      <div onClick={handleNavSwitch} className='block md:hidden'>
        <Menu size='24' color='#ffffff' />
      </div>
      <ul
        className={
          nav
            ? 'fixed flex flex-col right-0 top-0 w-3/5 h-1/4 px-4 space-y-5 bg-primary rounded-l-2xl ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed -right-full'
        }
      >
        <div className='flex justify-end pt-4 px-4'>
          {' '}
          <CloseCircle size='24' color='#ffffff' onClick={handleNavSwitch} />
        </div>
        {!visibility && (
          <div className='flex items-center rounded-md p-2 border border-white'>
            <UserSearch size='16' color='#ffffff' />
            <input
              type='text'
              placeholder='Search users'
              className='outline-none bg-transparent placeholder:text-white placeholder:font-medium p-2'
              onChange={(e) => {
                dispatch(setSearchInput(e.target.value));
              }}
            />
          </div>
        )}

        {visibility ? (
          <button
            onClick={() => dispatch(hideVisibility())}
            className='hamburger-button'
          >
            View All Users
          </button>
        ) : (
          <button
            onClick={() => dispatch(showVisibility())}
            className='hamburger-button'
          >
            View All Posts
          </button>
        )}
      </ul>
    </header>
  );
};

export default Header;
