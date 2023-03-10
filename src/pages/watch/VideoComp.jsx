import { useEffect } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { clearChat } from "../../app/features/chatSlice";
import {
  addTolikedPage,
  removeFromLikedPage,
} from "../../app/features/likedSlice";
import { addToSubscribe } from "../../app/features/subscribeSlice";

import BackToHome from "../../components/BackToHome";
import CommentComp from "./comment/CommentComp";

const VideoComp = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearChat());
  }, [id]);

  const videoDetails = useSelector((store) => store.app.clickedVideo);

  const likeHandler = () => {
    dispatch(addTolikedPage(videoDetails));
    toast("Added to Liked Videos 👍");
  };
  const dislikeHandler = () => {
    dispatch(removeFromLikedPage(videoDetails));
    toast("Removed from Liked Videos  👎");
  };

  const subscribeHandler = () => {
    dispatch(addToSubscribe(videoDetails));
    toast("Added to Subscribed Channels 📺");
  };

  return (
    <>
      <BackToHome />
      <div
        id="responsiveVideoWrapper"
        className="relative h-0 pb-fluid-video   rounded-2xl"
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
          src={`https://www.youtube.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="p-1 text-lg font-bold">{videoDetails.videoTitle}</h1>
      <div className=" p-2  w-full flex justify-between rounded-b-2xl">
        <div>
          <div className="p-1 flex  ">
            <div className="pr-4">
              <img
                className="bg-indigo-400 w-16 h-16 rounded-full"
                src={videoDetails.channelAvatar}
                alt="channel pfp"
              />
            </div>
            <div className="sm:flex">
              <div className="font-medium dark:text-white">
                <p className="font-bold text-indigo-400">
                  {videoDetails.channelName}
                </p>
                <div className="text-sm ">
                  <p className=" mb-1 font-semibold text-sm flex items-center dark:text-gray-400">
                    1M subscribers
                  </p>
                </div>
              </div>
              <div className="pl-2 text-xl ">
                <button
                  onClick={subscribeHandler}
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-indigo-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-indigo-700"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pr-3 justify-between border border-gray-900 dark:border-gray-400 h-full rounded-full w-28">
          <AiOutlineLike
            onClick={likeHandler}
            className="m-2 ml-3 cursor-pointer hover:text-blue-600 "
            size={30}
          />

          <div className=" border border-l-gray-900  " />
          <AiOutlineDislike
            onClick={dislikeHandler}
            className="mt-3 m-2 hover:text-red-600 cursor-pointer "
            size={28}
          />
        </div>
      </div>
      <>
        <div className={"max-h-16 overflow-hidden"}>
          {videoDetails.description}
        </div>
      </>
      <CommentComp id={id} />
    </>
  );
};

export default VideoComp;
