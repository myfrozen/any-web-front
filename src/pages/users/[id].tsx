import { GetServerSideProps } from 'next';
import styled from 'styled-components';

import { User } from 'reducers/user';
import { useSelector } from 'react-redux';
import { State } from 'reducers';
import { createInitialState } from 'utils/store';
import { resolveHostPath } from 'utils/resolveHostPath';

import { Layout } from 'components/Layout';
import { UserDetail } from 'components/UserDetail';

const Warn = styled('span')`
  color: red;
`;

type UserDetailProps = {
  id?: number;
  errors?: string;
};

const ServerSidePropsDetail: React.VFC<UserDetailProps> = ({
  id,
  errors,
}: UserDetailProps) => {
  const users = useSelector((state: State) => state.user);
  const targetUser = users.find((user) => user.id === id);
  if (errors || !targetUser) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <Warn>Error:</Warn> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        targetUser ? targetUser.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {targetUser && <UserDetail user={targetUser} />}
    </Layout>
  );
};

export default ServerSidePropsDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const res = await fetch(resolveHostPath('/api/users'));
    const json = await res.json();
    const users: User[] = json;
    return {
      props: {
        ...createInitialState({ user: users }),
        id: Number(params?.id),
      },
    };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
