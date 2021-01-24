import styled from 'styled-components';
import { BasicButton } from 'components/BasicButton';
import { useRef } from 'react';
import { setGeneralChat } from 'utils/firebase/firestore';
import { IChat } from 'interface/chat';
import firebase from 'firebase';

const Div = styled.div`
  margin-bottom: 0px;
  height: 20px;
  background-color: #ffffff;
  padding: 30px;
  display: flex;
`;

const Input = styled.input`
  height: 3px;
  width: 300px;
  background-color: #ffffff;
  margin-left: 400px;
  padding: 20px;
`;
type BasicFormProps = {};

export const BasicForm: React.VFC<BasicFormProps> = ({}: BasicFormProps) => {
  const messageRef = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    const message = messageRef.current?.value;

    if (!message) {
      return;
    }

    // 将来的にfirestoreに送信すれば良い
    // setGeneralChat関数を叩いて送信
    var user = firebase.auth().currentUser;
    if (user != null) {
      const chat: IChat = {
        comment: message,
        userId: user.uid,
        userName: user.displayName,
        photoURL: user.photoURL,
        timestamp: new Date().toString(),
      };
      setGeneralChat(chat);
    }
  };

  return (
    <Div>
      <Input type="text" ref={messageRef} />
      <BasicButton title="送信" onClick={sendMessage} />
    </Div>
  );
};
