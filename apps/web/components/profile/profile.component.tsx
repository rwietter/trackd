import { DotsIcon } from 'ui';

import * as S from './styles';

type IProps = {
  name: string;
}

const image = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const Profile = ({ name = 'Admin' }: IProps) => (
  <S.ProfileLayout>
    <S.ProfileContent>
      <S.ProfileImage src={image}
        layout="fixed"
        width={30}
        height={30}
      />
      <S.ProfileName>{name}</S.ProfileName>
    </S.ProfileContent>
    <DotsIcon stroke='var(--colors-text)' fill="transparent" />
  </S.ProfileLayout>
);

export { Profile };
