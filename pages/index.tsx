import { useLocalStorage } from "@mantine/hooks";
import ExcelJS from "exceljs";
import * as htmlToImage from "html-to-image";
import { NextPage } from "next";
import { useRef, useState } from "react";
import superjson from "superjson";
import { Card } from "../components/Card";
import { MemberChip } from "../components/MemberChip";
import { NumberingTypography } from "../components/NumberingTypography";
import { SaveResultButton } from "../components/SaveResultButton";
import { TeamCard } from "../components/TeamCard";
import { GroupType } from "../types/Group";
import { MemberType } from "../types/Member";
import { divideMember, getYYYYMMDD } from "../utils/func";

export const DivideBy = {
  MEMBER: "member",
  GROUP: "group",
} as const;

export type DivideByType = typeof DivideBy[keyof typeof DivideBy];

const Home: NextPage = () => {
  const saveDomElement = useRef<HTMLDivElement>(null);

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
    // ??????????????????
    const spaceStartReg = new RegExp(/^\s+/);

    if (!newUserName) {
      alert("?????????????????????????????????");
      return;
    }

    if (spaceStartReg.test(newUserName)) {
      alert("?????????????????????????????????????????????");
      return;
    }

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

    if (members.length === 0) {
      alert("???????????????????????????????????????");
      return;
    }

    const result = divideMember(members, divideNum, divideMethod);

    setGroupMember(result.groupMembers);
    setGroups(result.groups);
  };

  const handleDivideClear = () => {
    setGroupMember(new Map());
    setGroups([]);
  };

  const handleMemberClear = () => {
    if (members.length === 0) {
      alert("?????????????????????????????????");
      return;
    }

    setMembers([]);
  };

  const handleMemberInputKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && !memberInputTyping) {
      handleAddMember();
    }
  };

  const handleImageSave = async (extension: "png" | "jpeg") => {
    if (!saveDomElement.current) return;

    const saveOption = {
      backgroundColor: "#fff",
      height: saveDomElement.current.offsetHeight * 1.3,
    };

    const dataUrl =
      extension === "png"
        ? await htmlToImage.toPng(saveDomElement.current, saveOption)
        : await htmlToImage.toJpeg(saveDomElement.current, saveOption);

    const link = document.createElement("a");
    link.download = `team_result_${getYYYYMMDD(new Date())}.${extension}`;
    link.href = dataUrl;
    link.click();
    link.remove();
  };

  const handleCsvOrExcelSave = async (extension: "csv" | "xlsx") => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("sheet1");

    if (extension === "xlsx") {
      worksheet.addRow(["Group???", "??????"]);
    }

    groups.map((group) => {
      const groupName = group.name;
      const memberNum = groupMember.get(group.id)?.length || 0;
      const memberNames =
        groupMember
          .get(group.id)
          ?.map(
            (memberId) => members?.find((m) => m.id === memberId)?.name || ""
          ) || [];

      worksheet.addRow([groupName, memberNum, ...memberNames]);
    });

    const uint8Array =
      extension === "xlsx"
        ? await workbook.xlsx.writeBuffer()
        : await workbook.csv.writeBuffer();
    const blob = new Blob([uint8Array], { type: "application/octet-binary" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `team_result_${getYYYYMMDD(new Date())}.${extension}`;
    a.click();
    a.remove();
  };

  return (
    <div
      className="text:[12px] flex justify-center sm:text-[16px]"
      id="capture"
    >
      <div className="flex flex-col gap-y-[24px] my-[32px] w-[340px] sm:w-[560px] md:w-[640px] lg:w-[832px]">
        <div>
          <h1 className="mb-[4px] text-[24px] font-bold text-gray-700">
            ??????????????????????????????
          </h1>
          <h2 className="text-gray-600">
            ????????????????????????????????????????????????????????????????????????????????????
          </h2>
        </div>
        <div>
          <div className="border-l-[4px] border-gray-500 border-solid">
            <p className="ml-[8px] text-[21px]">?????????</p>
          </div>
          <ul className="flex flex-col gap-y-[8px] py-[8px] pl-[32px] ml-[4px] text-base list-disc text-gray-600">
            <li>??????????????????????????????????????????????????????????????????</li>
            <li>?????????????????????????????????????????????????????????????????????</li>
            <li>???????????????????????????????????????????????????????????????</li>
            <li>
              ????????????????????????????????????????????????PNG???JPEG???CSV???Excel???????????????????????????
            </li>
          </ul>
        </div>
        <div>
          <NumberingTypography
            numbering={1}
            text="???????????????????????????????????????"
          />
          <Card>
            <>
              <div className="flex justify-center items-center py-2">
                <input
                  className="p-[8px] text-gray-700 rounded border border-slate-400"
                  id="username"
                  type="text"
                  autoComplete="name"
                  placeholder="???????????????"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  onCompositionStart={() => setMemberInputTyping(true)}
                  onCompositionEnd={() => setMemberInputTyping(false)}
                  onKeyDown={handleMemberInputKeyPress}
                ></input>
                <button
                  className="py-[8px] px-[16px] ml-[12px] h-full text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-700 rounded"
                  onClick={handleAddMember}
                >
                  ??????
                </button>
              </div>

              <div className="flex flex-wrap gap-[12px] m-[20px]">
                {members?.map((member) => (
                  <MemberChip
                    key={member.id}
                    name={member.name}
                    handleDeleteClick={() => handleDeleteClick(member)}
                  />
                ))}
              </div>
              <div className="flex justify-end items-center">
                <span className="mr-[12px] text-base text-slate-700">
                  ???????????????????????? {members.length} ???
                </span>
                <button
                  onClick={handleMemberClear}
                  className="py-[4px] px-[8px] text-base  text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 rounded-md"
                >
                  ?????????
                </button>
              </div>
            </>
          </Card>
        </div>
        <div>
          <NumberingTypography numbering={2} text="????????????????????????????????????" />
          <Card>
            <div className="mx-[32px]">
              <div className="flex flex-col gap-y-[4px] mb-[12px]">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="howDivide"
                    checked={divideMethod === DivideBy.GROUP}
                    id="byGroupNum"
                    onChange={() => setDivideMethod(DivideBy.GROUP)}
                    className="mr-[8px] w-[16px] h-[16px] bg-white checked:bg-blue-600 border border-gray-300 checked:border-blue-600 focus:outline-none"
                  />
                  <label className=" text-gray-800 " htmlFor="byGroupNum">
                    ????????????
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="howDivide"
                    id="byMemberNum"
                    checked={divideMethod === DivideBy.MEMBER}
                    onChange={() => setDivideMethod(DivideBy.MEMBER)}
                    className="mr-[8px] w-[16px] h-[16px] bg-white checked:bg-blue-600 border border-gray-300 checked:border-blue-600 focus:outline-none"
                  />
                  <label className=" text-gray-800 " htmlFor="byMemberNum">
                    ?????????????????????????????????
                  </label>
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <select
                  className="py-[8px] px-[12px] w-4/5 text-base text-gray-700 focus:text-gray-700 rounded border border-gray-400 focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  value={divideNum}
                  onChange={(e) => setDivideNum(Number(e.target.value))}
                >
                  <option>
                    {divideMethod === DivideBy.MEMBER
                      ? "????????????????????????"
                      : " ?????????????????????"}
                  </option>
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
                  className="py-[4px] px-[16px] text-xl  text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-700 rounded-md"
                >
                  ????????????
                </button>
              </div>
            </div>
          </Card>
        </div>
        {groupMember !== undefined && (
          <div>
            <NumberingTypography numbering={3} text="?????????????????????" />
            <Card>
              <div className="mx-[12px]">
                <div className="flex justify-between items-center mb-[16px]">
                  <span className="text-sm text-slate-800">
                    ??????????????????????????????????????????????????????????????????
                  </span>
                  <div className="flex flex-col gap-[8px] ml-[4px] sm:flex-row">
                    <button
                      onClick={handleDivision}
                      className="py-[4px] px-[8px] text-base text-white whitespace-nowrap bg-teal-500 hover:bg-teal-600 active:bg-teal-700 rounded-md"
                    >
                      ?????????
                    </button>
                    <button
                      onClick={handleDivideClear}
                      className="py-[4px] px-[8px] text-base  text-white whitespace-nowrap bg-rose-500 hover:bg-rose-600 active:bg-rose-700 rounded-md"
                    >
                      ?????????
                    </button>
                  </div>
                </div>
                <div id="saveDomElement" ref={saveDomElement} className="my-10">
                  <div className="flex flex-wrap gap-[20px] justify-center">
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
                <div className="flex gap-x-[10px] justify-end sm:gap-x-[14px]">
                  <SaveResultButton
                    onClick={() => handleImageSave("png")}
                    text="PNG?????????"
                  />
                  <SaveResultButton
                    onClick={() => handleImageSave("jpeg")}
                    text="JPEG?????????"
                  />
                  <SaveResultButton
                    onClick={() => handleCsvOrExcelSave("csv")}
                    text="CSV?????????"
                  />
                  <SaveResultButton
                    onClick={() => handleCsvOrExcelSave("xlsx")}
                    text="XLSX?????????"
                  />
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
