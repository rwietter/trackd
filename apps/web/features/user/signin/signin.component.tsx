/* eslint-disable complexity */
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/router';

import { setCookie } from 'nookies';

import { notify } from '@/helpers/notify';
import { zodOptions } from '@/helpers/zod/zod-options';
import { api } from '@/services/api';


import { IRespError } from '../../../@types/axios';
import {
  Button,
  Fieldset,
  Flex,
  Input,
  Label,
  TabsContent,
  Text,
  ErrorMessage,
} from '../styles';
import { signinSchema } from './validations';

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(zodOptions(signinSchema));

  const router = useRouter();

  const submit = handleSubmit(async (data) => {
    try {
      const response = await api.post('/admin/signin', { ...data });
      if (!response.data?.hasError) {
        setCookie(null, 'auth::token', response.data?.payload?.token);
        router.push('/admin');
      }
    } catch (_error) {
      const err = _error as IRespError;
      notify(err?.response?.data?.message, 'error');
    }
  });

  return (
    <form onSubmit={submit}>
      <TabsContent value="tab2">
        <Text>Faça seu login aqui.</Text>
        <Fieldset>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="jhondoe@gmail.com"
            handle={errors.email && 'error'}
            {...register('email')}
          />
          {errors.email && <ErrorMessage>Please, enter a valid email address</ErrorMessage>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="********"
            handle={errors.password && 'error'}
            {...register('password')}
          />
          { errors.password && <ErrorMessage>Invalid password</ErrorMessage> }
        </Fieldset>
        <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
          <Button variant="green">Entrar</Button>
        </Flex>
      </TabsContent>
    </form>
  );
}
