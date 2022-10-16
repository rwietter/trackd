import { ProfileImage, ProfileLayout, ProfileName } from './styles';

type IProps = {
  name: string;
}

const image = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const Profile = ({ name = 'Admin' }: IProps) => (
  <ProfileLayout>
    <ProfileName>{ name }</ProfileName>
    <ProfileImage src={image}
      layout="fixed"
      width={40}
      height={40}
    />
  </ProfileLayout>
);

export { Profile };
