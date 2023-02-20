import VideoCard from "../home/VideoCard";
import LiveChat from "./live/LiveChat";
import VideoComp from "./VideoComp";

const WatchPage = () => {
  return (
    <>
      <div className="block justify-between w-full mt-1 p-2 xl:flex">
        <div className="w-full mb-5 rounded-2xl ">
          <VideoComp />
        </div>

        <div className=" xl:w-[40vw]">
          <LiveChat />
          {/* <div
            className="flex flex-wrap justify-center
          "
          >
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WatchPage;
