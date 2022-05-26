import { NextPage } from "next";
import { Card } from "../components/Card";
import { MemberChip } from "../components/MemberChip";
import { NumberingTypography } from "../components/NumberingTypography";

const Team: NextPage = () => {
  const suggestTeamNum = (): number[] => {
    // TODO: チーム数を提案ロジックを書く
    return [1, 2, 3];
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
              ></input>
              <button className="py-1 px-4 ml-3 text-white bg-teal-500 hover:bg-teal-600 rounded">
                追加
              </button>
            </div>
            <div className="flex flex-wrap gap-3 my-5 mx-16">
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗佐藤二朗佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
              <MemberChip name="佐藤二朗" />
            </div>
          </>
        </Card>
        <NumberingTypography numbering={2} text="どうチーム分けしますか？" />
        <Card>
          <div className="flex items-center px-40">
            <div className="pr-[10%] text-xl text-teal-600">グループ数</div>
            <select
              className="block py-2 px-3 text-base text-gray-700 focus:text-gray-700 rounded border border-gray-400 focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>1チームのメンバー数を選択</option>
              {suggestTeamNum().map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </Card>
        <NumberingTypography numbering={3} text="チーム分け完了!" />
        <Card>
          <>aa</>
        </Card>
      </div>
    </div>
  );
};

export default Team;
