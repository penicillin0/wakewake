import { useLocalStorage } from "@mantine/hooks";
import { NextPage } from "next";
import superjson from "superjson";
import { Card } from "../components/Card";
import { CheckboxForTeamCondition } from "../components/CheckboxForTeamCondition";
import { MemberChip } from "../components/MemberChip";
import { NumberingTypography } from "../components/NumberingTypography";
import { TeamCard } from "../components/TeamCard";
import { GroupType } from "../types/Group";
import { MemberType } from "../types/Member";
import { divideMember } from "../utils/func";

const Team: NextPage = () => {
  const [groupNum, setGroupNum] = useLocalStorage<number>({
    key: "groupNum",
    defaultValue: 1,
    getInitialValueInEffect: true,
  });
  const [groupMember, setGroupMember] = useLocalStorage<Map<number, number[]>>({
    key: "groupMember",
    defaultValue: new Map(),
    getInitialValueInEffect: true,
    serialize: superjson.stringify,
    deserialize: superjson.parse,
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

  const suggestGroupNum = () => {
    const memberNum = members ? members.length : 0;
    return [...Array(memberNum)].map((_, i) => i + 1);
  };

  const handleDeleteClick = (clickedMember: MemberType) => {
    if (!members) return;
    setMembers(members.filter((m) => m.id !== clickedMember.id));
  };

  const handleDivision = async () => {
    if (!members || !groupNum) return;

    const result = divideMember(members, groupNum);
    console.log(result.groupMembers);

    setGroupMember(result.groupMembers);
    setGroups(result.groups);
  };

  const handleDivideClear = () => {
    setGroupMember(new Map());
    setGroups([]);
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
          </>
        </Card>
        <NumberingTypography numbering={2} text="どうチーム分けしますか？" />
        <Card>
          <div className="mx-40">
            <div className="flex items-center mb-6">
              <div className="pr-[10%] text-xl text-teal-600">グループ数</div>
              <select
                className="block py-2 px-3 text-base text-gray-700 focus:text-gray-700 rounded border border-gray-400 focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                defaultValue={groupNum}
                onChange={(e) => setGroupNum(Number(e.target.value))}
              >
                <option>グループ数を選択</option>
                {suggestGroupNum().map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mb-6 space-y-2">
              <CheckboxForTeamCondition labelText="超過したメンバーを別グループにする" />
              <CheckboxForTeamCondition labelText="チームリーダーをランダムで決定する ( 後から変更できます )" />
              <CheckboxForTeamCondition labelText="チーム名を自動で決定する ( 後から変更できます )" />
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
