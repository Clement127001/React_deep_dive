import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../utils/constants";

const PeopleInfo = ({ title, detail }) => {
  return (
    <div className="sm:pl-4 pl-2 ">
      <h1 className="text-2xl text-white">{title}</h1>
      <div className="flex gap-4 overflow-scroll mt-4 overflow-y-hidden">
        {/* Adding overflow-x-scroll and overflow-y-hidden */}
        {detail.map(
          (item, index) =>
            item.profile_path && (
              <Link
                to={"/person/" + item.id}
                key={index}
                className="min-w-[140px] h-[220px]"
              >
                {/* Adding key prop for each Link element */}
                <img
                  src={IMAGE_BASE_URL + "w300" + item.profile_path}
                  alt={item.name} // Adding alt attribute for accessibility
                  className="w-[140px] h-[160px] object-cover bg-gray-400 rounded-sm bg-image "
                />

                <p className="font-sans text-zinc-300 py-2">{item.name}</p>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default PeopleInfo;
