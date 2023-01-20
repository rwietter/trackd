/* eslint-disable react/no-unused-prop-types */
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { parseCookies } from 'nookies';

import { Header } from '@/components/header';
import { SignForm } from '@/features/user';
import { Main } from '@/features/user/styles';

function Sign() {
  return (
    <>
      <Head>
        <title>UBS Novo Xingu</title>
        <meta
          name="description"
          content="UBS Novo Xingu"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header
        url='/sign'
        withMenu={false}
      />
      <Main>
        <SignForm />
      </Main>
    </>
  );
}

export default Sign;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = parseCookies(ctx)['auth::token'];

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