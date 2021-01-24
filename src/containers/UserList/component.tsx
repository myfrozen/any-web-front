import { useUserList } from './hooks';
import { UserListItem } from 'components/UserListItem';
import styled from 'styled-components';

const UL = styled.p`
  color: #ffffff;
  font-size:30px;
	text-align:left;
	line-height:0.95em;
	font-weight:bold;
	text-shadow:
		0 0.03em 0.03em #FFAB91,
		0 0.03em 0.03em #000,
		0 0.03em 0.03em #FBE9E7;
}`;
export const UserList: React.VFC = () => {
  const { users } = useUserList();

  return (
    <UL>
      {users.map((user) => (
        <li key={user.id}>
          <UserListItem user={user} />
        </li>
      ))}
    </UL>
  );
};
