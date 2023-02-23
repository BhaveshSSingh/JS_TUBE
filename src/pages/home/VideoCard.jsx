import { useDispatch } from "react-redux";
import { clickedVideoInfo } from "../../app/features/appSlice";
import { avatars } from "../../config";

const VideoCard = ({ videoData }) => {
  const { snippet } = videoData;
  const id = videoData.id.videoId;
  const seed = Math.round(Math.random() * 100);
  var avatar = avatars[Math.floor(Math.random() * avatars.length)];

  const pfpURL = `https://api.dicebear.com/5.x/${avatar}/svg?seed=${seed}`;
  const { thumbnails, channelTitle, title, publishedAt, description } = snippet;

  const dispatch = useDispatch();

  const videoDetailHandler = () => {
    dispatch(
      clickedVideoInfo({
        channelName: channelTitle,
        videoTitle: title,
        videoDate: publishedAt.substring(0, 10),
        description: description,
        thumbnail: thumbnails?.medium?.url,
        videoId: id,
      })
    );
  };

  if (videoData.id.kind === "youtube#video") {
    return (
      <>
        <div
          className="m-2 h-full  flex  justify-center rounded-lg  pt-2 "
          onClick={videoDetailHandler}
        >
          <div className="rounded-lg shadow-lg  max-w-80 border border-t-2  dark:border-gray-700 lg:w-80 md:w-64 sm:w-64">
            <img
              className="rounded-t-lg h-48 w-full "
              src={thumbnails?.medium?.url}
              alt=""
            />

            <div className="p-2 pr-0 flex">
              <div className="flex-shrink-0 w-10 h-10 mr-2 rounded-full overflow-hidden bg-indigo-400 ring ring-indigo-700">
                <img src={pfpURL} alt="channel pfp" />
              </div>
              <h5 className="text-gray-900 text-sm  dark:text-gray-300 font-bold  line__clamp ">
                {title}
              </h5>
            </div>
            <div className="flex items-center space-x-4 px-3 pb-1 pt-0">
              <div className="font-medium flex  dark:text-white">
                <p className="text-indigo-500 mr-4">{channelTitle}</p>
                <p className=" text-base mb-1 font-bold flex items-center dark:text-gray-400">
                  {publishedAt.substring(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (videoData.id.kind !== "youtube#video") {
    return null;
  }
};

export default VideoCard;
