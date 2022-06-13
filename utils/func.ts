import {
  addGroup,
  deleteAllGroups,
  getGroupDocs,
} from "../firebase/api/groupApi";
import { MemberType } from "../types/Member";

// TODO:
// [x] groupをリセットして新しいgroupを作成
// [ ] memberをランダムソートしてgroupに追加
export const divideMember = async (members: MemberType[], groupNum: number) => {
  await deleteAllGroups();

  await Promise.all(
    [...Array(groupNum)].map((_, i) => addGroup(`チーム${i + 1}`))
  );

  const groups = await getGroupDocs();

  console.log(groups);
};
