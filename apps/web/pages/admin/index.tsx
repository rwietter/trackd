/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/no-unused-prop-types */
import React, { FC, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { CiGrid41, CiLocationOn, CiTimer } from 'react-icons/ci';

// import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { Row } from 'antd';

import { parseCookies } from 'nookies';

import { EditProfile } from '@/components/edit-profile';
import { Header } from '@/components/header';
import { api } from '@/services/api';

import { Constants } from '../../constants';
import * as S from '../../features/admin/styles'
import withAuth from '../../hoc/withAuth';
import { AdminStore, useAdmin } from '../../store';

type Props = {
  closeModal: () => void;
  open: boolean;
  admin: Admin
}

const IMAGE = "https://images.unsplash.com/photo-1670502368091-7ecb110e2fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"

const parseDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: any = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  const formatter = new Intl.DateTimeFormat('pt-BR', options);

  try {
    return formatter.format(date);
  } catch (error) {
    return dateString;
  }
}


const AdminProfile: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setAdmin, admin }  = useAdmin() as AdminStore;

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  const fetch = async () => { 
    try {
      const response = await api.get('/admin', {
        headers: {
          Authorization: `Bearer ${parseCookies()[Constants.AUTH_TOKEN]}`,
        }
      });

      if (response.data) {
        setAdmin(response.data);
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao obter seu perfil. Tente fazer login novamente!');
    }
  }

  useEffect(() => {
    fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lastUpdated = parseDate(admin?.updatedAt);

  return (
    <S.Wrapper>
      <Header
        withMenu={false}
        url="/dashboard"
      />
      <Row>
        <S.CoverImage src={IMAGE} />
      </Row>
      <S.Container>
        <Row>
          <S.ProfileEdit>
            <S.ProfileImage src={IMAGE} />
            <S.EditIcon
              size={30}
              onClick={openModal}
            />
          </S.ProfileEdit>
          <S.ProfileContent className="name">
            <S.Name>{admin?.name}</S.Name>
            <S.Username>@{admin?.username}</S.Username>
            <S.Description>
              <CiLocationOn
                size={20}
                color="var(--colors-text)"
              />
              <S.City>{admin?.city}</S.City>
              <S.Padding />
              <CiGrid41
                size={20}
                color="var(--colors-text)"
              />
              <S.Work>{admin?.work}</S.Work>
            </S.Description>
          </S.ProfileContent>
        </Row>
        <Row>
          <S.History>
            <S.HistoryTitle>Ultima atualização</S.HistoryTitle>
            <S.LastUpdated>
              <CiTimer size={20} />
              <span>{lastUpdated}</span>
            </S.LastUpdated>
          </S.History>
        </Row>
      </S.Container>

      <EditProfile
        closeModal={closeModal}
        open={open}
      />
    </S.Wrapper>
  );
};

export default withAuth(AdminProfile);

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const session = parseCookies(ctx)['auth::token'];

//   if (!session) {
//     return {
//       props: {
//         authenticated: false
//       },
//       redirect: {
//         destination: '/sign',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       authenticated: true,
//     }
//   }
// }