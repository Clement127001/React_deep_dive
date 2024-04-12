import React from "react";
import { FilterBtnsList } from "../utils/constants";

const FilterBtns = () => {
  return (
    <div className="flex gap-4 overflow-auto pb-3">
      {FilterBtnsList.map((item) => (
        <button
          key={item}
          className=" bg-gray-100 text-[1rem] font-sans font-[500] py-2 px-4 rounded-lg min-w-fit "
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterBtns;
