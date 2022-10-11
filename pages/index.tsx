import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import Posts from '../components/Posts';
import Users from '../components/Users';
import { getAllPosts } from '../slices/postsSlice';
import { getAllUsers } from '../slices/usersSlice';
import Swal from 'sweetalert2';
const Home = ({
  viewAllPosts,
  viewAllUsers,
}: {
  viewAllPosts: [];
  viewAllUsers: [];
}) => {
  const visibility = useSelector((state: RootState) => state.posts.visibility);
  const dispatch = useDispatch();
  dispatch(getAllPosts(viewAllPosts));
  dispatch(getAllUsers(viewAllUsers));
  return (
    <Layout>
      <div className='p-6 mb-20'>{visibility ? <Posts /> : <Users />}</div>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  try {
    const getAllPosts = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const getAllUsers = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );

    const postsData = await getAllPosts.json();
    const usersData = await getAllUsers.json();

    return {
      props: {
        viewAllPosts: postsData,
        viewAllUsers: usersData,
      },
    };
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong while fetching data!',
    });
  }
};
