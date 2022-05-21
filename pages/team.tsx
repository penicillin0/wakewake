import { NextPage } from "next";
import { Card } from "../components/Card";
import { NumberingTypography } from "../components/NumberingTypography";

const Team: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[52rem] h-[100rem]">
        <NumberingTypography numbering={1} text="メンバーを登録しましょう！" />
        <Card />
      </div>
    </div>
  );
};

export default Team;
