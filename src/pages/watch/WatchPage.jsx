import VideoCard from "../home/VideoCard";
import LiveChat from "./live/LiveChat";
import VideoComp from "./VideoComp";

const WatchPage = () => {
  return (
    <>
      <div className="block justify-between w-full mt-3 p-2 xl:flex">
        <div className="w-full mb-4  border border-gray-500 rounded-2xl">
          <VideoComp />
        </div>

        <div className=" xl:w-[40vw]">
          <LiveChat />

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
      </div>
    </>
  );
};

export default WatchPage;
