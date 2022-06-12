import React from "react";

type Props = {
  labelText: string;
};

const OriginCheckboxForTeamCondition: React.FC<Props> = ({ labelText }) => {
  return (
    <div className="flex items-center">
      <input
        id={labelText}
        className="mr-3 w-4 h-4 focus:outline-none"
        type="checkbox"
      ></input>
      <label className="text-base" htmlFor={labelText}>
        {labelText}
      </label>
    </div>
  );
};

export const CheckboxForTeamCondition = React.memo(
  OriginCheckboxForTeamCondition
);
