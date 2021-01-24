import { GetServerSideProps } from 'next';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';

import styled from 'styled-components';

import { User } from 'reducers/user';
import { Layout } from 'components/Layout';
import { UserList } from 'containers/UserList';
import { createInitialState } from 'utils/store';
import { resolveHostPath } from 'utils/resolveHostPath';

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
    background-image: linear-gradient(100deg, #9370db, #6495ed);
  height: 1000px;
}`;
const WithServerSifeProps: React.VFC = () => {
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <UL>
        <h1>Users List</h1>
        <p>
          Example fetching data from inside <code>getStaticProps()</code>.
        </p>
        <UserList />
      </UL>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(resolveHostPath('/api/users'));
  const json = await res.json();
  const users: User[] = json;
  return { props: createInitialState({ user: users }) };
};

export default WithServerSifeProps;
