import {
  addGroup,
  deleteAllGroups,
  getGroupDocs,
} from "../firebase/api/groupApi";
import { MemberType } from "../types/Member";

export const divideMember = async (members: MemberType[], groupNum: number) => {
  await deleteAllGroups();

  await Promise.all(
    [...Array(groupNum)].map((_, i) => addGroup(`チーム${i + 1}`))
  );

  const groups = await getGroupDocs();

  // membersをランダムソート
  const shuffledMembers = shuffle(members);

  return shuffledMembers.map((member, i) => ({
    ...member,
    groupId: groups[i % groups.length].documentId,
  })) as MemberType[];
};

function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; 0 < i; --i) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
