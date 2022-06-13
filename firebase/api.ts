import {
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { MemberType } from "../types/Member";
import { OptionType } from "../types/Option";
import { RoomType } from "../types/room";
import { db } from "./init";

const ROOM_ID = "A738YwZinTQjpss2kL7u";

export const getRoomOptionDocs = async () => {
  return (await getDocs(collection(db, "rooms", ROOM_ID, "options"))).docs.map(
    (doc) => doc.data()
  ) as OptionType[];
};

export const getRoomMemberDocs = async () => {
  const members = (
    await getDocs(collection(db, "rooms", ROOM_ID, "members"))
  ).docs.map((doc) => ({
    ...doc.data(),
    documentId: doc.id,
    createdAt: doc.data().createdAt.toDate(),
  })) as MemberType[];

  members.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));

  return members;
};

export const getRoomDocs = async () => {
  return (await getDocs(collection(db, "rooms"))).docs.map((doc) =>
    doc.data()
  ) as RoomType[];
};

export const addMember = async (name: string) => {
  const newMember = {
    name,
    isLeader: false,
    createdAt: serverTimestamp(),
  };

  const newMemberRef = doc(collection(db, "rooms", ROOM_ID, "members"));
  await setDoc(newMemberRef, newMember);

  const newMemberRes = (await getDoc(newMemberRef)).data();

  if (newMemberRes === undefined) throw new Error("Failed to add member");

  return {
    ...newMemberRes,
    documentId: newMemberRef.id,
    createdAt: newMemberRes.createdAt.toDate(),
  } as MemberType;
};
