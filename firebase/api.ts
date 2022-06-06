import { collection, getDocs } from "firebase/firestore";
import { db } from "./init";

const ROOM_ID = "Ozf3P0b7FPVTYSse8ltE";

export const getRoomOptionDocs = () => {
  return getDocs(collection(db, "rooms", ROOM_ID, "options"));
};

export const getRoomUserDocs = () => {
  return getDocs(collection(db, "rooms", ROOM_ID, "users"));
};

export const getRoomDocs = () => {
  return getDocs(collection(db, "rooms"));
};
