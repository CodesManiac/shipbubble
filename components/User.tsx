import { Message } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPosts } from '../slices/usersSlice';
import { RootState } from '../store';
import Post from './Post';

const User = ({ user }: any) => {
  const [openPosts, setOpenPosts] = useState(false);

  const dispatch = useDispatch();
  const userPosts = useSelector((state: RootState) => state.users.userPosts);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
      .then((response) => response.json())
      .then((data) => dispatch(getUserPosts(data)));
  }, []);
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
          <p
            className='flex space-x-2 items-center cursor-pointer'
            onClick={() => setOpenPosts(!openPosts)}
          >
            <Message size='16' color='#0f172a' />{' '}
            <span className='hover:text-primary'>
              {!openPosts ? 'View Posts' : 'Close Posts'}
            </span>
          </p>
        </div>
      </div>
      {openPosts &&
        userPosts?.map((post: any) => <Post post={post} isUserPosts={true} />)}
    </div>
  );
};

export default User;
