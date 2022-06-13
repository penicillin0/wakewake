import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { GroupType } from "../../types/Group";
import { db } from "../init";

const ROOM_ID = "A738YwZinTQjpss2kL7u";

export const getGroupDocs = async () => {
  return (await getDocs(collection(db, "rooms", ROOM_ID, "groups"))).docs.map(
    (doc) => ({ ...doc.data(), documentId: doc.id })
  ) as GroupType[];
};

export const addGroup = async (name = "チーム名") => {
  const newGroup = { name };
  const newGroupRef = doc(collection(db, "rooms", ROOM_ID, "groups"));
  await setDoc(newGroupRef, newGroup);
  return;
};

const deleteGroup = async (id: string) => {
  return await deleteDoc(doc(db, "rooms", ROOM_ID, "groups", id));
};

export const deleteAllGroups = async () => {
  const groupDocumentIds = (
    await getDocs(collection(db, "rooms", ROOM_ID, "groups"))
  ).docs.map((doc) => doc.id);
  await Promise.all(groupDocumentIds.map((id) => deleteGroup(id)));
};
