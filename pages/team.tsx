import { NextPage } from "next";
import { Card } from "../components/Card";
import { MemberChip } from "../components/MemberChip";
import { NumberingTypography } from "../components/NumberingTypography";

const Team: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[52rem] h-[100rem]">
        <NumberingTypography numbering={1} text="メンバーを登録しましょう！" />
        <Card>
          <>
            <div className="flex justify-center py-2">
              <input
                className="border border-slate-400 rounded p-[0.5rem] text-gray-700"
                id="username"
                type="text"
                placeholder="名前を入力"
              ></input>
              <button className="ml-3 bg-teal-500 hover:bg-teal-600 text-white py-1 px-4 rounded">
                追加
              </button>
            </div>
            <div className="flex mx-16 my-5 flex-wrap gap-3">
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
          <>aa</>
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
