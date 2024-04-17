import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ data }) => {
  const { id, snippet } = data;

  const { thumbnails, title, description, channelTitle, channelId } = snippet;

  console.log(id);

  return id.kind !== "youtube#video" ? null : (
    <Link
      to={
        "/watch?v=" +
        (id?.videoId || id?.playlistId) +
        "&channelId=" +
        channelId
      }
      className="flex justify-between gap-4"
    >
      <img
        src={thumbnails.medium.url}
        alt={title + "video"}
        className=" min-h-[300px] rounded-lg object-cover"
      />

      <div className="max-w-[400px]">
        <h2 className="font-sans font-semibold text-xl mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="font-sans text-gray-600">{description}</p>

        <h3>{channelTitle}</h3>
      </div>
    </Link>
  );
};

export default SearchItem;
