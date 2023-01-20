/* eslint-disable consistent-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import React, { useEffect } from 'react'

import { parseCookies, destroyCookie } from 'nookies'

import { api } from '@/services/api';

import { Constants } from '../constants';

type Props = {
  children: React.ReactNode;
}

const isSecurityRoute = async (token: string) => {
  try {
    const response = await api.get('/admin', {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    })

    if (response.status === 201) {
      return true
    }

  } catch (error: any) {
    if(!error?.response?.data?.isAutenticated) {
      return false
    }
  }
}

const withAuth = (Component: any) => {
  return (props: any) => {
    useEffect(() => {
      const token = parseCookies()[Constants.AUTH_TOKEN];

      if (!token) {
        destroyCookie(undefined, Constants.AUTH_TOKEN)
        window.location.href = '/sign'
      } else { 
        const verifySecurity = async () => { 
          const isSecurity = await isSecurityRoute(token);

          if(!isSecurity) {
            destroyCookie(undefined, Constants.AUTH_TOKEN)
            window.location.href = '/sign'
          }
        }

        verifySecurity();
      }
    }, []);
    return <Component {...props} />;
  };
};

export default withAuth;