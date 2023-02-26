import VideoShimmer from "../../components/loading/VideoShimmer";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoContainer = ({ video }) => {
  const videoData = video;

  const validId = (vid) => {
    if (vid.id.videoId) {
      return vid.id.videoId;
    } else if (vid.id.playlistId) {
      return vid.id.playlistId;
    }
  };

  return (
    <div className="p-2 pt-1 pl-0 flex flex-wrap  h-[90%]  justify-center">
      {videoData.length === 0
        ? [...Array(25)].map((_, index) => <VideoShimmer key={index} />)
        : videoData.items.map((vid) => (
            <Link to={`/watch/${validId(vid)}`} key={`/watch/${validId(vid)}`}>
              <VideoCard key={vid.id} videoData={vid} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
