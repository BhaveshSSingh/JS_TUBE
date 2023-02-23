import { avatars } from "../../config";

const LikedVideoCard = ({ videoData }) => {
  const seed = Math.round(Math.random() * 100);
  var avatar = avatars[Math.floor(Math.random() * avatars.length)];

  const pfpURL = `https://api.dicebear.com/5.x/${avatar}/svg?seed=${seed}`;

  return (
    <>
      <div className="m-2 h-[300px]  flex  justify-center rounded-lg  pt-2 ">
        <div className="rounded-lg shadow-lg  max-w-80 border border-t-2  dark:border-gray-700 lg:w-80 md:w-64 sm:w-64">
          <img
            className="rounded-t-lg h-48 w-full "
            src={videoData.thumbnail}
            alt=""
          />

          <div className="p-2 pr-0 flex">
            <div className="flex-shrink-0 w-10 h-10 mr-2 rounded-full overflow-hidden bg-indigo-400 ring ring-indigo-700">
              <img src={pfpURL} alt="channel pfp" />
            </div>
            <h5 className="text-gray-900 text-sm  dark:text-gray-300 font-bold  line__clamp ">
              {videoData.videoTitle}
            </h5>
          </div>
          <div className="flex items-center space-x-4 px-3 pb-1 pt-0">
            <div className="font-medium flex  dark:text-white">
              <p className="text-indigo-500 mr-4">{videoData.channelName}</p>
              <p className=" text-base mb-1 font-bold flex items-center dark:text-gray-400">
                {videoData.videoDate}
              </p>
              {/* <div className="text-sm "> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedVideoCard;
{
  /* <>h</> */
}
