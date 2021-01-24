import Link from 'next/link';

import { User } from 'reducers/user';

type UserListItemProps = {
  user: User;
};

export const UserListItem: React.VFC<UserListItemProps> = ({
  user,
}: UserListItemProps) => {
  return (
    <Link href="/users/[id]" as={`/users/${user.id}`}>
      <a>
        {user.id}: {user.name}
      </a>
    </Link>
  );
};
