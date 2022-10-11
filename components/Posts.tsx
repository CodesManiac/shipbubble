import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Post from './Post';

const Posts = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  return (
    <section className='space-y-4'>
      <h1 className='font-medium text-lg text-center mb-4'>Posts</h1>
      {posts?.map((post: any) => (
        <Post post={post} key={post.id} />
      ))}
    </section>
  );
};

export default Posts;
