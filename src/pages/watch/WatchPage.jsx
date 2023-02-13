import { Link } from "react-router-dom";
import VideoCard from "../home/VideoCard";
import CommentComp from "./CommentComp";
import LiveChat from "./LiveChat";
import VideoComp from "./VideoComp";

const WatchPage = () => {
  return (
    <>
      <div className="block justify-between w-full  p-2 xl:flex">
        <div className="w-full border border-indigo-500 rounded-2xl">
          <VideoComp />
        </div>

        <div className=" xl:w-[40vw]">
          <LiveChat />
        </div>
      </div>
      {/* <Link to="/watch">
        <div className="">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </Link> */}
    </>
  );
};

export default WatchPage;