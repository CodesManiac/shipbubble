import Head from 'next/head';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }: any) => {
  return (
    <div className=' h-screen bg-primary text-white overflow-hidden'>
      <Head>
        <title>Shipbubble Assessment</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className='flex w-full h-screen'>
        <div className=' w-1/4  bg-secondary border-r-2 px-6'>
          <Sidebar />
        </div>
        <div className='w-3/4 h-full overflow-auto'>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
