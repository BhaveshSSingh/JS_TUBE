import { useDispatch } from "react-redux";
import LiveChat from "./live/LiveChat";
import VideoComp from "./VideoComp";
import { hideMenu } from "../../app/features/appSlice";
import { useEffect, useState } from "react";
import { fetchRecommendedVids } from "../../config";
import { useParams } from "react-router-dom";
import VideoContainer from "../home/VideoContainer";
const WatchPage = () => {
  const [recommendedVids, setRecommendedVids] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideMenu());
  }, []);

  const { id } = useParams();

  useEffect(() => {
    fetchRecommendedVids(setRecommendedVids, id);
  }, [id]);

  return (
    <>
      <div className="block justify-between w-full mt-1 p-2 xl:flex">
        <div className="w-full mb-5 rounded-2xl ">
          <VideoComp />
        </div>

        <div className=" xl:w-[40vw] pt-2">
          <LiveChat />
          <div
            className="flex flex-wrap justify-center
          "
          >
            <VideoContainer video={recommendedVids} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchPage;
