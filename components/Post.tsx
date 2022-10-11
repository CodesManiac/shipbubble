import { Message, MessageRemove } from 'iconsax-react';
import React from 'react';

const Post = () => {
  return (
    <div className='bg-secondary p-6 rounded-2xl space-y-4'>
      <p className='font-medium text-lg'>Title</p>

      <p className=' font-normal text-base'>Body</p>
      <div className='flex justify-between items-center'>
        <p className='post-navigation'>
          <Message size='16' color='#0f172a' />{' '}
          <span className='hover:text-primary'>Comments</span>
        </p>
        <p className='post-navigation'>
          <MessageRemove size='16' color='#0f172a' />
          <span className='hover:text-primary'>Delete</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
