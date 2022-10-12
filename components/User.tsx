import { Message } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
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
      .then((data) => dispatch(getUserPosts(data)))
      .catch((error) =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while fetching data!',
        })
      );
  }, []);
  return (
    <div className='bg-secondary p-6 rounded-2xl space-y-4'>
      <div className='flex space-x-3'>
        <img
          src='/assets/icons/avatar.svg'
          alt='user'
          className='self-start w-12 rounded-full bg-white'
        />
        <div className='spac-y-2'>
          <p className=' font-semibold text-lg md:text-xl'>{user.name}</p>
          <p className='font-medium text-base md:text-lg'>{user.username}</p>
          <p className='font-medium text-sm md:text-lg'>{user.email}</p>
        </div>
      </div>
      <div className='grid'>
        <p
          className='flex space-x-2 items-center cursor-pointer place-self-end'
          onClick={() => setOpenPosts(!openPosts)}
        >
          <Message size='16' color='#0f172a' />{' '}
          <span className='hover:text-primary'>
            {!openPosts ? 'View Posts' : 'Close Posts'}
          </span>
        </p>
      </div>
      {openPosts &&
        userPosts?.map((post: any) => (
          <Post post={post} key={post.id} isUserPosts={true} />
        ))}
    </div>
  );
};

export default User;
