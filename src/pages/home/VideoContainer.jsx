import VideoShimmer from "../../components/loading/VideoShimmer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const videoData = useSelector((store) => store.app.homepageVids);
  console.log("videoData :", videoData.length);

  return (
    <div className="p-2 pt-1 pl-0 flex flex-wrap  h-[90%]  justify-center">
      {videoData.length === 0 ? (
        <VideoShimmer />
      ) : (
        videoData.items.map((vid) => (
          <Link to={`/watch/${vid.id}`}>
            <VideoCard key={vid.id} videoData={vid} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
