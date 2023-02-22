import VideoShimmer from "../../components/loading/VideoShimmer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoContainer = ({ video }) => {
  // const videoData = useSelector((store) => store.app.homepageVids);
  // console.log("videoData :", videoData.length);

  // const videoData = video;
  // console.log("videoData :", videoData);

  const videoData = video;
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
      {/* <VideoShimmer /> */}
    </div>
  );
};

export default VideoContainer;
