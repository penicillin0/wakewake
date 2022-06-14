import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { RoomType } from "../../types/Room";
import { db } from "../init";

export const getRooms = async () => {
  return (await getDocs(collection(db, "rooms"))).docs.map((doc) =>
    doc.data()
  ) as RoomType[];
};

export const getRoom = async (roomId: string) => {
  const room = await getDoc(doc(db, "rooms", roomId));
  return room.data() as RoomType;
};
