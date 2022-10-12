import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { UserType } from '../types/DataTypes';
import User from './User';

const Users = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const searchInput = useSelector(
    (state: RootState) => state.users.searchInput
  );

  return (
    <section className='space-y-4'>
      <h1 className='font-medium text-lg text-center mb-4'>Users</h1>
      {users
        .filter((user: UserType) => {
          if (searchInput == '') {
            return user;
          } else if (
            user.name?.toLowerCase().startsWith(searchInput.toLowerCase())
          ) {
            return user;
          }
        })
        .map((user: UserType) => (
          <User user={user} key={user.id} />
        ))}
    </section>
  );
};

export default Users;
