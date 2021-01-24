import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Layout } from 'components/Layout';
import styled from 'styled-components';
import type firebase from 'firebase';

import { getUserInfomation } from 'utils/firebase/signInGoogle';
import { signOut } from 'utils/firebase/signout';
import { createUser } from 'utils/firebase/firestore';

// 普通のimport
// import { 変数/関数名 } from 'ファイルがあるパス'
const Div = styled('nav')`
  height: 500px;

  background-image: url('/umi.jpg');
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  /* appearance: none;
  color: #ffffff;
  background-color: #000000;
  margin: 30px, 1000px, 5000px, 50px;
  float: right;
  width: 100px; */
  height: 30px;
  width: 400px;
  border: 1px solid white;
  background: transparent;
  color: white;
  display: block;
  margin: 1rem auto;
  min-width: 1px;
  padding: 0.25rem;
  transition: 250ms background ease-in;
  &:hover,
  &:focus {
    background: white;
    color: black;
    transition: 250ms background ease-in;
  }
`;
const UU = styled('nav')`
  color: #ffffff;
  height: 200px;
  vertical-align: bottom;
  margin: 0;
`;
const ButtonLogout = styled('nav')`
  height: 30px;
  text-align: center;
  border: 1px solid white;
  background: transparent;
  color: white;
  display: block;
  margin: 1rem auto;
  min-width: 1px;
  padding: 0.25rem;
  transition: 250ms background ease-in;
  &:hover,
  &:focus {
    background: white;
    color: black;
    transition: 250ms background ease-in;
  }
`;
const SigninPage: React.VFC = () => {
  // const [hozonSareruHensuu, HozonSuruKansuu] = useState()
  const [user, setUser] = useState<firebase.User>();

  const setUserFromGoogleSign = async () => {
    const user = await getUserInfomation();

    // サインインに失敗していなかったら
    if (user !== null) {
      setUser(user);
      await createUser(user.uid);
    }
  };

  const singOutState = async () => {
    // サインアウト処理
    await signOut();

    setUser(undefined);
  };

  // user => undefinedならログインしてない
  // user => googleからとってきた情報が入っている時 = ログイン済み

  // "100" == 100 => true
  // "100" === 100 => false
  // <p>{user.hogehogeho-}</p>

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <Div>
        <Button onClick={setUserFromGoogleSign}>Googleでログイン</Button>
        <UU>{user === undefined && <p>未ログイン</p>}</UU>
        {user !== undefined && (
          <div>
            <p>{user.displayName}</p>
            <p>{user.email}</p>
            <ButtonLogout onClick={singOutState}>ログアウト</ButtonLogout>
          </div>
        )}
      </Div>
    </Layout>
  );
};
export default SigninPage;
