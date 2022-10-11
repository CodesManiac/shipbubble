import Layout from '../components/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Posts from '../components/Posts';
import Users from '../components/Users';

const Home = () => {
  const visibility = useSelector((state: RootState) => state.posts.visibility);

  return (
    <Layout>
      <div className='p-6 mb-20'>{visibility ? <Posts /> : <Users />}</div>
    </Layout>
  );
};

export default Home;
