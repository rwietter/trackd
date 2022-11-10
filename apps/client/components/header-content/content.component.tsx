import * as S from './styles';

type Props = {
  title: string,
  description: string,
};

export const HeaderContent = ({ title, description }: Props) => {
  return (
    <S.HeaderContent>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.HeaderContent>
  );
};
