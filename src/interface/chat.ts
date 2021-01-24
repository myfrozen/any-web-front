export interface IChat {
  userId: string;
  userName: string;
  comment: string;
  timestamp: string;
  photoURL: string;
}

// const SampleChat: IChat = {
//   senderId: "0x0x0",
//   comment: "hogehoge",
//   timestamp: "Sat Jan 16 2021 17:02:27 GMT+0900 (日本標準時)"
// }

// a = new Date() => Date型
// a.getDate() -> 日付, a.getMonth() + 1 -> 月
// firebase -> milliSecond,

// a = new Date() -> ミリ秒(UNIX時間) -> firestore
// a = new Date().toString() -> "Sat Jan 16 2021 17:02:27 GMT+0900 (日本標準時)" => firestore

// firestore ->
// a = new Date("Sat Jan 16 2021 17:02:27 GMT+0900 (日本標準時)") -> 01/16 17:02:27
