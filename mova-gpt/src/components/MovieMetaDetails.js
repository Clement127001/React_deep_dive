import React from "react";
import PeopleInfo from "./PeopleInfo";

const MovieMetaDetails = ({ detail }) => {
  const { casts, videos } = detail;
  const { crew, cast } = casts;
  const { results: videosResult } = videos;
  return (
    <div className="mt-8">
      <div className="pl-4">
        {cast && <PeopleInfo title="Casts" detail={cast} />}
      </div>

      <div className="py-4 pl-4">
        {crew && <PeopleInfo title="Crew" detail={crew} />}
      </div>

      {/* video contianer */}

      <div className="pl-6 mt-4">
        <h2 className="text-2xl text-white">Videos</h2>
        <div className="flex overflow-scroll pt-4 pb-10 gap-4">
          {videosResult.map(
            (item) =>
              item.key && (
                <iframe
                  width="500"
                  height="294"
                  src={`https://www.youtube.com/embed/${item.key}?&theme=dark&color=white&rel=0 `}
                  frameBorder="0"
                  allowFullScreen="1"
                  title={item.key}
                  className="w-[360px] h-[200px] rounded-lg object-cover bg-gray-400 bg-video"
                  loading="lazy"
                ></iframe>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieMetaDetails;
