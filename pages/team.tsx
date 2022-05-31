import { NextPage } from "next";
import { Card } from "../components/Card";
import { CheckboxForTeamCondition } from "../components/CheckboxForTeamCondition";
import { MemberChip } from "../components/MemberChip";
import { NumberingTypography } from "../components/NumberingTypography";
import { TeamCard } from "../components/TeamCard";

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
              <button className="py-1 px-4 ml-3 text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-700 rounded">
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
          <div className="mx-40">
            <div className="flex items-center mb-6">
              <div className="pr-[10%] text-xl text-teal-600">グループ数</div>
              <select
                className="block py-2 px-3 text-base text-gray-700 focus:text-gray-700 rounded border border-gray-400 focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option>メンバー数を選択</option>
                {suggestTeamNum().map((num) => (
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
              <button className="py-1 px-4 text-xl  text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-700 rounded-md">
                実行する
              </button>
            </div>
          </div>
        </Card>
        <NumberingTypography numbering={3} text="チーム分け完了!" />
        <Card>
          <div className="mx-7">
            <div className="flex justify-between items-center mb-8">
              <span className="mr-16 text-sm text-slate-800">
                チーム名をクリックすることでチーム名を変更できます。
              </span>
              <div>
                <button className="py-1 px-2 mr-4 text-base text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-700 rounded-md">
                  再実行
                </button>
                <button className="py-1 px-2 text-base  text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 rounded-md">
                  クリア
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
              <TeamCard text="チーム1" />
              <TeamCard text="チーム2" />
              <TeamCard text="チーム3" />
              <TeamCard text="チーム3" />
              <TeamCard text="チーム3" />
              <TeamCard text="チーム3" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Team;
