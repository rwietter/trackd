import type { NextPage } from 'next';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { SignForm } from '../features/user/sign.component';

import { Main } from '../features/user/styles';

const Home: NextPage = () => (
  <>
    <Head>
      <title>UBS Novo Xingu</title>
      <meta name="description" content="UBS Novo Xingu" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <Toaster />
      <SignForm />
    </Main>
  </>
);

export default Home;
