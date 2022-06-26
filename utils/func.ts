import { MemberType } from "../types/Member";

export const divideMember = (members: MemberType[], groupNum: number) => {
  const shuffledMembers = shuffle(members);
  const groupMembers = new Map<number, number[]>();
  shuffledMembers.map((m, index) => {
    const groupKey = index % groupNum;
    if (!groupMembers.has(groupKey)) {
      groupMembers.set(groupKey, [m.id]);
    } else {
      const oldValue = groupMembers.get(groupKey) ?? [];
      groupMembers.set(groupKey, [...oldValue, m.id]);
    }
  });

  // make group
  const groups = [...Array(groupNum)].map((_, i) => ({
    id: i,
    name: `Group${i + 1}`,
  }));

  return { groupMembers, groups };
};

// Fisher-Yates Shuffle
function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; 0 < i; --i) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
