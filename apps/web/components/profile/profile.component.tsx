/* eslint-disable react/no-unused-prop-types */
import { FC } from 'react';

import { useRouter } from 'next/router';

import { DotsIcon } from 'ui';

import * as S from './styles';

const image = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

type Props = {
  admin: Admin
}

const Profile: FC<Props> = ({ admin }) => {
  const router = useRouter();

  const handleToProfile = () => router.push('/admin');

  return (
    <S.ProfileLayout onClick={handleToProfile}>
      <S.ProfileContent >
        <S.ProfileImage
          src={image}
          layout="fixed"
          width={30}
          height={30}
        />
        <S.ProfileName>{admin?.name?.split(' ')[0] || " "}</S.ProfileName>
      </S.ProfileContent>
      <DotsIcon
        stroke='var(--colors-text)'
        fill="transparent"
      />
    </S.ProfileLayout>
  )
}
export { Profile };
