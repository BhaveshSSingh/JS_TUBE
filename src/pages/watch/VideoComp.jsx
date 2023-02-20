import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

import BackToHome from "../../components/BackToHome";
import CommentComp from "./CommentComp";

const VideoComp = () => {
  return (
    <>
      <BackToHome />
      <div
        id="responsiveVideoWrapper"
        className="relative h-0 pb-fluid-video   rounded-2xl"
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
          src="https://www.youtube.com/embed/zihoyz0u_cs"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="p-1 text-lg font-bold">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
        rerum?
      </h1>
      <div className=" p-2  w-full flex justify-between rounded-b-2xl">
        <div>
          <div className="p-1 flex  ">
            <div className="pr-4">
              <img
                className="bg-indigo-400 w-16 h-16 rounded-full"
                src="https://yt3.ggpht.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s68-c-k-c0x00ffffff-no-rj"
                alt="channel pfp"
              />
            </div>
            <div className="font-medium dark:text-white">
              <p className="font-bold text-indigo-400">Tanay Pratap</p>
              <div className="text-sm ">
                <p className=" text-base mb-1 font-semibold flex items-center dark:text-gray-400">
                  10090 subscribers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pr-3 justify-between border border-gray-900 dark:border-gray-400 h-full rounded-full w-28">
          <AiOutlineLike
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
      <CommentComp />
    </>
  );
};

export default VideoComp;
