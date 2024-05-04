import React from "react";
import PeopleInfo from "./PeopleInfo";

const MovieMetaDetails = ({ detail }) => {
  console.log(detail);
  const { casts, videos } = detail;
  const { crew, cast } = casts;
  return (
    <div className="mt-8">
      <div className="pl-4">
        {cast && <PeopleInfo title="Casts" detail={cast} />}
      </div>

      <div className="py-4 pl-4">
        {crew && <PeopleInfo title="Crew" detail={crew} />}
      </div>
    </div>
  );
};

export default MovieMetaDetails;
