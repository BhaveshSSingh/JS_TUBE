import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  return (
    <div className="p-5 flex flex-wrap justify-center h-[90%]">
      <Link to="/watch">
        <VideoCard />
      </Link>
    </div>
  );
};

export default VideoContainer;
