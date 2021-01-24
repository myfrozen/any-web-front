import firebase from 'firebase';
import { firebaseApp } from './firebase';

// googleでサインインしてuser情報をreturnします
export async function getUserInfomation() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await firebaseApp.auth().signInWithPopup(provider);
  return result.user;
}
