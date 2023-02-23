import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addTolikedPage } from "../../app/features/likedSlice";

import BackToHome from "../../components/BackToHome";
import { avatars } from "../../config";
import CommentComp from "./comment/CommentComp";
import CommentSection from "./comment/CommentSection";

const VideoComp = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const videoDetails = useSelector((store) => store.app.clickedVideo);
  console.log("videoDetails :", videoDetails.description);

  const seed = Math.round(Math.random() * 100);
  var avatar = avatars[Math.floor(Math.random() * avatars.length)];

  const pfpURL = `https://api.dicebear.com/5.x/${avatar}/svg?seed=${seed}`;

  const likeHandler = () => {
    dispatch(addTolikedPage(videoDetails));
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
                src={pfpURL}
                alt="channel pfp"
              />
            </div>
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
      <CommentComp />
      {/* <CommentSection /> */}
    </>
  );
};

export default VideoComp;
