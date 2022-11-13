/* eslint-disable react/no-unused-prop-types */
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { parseCookies } from 'nookies';

import { SignForm } from '../features/user/sign.component';
import { Main } from '../features/user/styles';

type Props = {
  authenticated: boolean
}

function Home({ authenticated }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (authenticated) {
      router.push('/dashboard')
    }
  }, [authenticated, router])

  return (
    <>
      <Head>
        <title>UBS Novo Xingu</title>
        <meta name="description"
          content="UBS Novo Xingu"
        />
        <link rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Main>
        <Toaster />
        <SignForm />
      </Main>
    </>
  );
}

export default Home;


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await parseCookies(ctx)['auth::token'];

  if (!session) {
    return {
      props: {
        authenticated: false
      },
    }
  }

  return {
    props: {
      authenticated: true
    },
    redirect: {
      destination: '/dashboard'
    }
  }
}