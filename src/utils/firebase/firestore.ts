import firebase from 'firebase';
import { IChat } from 'interface/chat';
import { firebaseApp } from './firebase';

export async function createUser(uuid: string) {
  const db = firebaseApp.firestore();
  const userRef = db.collection('users').doc(uuid);
  const user = (await userRef.get()).data();

  if (!user) {
    userRef.set({ displayName: 'none', icon: 0, uid: uuid });
  }
}

// chatデータを含んだcollection snapshotを取得
const getGeneralChatCollection = (db: firebase.firestore.Firestore) => {
  const CHAT_COLLECTION = 'chats';
  const CHAT_GENERAL_DOC = 'general';
  const CHAT_DATA_COLLECTION = 'data';

  return db
    .collection(CHAT_COLLECTION)
    .doc(CHAT_GENERAL_DOC)
    .collection(CHAT_DATA_COLLECTION);
};

// chatデータ全件をリアルタイムで取得開始する関数
export function fetchGeneralChats(setChat: (chat: IChat[]) => void) {
  const db = firebaseApp.firestore();
  const chatRef = getGeneralChatCollection(db);

  const unsubscribe = chatRef.onSnapshot((doc) => {
    const chats: any = [];
    doc.forEach((chat) => chats.push(chat.data()));
    setChat(chats);
  });

  // firebaseのデータをリアルタイムで購読するのをやめる関数を返す
  return unsubscribe;
}

// チャットを送信
export function setGeneralChat(chatData: IChat) {
  const db = firebaseApp.firestore();
  const chatRef = getGeneralChatCollection(db).doc();
  chatRef.set(chatData);
}
