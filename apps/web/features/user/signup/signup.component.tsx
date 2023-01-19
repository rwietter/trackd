/* eslint-disable complexity */
import { useForm } from 'react-hook-form';

import { notify } from '@/helpers/notify';
import { zodOptions } from '@/helpers/zod/zod-options';
import { api } from '@/services/api';

import { ResponseError } from '../../../@types/axios';
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
import { signupSchema } from './validations';

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(zodOptions(signupSchema));

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await api.post('/admin/signup', { ...data });

      if (!response.data?.hasError) {
        notify('Conta criada com sucesso!', 'success');
      }
    } catch (_error) {
      const err = _error as ResponseError;
      notify(err?.response?.data?.message, 'error');
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <TabsContent value="tab1">
        <Text>Faça seu cadastro de admin aqui.</Text>
        <Fieldset>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            placeholder="Jhon Doe"
            {...register('name')}
            handle={errors.name && 'error'}
          />
          {errors.name && <ErrorMessage>Please, enter your name</ErrorMessage>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            placeholder="jhondoe@gmail.com"
            type="email"
            handle={errors.email && 'error'}
            {...register('email')}
          />
          {errors.email && (
            <ErrorMessage>Please, enter a valid email address</ErrorMessage>
          )}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            placeholder="********"
            type="password"
            handle={errors.password && 'error'}
            {...register('password')}
          />
          {errors.password && (
            <ErrorMessage>
              Passwords must be six or more characteres
            </ErrorMessage>
          )}
        </Fieldset>
        <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
          <Button
            variant="green"
            type="submit"
          >
            Cadastrar
          </Button>
        </Flex>
      </TabsContent>
    </form>
  );
}
