import { collection, getDocs } from "firebase/firestore";
import { RoomType } from "../../types/Room";
import { db } from "../init";

export const getRoomDocs = async () => {
  return (await getDocs(collection(db, "rooms"))).docs.map((doc) =>
    doc.data()
  ) as RoomType[];
};
