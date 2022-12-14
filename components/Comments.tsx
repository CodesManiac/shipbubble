import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Comments = ({ comments }: any) => {
  const visibility = useSelector((state: RootState) => state.posts.visibility);

  return (
    <div
      className={`${
        visibility ? 'bg-primary' : 'bg-secondary'
      } p-4 space-y-4 border-2 rounded-lg`}
    >
      {comments.map((comment: any) => (
        <p
          key={comment.id}
          className={`${
            visibility ? ' border border-secondary' : 'bg-primary'
          } text-justify text-sm p-2 rounded-lg`}
        >
          {comment.body}
        </p>
      ))}
    </div>
  );
};

export default Comments;
