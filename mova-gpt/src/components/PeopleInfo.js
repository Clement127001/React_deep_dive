import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../utils/constants";

//reusable for both crew and cast
//title
//image*n
const PeopleInfo = ({ title, detail }) => {
  return (
    <div className="sm:pl-4 pl-2 ">
      <h1 className="text-3xl text-white">{title}</h1>
      <div className="flex gap-4 overflow-scroll mt-4 ">
        {/* Adding overflow-x-scroll and overflow-y-hidden */}
        {detail.map(
          (item, index) =>
            item.profile_path && (
              <Link
                key={index}
                className="min-w-[140px] h-[200px] bg-gray-400 rounded-sm bg-image"
              >
                {/* Adding key prop for each Link element */}
                <img
                  src={IMAGE_BASE_URL + "w300" + item.profile_path}
                  alt={item.name} // Adding alt attribute for accessibility
                  className="w-[140px] h-[200px] rounded-sm"
                />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default PeopleInfo;
