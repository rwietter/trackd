/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { parseCookies } from 'nookies';

import { MenuItem } from '@/components/menu-items';
import { Profile } from '@/components/profile';
import { useMount } from '@/hooks/useMount';
import { api } from '@/services/api';

import { AdminStore, MenuStore, useAdmin, useMenu } from '../../store';
import { Spinner } from '../spinner';
import { NavBarLayout } from './styles';


const Navbar = () => {
  const { menu } = useMenu() as MenuStore;
  
  const router = useRouter();
  
  const { isMounted } = useMount();
  const { setAdmin, admin }  = useAdmin() as AdminStore;

  async function handleFetchUser() {
    try {
      const token = parseCookies()['auth::token'] as string;
      
      const response: any = await api.get('/admin', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if(response?.data) {
        setAdmin(response.data)
      }
    } catch (error: any) {
      if (!error?.response?.data?.isAutenticated) {
        router.push('/sign')
      }
    }
  }

  useEffect(() => {
    handleFetchUser()
  }, [])

  if (!isMounted) {
    <Spinner
      center
      size='small'
    />
  }

  return (
    <NavBarLayout data-menu={menu}>
      <MenuItem />
      <Profile admin={admin} />
    </NavBarLayout>
  )
}

export { Navbar };