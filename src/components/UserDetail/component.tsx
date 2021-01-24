import { User } from 'reducers/user';

type UserDetailProps = {
  user: User;
};

export const UserDetail: React.VFC<UserDetailProps> = ({
  user: user,
}: UserDetailProps) => {
  return (
    <div>
      <h1>Detail for {user.name}</h1>
      <p>ID: {user.id}</p>
    </div>
  );
};

