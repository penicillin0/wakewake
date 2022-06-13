import {
  addDoc,
  collection,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { MemberType } from "../types/Member";
import { OptionType } from "../types/Option";
import { RoomType } from "../types/room";
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

export const getRoomDocs = async () => {
  return (await getDocs(collection(db, "rooms")))
    .docs as QueryDocumentSnapshot<RoomType>[];
};

export const addMember = (name: string, isLeader = false) => {
  return addDoc(collection(db, "rooms", ROOM_ID, "members"), {
    name: name,
    isLeader: isLeader,
  });
};
