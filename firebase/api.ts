import { collection, getDocs } from "firebase/firestore";
import { db } from "./init";

const ROOM_ID = "A738YwZinTQjpss2kL7u";

export const getRoomOptionDocs = () => {
  return getDocs(collection(db, "rooms", ROOM_ID, "options"));
};

export const getRoomMemberDocs = () => {
  return getDocs(collection(db, "rooms", ROOM_ID, "members"));
};

export const getRoomDocs = () => {
  return getDocs(collection(db, "rooms"));
};
