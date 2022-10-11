import { Message, MessageRemove } from 'iconsax-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Post = ({ post }: any) => {
  const visibility = useSelector((state: RootState) => state.posts.visibility);

  return (
    <div
      className={
        visibility === false
          ? 'bg-primary p-6 rounded-2xl space-y-7'
          : 'bg-secondary p-6 rounded-2xl space-y-4'
      }
    >
      <p className='font-medium text-lg'>{post.title}</p>

      <p className=' font-normal text-base'>{post.body}</p>
      <div className='flex justify-between items-center'>
        <p className='post-navigation'>
          <Message size='16' color={visibility ? '#0f172a' : '#334155'} />{' '}
          <span
            className={
              visibility ? 'hover:text-primary' : 'hover:text-secondary'
            }
          >
            Comments
          </span>
        </p>
        <p className='post-navigation'>
          <MessageRemove size='16' color={visibility ? '#0f172a' : '#334155'} />
          <span
            className={
              visibility ? 'hover:text-primary' : 'hover:text-secondary'
            }
          >
            Delete
          </span>
        </p>
      </div>
    </div>
  );
};

export default Post;
