import React from "react";

const VideoStats = ({ video, channel }) => {
  console.log(video, channel);
  const { snippet: videoSnippet, statistics } = video;
  const { snippet: channelSnippet } = channel;

  const { title } = videoSnippet;
  const { title: channelTitle, thumbnails } = channelSnippet;

  return (
    <div className="my-4">
      <h2 className="font-sans font-semibold text-lg line-clamp-1">{title}</h2>

      <div className="flex mt-2 gap-2">
        <img
          src={thumbnails.default.url}
          alt={channelTitle}
          width={48}
          className="rounded-full"
        />
        <div>
          <h4 className="font-sans font-medium">{channelTitle}</h4>
        </div>
      </div>
    </div>
  );
};

export default VideoStats;
