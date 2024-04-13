import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const channelId = searchParams.get("channelId");

  const fetchURLs = [
    { url: process.env.REACT_APP_SINGLE_VIDEO_LINK, id: videoId },
    { url: process.env.REACT_APP_CHANNEL_DETAIL_LINK, id: channelId },
  ];

  const fetchData = async (url, id) => {
    const response = await fetch(url + id);
    const data = await response.json();
    return data.items;
  };

  const fetchMutipleData = async () => {
    let promises = fetchURLs.map((item) => fetchData(item.url, item.id));

    const data = await Promise.all(promises);

    console.log(data);
  };

  useEffect(() => {
    fetchMutipleData();
  }, []);
  return (
    <div className="m-8">
      <iframe
        width="1100"
        height="600"
        src={`https://www.youtube.com/embed/${videoId}?si=zMYXr6h_HGGNTxQk`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-xl"
      ></iframe>
    </div>
  );
};

export default Watch;
