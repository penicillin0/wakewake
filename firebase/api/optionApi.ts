import { collection, getDocs } from "firebase/firestore";
import { OptionType } from "../../types/Option";
import { db } from "../init";

const ROOM_ID = "A738YwZinTQjpss2kL7u";

export const getRoomOptions = async () => {
  return (await getDocs(collection(db, "rooms", ROOM_ID, "options"))).docs.map(
    (doc) => doc.data()
  ) as OptionType[];
};
