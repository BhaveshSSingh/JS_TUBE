import { Link } from "react-router-dom";

import LikedVideoCard from "./LikedVideoCard";

const LikedVideoContainer = ({ video }) => {
  const videoData = video;

  return (
    <div className="p-2 pt-1 pl-0 flex flex-wrap  h-[90%]  justify-center">
      {videoData.length === 0 ? (
        <div>No Liked Videos</div>
      ) : (
        videoData.map((vid) => (
          <Link to={`/watch/${vid.videoId}`}>
            <LikedVideoCard key={vid.id} videoData={vid} />
          </Link>
        ))
      )}
    </div>
  );
};

export default LikedVideoContainer;
