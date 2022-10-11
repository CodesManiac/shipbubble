import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Post from './Post';
import ReactPaginate from 'react-paginate';

const Posts = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setFilteredPosts(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };
  return (
    <section className='space-y-4'>
      <h1 className='font-medium text-lg text-center mb-4'>Posts</h1>
      {filteredPosts?.map((post: any) => (
        <Post post={post} key={post.id} />
      ))}

      <ReactPaginate
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='< previous'
        // renderOnZeroPageCount={null}
        nextClassName='pagination-content'
        pageLinkClassName='pagination-content'
        containerClassName='pagination'
        previousClassName='pagination-content'
        activeLinkClassName='active'
      />
    </section>
  );
};

export default Posts;
