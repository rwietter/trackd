/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/no-unused-prop-types */
import { FC, useEffect, useReducer } from 'react';
import { toast } from 'react-hot-toast';

import {  Row } from 'antd';

import { parseCookies } from 'nookies';

import { Button } from '@/features/ui/button';
import { Label } from '@/features/user/styles';
import { api } from '@/services/api';

import { AdminStore, useAdmin } from '../../store';
import * as S from './styles';

type Props = {
  closeModal: () => void;
  open: boolean;
}

const IMAGE = "https://images.unsplash.com/photo-1670502368091-7ecb110e2fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"

const EditProfile: FC<Props> = ({ open, closeModal }) => {
  const { setAdmin, admin }  = useAdmin() as AdminStore;
  const [user, setUser] = useReducer((state: Admin, newState: Partial<Admin>): Admin => ({
    ...state,
    ...newState
  }), admin);

  useEffect(() => { 
    setUser({
      ...admin
    });
  }, [admin]);


  const handleSubmit = async () => { 
    try {
      const response = await api.put(`/admin`, {
        user: {
          ...user,
        }
      }, {
        headers: {
          Authorization: `Bearer ${parseCookies()['auth::token']}`,
        },
        params: {
          id: user.id,
        }
      });

      if (response?.data) {
        setAdmin(response.data.user);
        toast.success('Perfil atualizado com sucesso!');
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao atualizar o perfil. Tente novamente!');
    }
  }

  return (
    <S.Modal
      open={open}
      title="Editar Perfil"
      onCancel={closeModal}
      footer={[
        <Button
          key="submit"
          type="button"
          onClick={handleSubmit}
        >
          Salvar
        </Button>
        ]}
    >
      <S.Form onSubmit={handleSubmit}>
        <Row>
          <S.CoverImage src={IMAGE} />
        </Row>
        <Row>
          <S.ProfileImage src={IMAGE} />
          <S.ProfileContent>
            <Label htmlFor="name">Nome</Label>
            <S.Name
              value={user.name}
              name="name"
              onChange={(e) => setUser({ name: e.target.value })}
            />
            <S.Padding />
            <Label htmlFor="username">Usuário</Label>
            <S.Username
              value={user.username}
              name="username"
              onChange={(e) => setUser({ username: e.target.value })}
            />
            <S.Description>
              <S.Inforow>
                <Label htmlFor="city">Cidade</Label>
                <S.City
                  value={user.city}
                  name="city"
                  onChange={(e) => setUser({ city: e.target.value })}
                />
                <S.Padding />
                <Label htmlFor="work">Trabalho</Label>
                <S.Work
                  value={user.work}
                  name="work"
                  onChange={(e) => setUser({ work: e.target.value })}
                />
              </S.Inforow>
            </S.Description>
          </S.ProfileContent>
        </Row>
      </S.Form>
    </S.Modal>
  );
};

export { EditProfile }
