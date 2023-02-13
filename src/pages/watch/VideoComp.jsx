import { AiFillLike } from "react-icons/ai";
import { BsChatDotsFill } from "react-icons/bs";
import CommentComp from "./CommentComp";

const VideoComp = () => {
  return (
    <>
      <div
        id="responsiveVideoWrapper"
        className="relative h-0 pb-fluid-video  rounded-2xl"
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
      <div className=" p-2 border border-black w-full flex justify-between rounded-b-2xl">
        <div>
          <div className="p-1 flex  ">
            <div className="pr-4">
              <img
                class="bg-indigo-400 w-16 h-16 rounded-full"
                src="https://yt3.ggpht.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s68-c-k-c0x00ffffff-no-rj"
                alt="channel pfp"
              />
            </div>
            <div class="font-medium dark:text-white">
              <p className="text-black">Tanay Pratap</p>
              <div class="text-sm ">
                <p className=" text-base mb-1 font-bold flex items-center dark:text-gray-400">
                  10090 subscribers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pr-3 justify-between border border-gray-900 h-full rounded-full w-28 bg-gray-100">
          <AiFillLike
            className="mx-2 m-2 cursor-pointer  text-indigo-700"
            size={30}
          />
          <div className=" border border-l-gray-900" />
          <BsChatDotsFill
            className="mr-0 m-2 cursor-pointer  text-purple-500"
            size={26}
          />
        </div>
      </div>

      <CommentComp />
    </>
  );
};

export default VideoComp;
