import {
  addDoc,
  collection,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { MemberType } from "../types/Member";
import { OptionType } from "../types/Options";
import { db } from "./init";

const ROOM_ID = "A738YwZinTQjpss2kL7u";

export const getRoomOptionDocs = async () => {
  return (await getDocs(collection(db, "rooms", ROOM_ID, "options")))
    .docs as QueryDocumentSnapshot<OptionType>[];
};

export const getRoomMemberDocs = async () => {
  return (await getDocs(collection(db, "rooms", ROOM_ID, "members")))
    .docs as QueryDocumentSnapshot<MemberType>[];
};

export const getRoomDocs = () => {
  return getDocs(collection(db, "rooms"));
};

export const setMember = (name: string, isLeader = false) => {
  return addDoc(collection(db, "rooms", ROOM_ID, "members"), {
    name: name,
    is_leader: isLeader,
  });
};
