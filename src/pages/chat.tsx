import React from 'react';
import { Layout } from 'components/Layout';
import styled from 'styled-components';
import { IChat } from 'interface/chat';

import { fetchGeneralChats } from 'utils/firebase/firestore';

const Background = styled.div`
  background-color: #6495ed;
  margin: 0;
  padding-top: 10px;
`;
// TODO:mockデータをfirestoreに置き換える
import { SpeechBubble } from 'components/SpeechBubble';
import { BasicForm } from 'components/BasicForm';

const Chat: React.VFC = () => {
  const [chats, setChats] = React.useState<IChat[]>([]);

  // setChats(ユーザ情報)
  // chats -> ユーザ情報を保存する場所

  React.useEffect(() => {
    // ページに入った時に実行される
    // チャットのデータの取得を開始する処理
    const cancel = fetchGeneralChats((chats) => {
      setChats(chats);
    });

    return cancel;
  }, []);

  return (
    <Layout title="Chat | Next.js + TypeScript Example">
      <Background>
        {chats.map((chat, index) => (
          <SpeechBubble
            key={index}
            username={chat.userName}
            timestamp={chat.timestamp}
            image={chat.photoURL}
            message={chat.comment}
          />
        ))}
        <BasicForm />
      </Background>
    </Layout>
  );
};

export default Chat;
