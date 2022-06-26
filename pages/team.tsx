import { useLocalStorage } from "@mantine/hooks";
import { NextPage } from "next";
import { useState } from "react";
import superjson from "superjson";
import { Card } from "../components/Card";
import { MemberChip } from "../components/MemberChip";
import { NumberingTypography } from "../components/NumberingTypography";
import { TeamCard } from "../components/TeamCard";
import { GroupType } from "../types/Group";
import { MemberType } from "../types/Member";
import { divideMember } from "../utils/func";

export const DivideBy = {
  MEMBER: "member",
  GROUP: "group",
} as const;

export type DivideByType = typeof DivideBy[keyof typeof DivideBy];

const Team: NextPage = () => {
  const [memberInputTyping, setMemberInputTyping] = useState(false);

  const [divideMethod, setDivideMethod] = useLocalStorage<DivideByType>({
    key: "divideMethod",
    defaultValue: DivideBy.GROUP,
    getInitialValueInEffect: true,
  });

  const [divideNum, setDivideNum] = useLocalStorage<number>({
    key: "divideNum",
    defaultValue: 1,
    getInitialValueInEffect: true,
  });
  const [groupMember, setGroupMember] = useLocalStorage<Map<number, number[]>>({
    key: "groupMember",
    defaultValue: new Map(),
    getInitialValueInEffect: true,
    serialize: superjson.stringify,
    deserialize: (str) => (str ? superjson.parse(str) : new Map()),
  });
  const [newUserName, setNewUserName] = useLocalStorage({
    key: "newUserName",
    defaultValue: "",
    getInitialValueInEffect: true,
  });
  const [members, setMembers] = useLocalStorage<MemberType[]>({
    key: "members",
    defaultValue: [],
    getInitialValueInEffect: true,
  });
  const [roomName, setRoomName] = useLocalStorage<string>({
    key: "roomName",
    defaultValue: "",
    getInitialValueInEffect: true,
  });
  const [groups, setGroups] = useLocalStorage<GroupType[]>({
    key: "groups",
    defaultValue: [],
    getInitialValueInEffect: true,
  });

  const handleAddMember = async () => {
    if (!newUserName) return;

    const newMember = {
      name: newUserName,
      id: members?.length ? Math.max(...members.map((m) => m.id)) + 1 : 1,
    };
    if (members) {
      setMembers([...members, newMember]);
    } else {
      setMembers([newMember]);
    }
    setNewUserName("");
  };

  const suggestSettingNum = () => {
    const memberNum = members ? members.length : 0;
    return [...Array(memberNum)].map((_, i) => i + 1);
  };

  const handleDeleteClick = (clickedMember: MemberType) => {
    if (!members) return;
    setMembers(members.filter((m) => m.id !== clickedMember.id));
  };

  const handleDivision = async () => {
    if (!members || !divideNum) return;

    const result = divideMember(members, divideNum, divideMethod);

    setGroupMember(result.groupMembers);
    setGroups(result.groups);
  };

  const handleDivideClear = () => {
    setGroupMember(new Map());
    setGroups([]);
  };

  const handleMemberClear = () => {
    setMembers([]);
  };

  const handleMemberInputKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && !memberInputTyping) {
      handleAddMember();
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[52rem] h-[100rem]">
        <NumberingTypography numbering={1} text="メンバーを登録しましょう！" />
        <Card>
          <>
            <div className="flex justify-center py-2">
              <input
                className="p-[0.5rem] text-gray-700 rounded border border-slate-400"
                id="username"
                type="text"
                placeholder="名前を入力"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                onCompositionStart={() => setMemberInputTyping(true)}
                onCompositionEnd={() => setMemberInputTyping(false)}
                onKeyDown={handleMemberInputKeyPress}
              ></input>
              <button
                className="py-1 px-4 ml-3 text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-700 rounded"
                onClick={handleAddMember}
              >
                追加
              </button>
            </div>
            <div className="flex flex-wrap gap-3 my-5 mx-16">
              {members?.map((member) => (
                <MemberChip
                  key={member.id}
                  name={member.name}
                  handleDeleteClick={() => handleDeleteClick(member)}
                />
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleMemberClear}
                className="py-1 px-2 text-base  text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 rounded-md"
              >
                クリア
              </button>
            </div>
          </>
        </Card>
        <NumberingTypography numbering={2} text="どうチーム分けしますか？" />
        <Card>
          <div className="mx-40">
            <div className="flex flex-col gap-y-1 mb-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="howDivide"
                  checked={divideMethod === DivideBy.GROUP}
                  id="byGroupNum"
                  onChange={() => setDivideMethod(DivideBy.GROUP)}
                  className="mr-2 w-4 h-4 bg-white checked:bg-blue-600 border border-gray-300 checked:border-blue-600 focus:outline-none"
                />
                <label className=" text-gray-800 " htmlFor="byGroupNum">
                  チーム数
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="howDivide"
                  id="byMemberNum"
                  checked={divideMethod === DivideBy.MEMBER}
                  onChange={() => setDivideMethod(DivideBy.MEMBER)}
                  className="mr-2 w-4 h-4 bg-white checked:bg-blue-600 border border-gray-300 checked:border-blue-600 focus:outline-none"
                />
                <label className=" text-gray-800 " htmlFor="byMemberNum">
                  チームごとのメンバー数
                </label>
              </div>
            </div>
            <div className="flex justify-center mb-3">
              <select
                className="py-2 px-3 w-4/5 text-base text-gray-700 focus:text-gray-700 rounded border border-gray-400 focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                value={divideNum}
                onChange={(e) => setDivideNum(Number(e.target.value))}
              >
                <option>グループ数を選択</option>
                {suggestSettingNum().map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleDivision}
                className="py-1 px-4 text-xl  text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-700 rounded-md"
              >
                実行する
              </button>
            </div>
          </div>
        </Card>
        {groupMember !== undefined && (
          <div>
            <NumberingTypography numbering={3} text="チーム分け完了!" />
            <Card>
              <div className="mx-7">
                <div className="flex justify-between items-center mb-8">
                  <span className="mr-16 text-sm text-slate-800">
                    チーム名をクリックすることでチーム名を変更できます。
                  </span>
                  <div>
                    <button
                      onClick={handleDivision}
                      className="py-1 px-2 mr-4 text-base text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-700 rounded-md"
                    >
                      再実行
                    </button>
                    <button
                      onClick={handleDivideClear}
                      className="py-1 px-2 text-base  text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 rounded-md"
                    >
                      クリア
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-5 justify-center">
                  {groups.map((group) => {
                    const groupName = group.name;
                    const groupId = group.id;

                    if (!(groupMember instanceof Map)) {
                      return;
                    }
                    const memberIds = groupMember.get(groupId) ?? [];
                    const groupMembers = members.filter((m) =>
                      memberIds.includes(m.id)
                    );

                    return (
                      <TeamCard
                        key={group.id}
                        teamName={groupName}
                        members={groupMembers}
                      />
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
