import { useDispatch } from "react-redux";
import VideoCard from "../home/VideoCard";
import LiveChat from "./live/LiveChat";
import VideoComp from "./VideoComp";
import { hideMenu } from "../../app/features/appSlice";
import { useEffect } from "react";
const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideMenu());
  }, []);

  return (
    <>
      <div className="block justify-between w-full mt-1 p-2 xl:flex">
        <div className="w-full mb-5 rounded-2xl ">
          <VideoComp />
        </div>

        <div className=" xl:w-[40vw] pt-2">
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
