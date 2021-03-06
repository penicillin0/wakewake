import { DivideBy, DivideByType } from "../pages/index";
import { MemberType } from "../types/Member";

export const divideMember = (
  members: MemberType[],
  divideNum: number,
  divideMethod: DivideByType
) => {
  const shuffledMembers = shuffle([...members]);
  const groupMembers = new Map<number, number[]>();

  const groupNum =
    divideMethod === DivideBy.GROUP
      ? divideNum
      : Math.ceil(members.length / divideNum);

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

export const getYYYYMMDD = (now: Date) => {
  let yyyy = now.getFullYear();
  let mm = ("00" + (now.getMonth() + 1)).slice(-2);
  let dd = ("00" + now.getDate()).slice(-2);
  const ymd = String(yyyy) + String(mm) + String(dd);
  return ymd;
};
