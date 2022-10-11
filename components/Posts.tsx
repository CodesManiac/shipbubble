import React from 'react';
import Post from './Post';

const Posts = () => {
  return (
    <section className='space-y-4'>
      <h1 className='font-medium text-lg text-center mb-4'>Posts</h1>
      <Post />
    </section>
  );
};

export default Posts;
