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
          <div className="flex justify-center">
            <select
              className="block py-2 px-3 text-base text-gray-700 focus:text-gray-700 rounded border border-gray-400 focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
