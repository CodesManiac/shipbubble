import { Message, MessageRemove } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import {
  getAllPosts,
  getPostComments,
  setRemovedPost,
} from '../slices/postsSlice';
import { getUserPosts } from '../slices/usersSlice';
import { RootState } from '../store';
import Comments from './Comments';

const Post = ({ post }: any) => {
  const visibility = useSelector((state: RootState) => state.posts.visibility);
  const comments = useSelector((state: RootState) => state.posts.comments);
  const posts = useSelector((state: RootState) => state.posts.posts);
  const userPosts = useSelector((state: RootState) => state.users.userPosts);

  // console.log(
  //   'first post id is',
  //   posts.filter((post: any) => post.id)
  // );
  const [openComments, setOpenComments] = useState(false);
  const dispatch = useDispatch();

  const deletePost = (id: number) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        dispatch(setRemovedPost(id));
        dispatch(
          getUserPosts(
            userPosts.filter((userPost: any) => {
              return userPost.id !== id;
            })
          )
        );
        dispatch(
          getAllPosts(
            posts.filter((post: any) => {
              return post.id !== id;
            })
          )
        );

        Swal.fire({
          icon: 'success',
          title: 'Congratulations...',
          text: 'Post deleted successfully',
        });
      })
      .catch((error) =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Unable to delete post!',
        })
      );
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then((data) => dispatch(getPostComments(data)))
      .catch((error) =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while fetching data!',
        })
      );
  }, []);
  return (
    <div
      className={`${
        visibility ? 'bg-secondary' : 'bg-primary'
      } p-6 rounded-2xl space-y-7`}
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
            onClick={() => setOpenComments(!openComments)}
          >
            Comments
          </span>
        </p>
        <p className='post-navigation' onClick={() => deletePost(post.id)}>
          <MessageRemove size='16' color={visibility ? '#0f172a' : '#334155'} />
          <span
            className={
              visibility ? 'hover:text-primary' : 'hover:text-secondary '
            }
          >
            Delete
          </span>
        </p>
      </div>
      {openComments && <Comments comments={comments} />}
    </div>
  );
};

export default Post;
