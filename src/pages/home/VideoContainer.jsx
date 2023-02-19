import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  // data here and loop through videoCard

  const videoData = useSelector((store) => store.app.homepageVids);
  console.log("videoData :", videoData.items);
  // console.log(
  //   "thumbnail :",
  //   videoData.items.map((thumb) => thumb.thumbnails.medium.url)
  // );

  return (
    <div className="p-2 pt-1 pl-0 flex flex-wrap  h-[90%]  ">
      <Link
        to="/watch"
        className="flex flex-wrap justify-center
      "
      >
        {/* {videoData.items.map((vid) => (
          <VideoCard key={vid.id} />
        ))} */}
      </Link>
    </div>
  );
};

export default VideoContainer;
