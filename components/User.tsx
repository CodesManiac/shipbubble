import { Message } from 'iconsax-react';
import React from 'react';

const User = ({ user }: any) => {
  return (
    <div className='bg-secondary p-6 rounded-2xl space-y-4'>
      <div className='flex space-x-3'>
        <img
          src='/assets/icons/avatar.svg'
          alt='user'
          className='self-start w-12'
        />
        <div className='flex w-4/5 justify-between'>
          <div className='spac-y-2'>
            <p className=' font-semibold text-xl'>{user.name}</p>
            <p className='font-medium text-lg'>{user.username}</p>
            <p className='font-medium text-lg'>{user.email}</p>
          </div>
          <p className='flex space-x-2 items-center cursor-pointer'>
            <Message size='16' color='#0f172a' />{' '}
            <span className='hover:text-primary'>View Posts</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
