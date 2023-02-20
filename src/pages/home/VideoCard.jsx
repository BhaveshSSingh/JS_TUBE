import { GoPrimitiveDot } from "react-icons/go";

const VideoCard = ({ videoData }) => {
  console.log("videoData :", videoData);
  const { snippet } = videoData;
  const { statistics } = videoData;

  const { thumbnails, channelTitle, title, publishedAt } = snippet;
  // const { viewCount, likeCount } = statistics;
  return (
    <>
      <div className="m-2 h-[320px]  flex  justify-center rounded-lg  pt-2 ">
        <div className="rounded-lg shadow-lg  max-w-80 border border-t-2  dark:border-gray-700 lg:w-80 md:w-64 sm:w-64">
          <img
            className="rounded-t-lg h-48 w-full "
            src={thumbnails?.medium?.url}
            alt=""
          />

          <div className="p-2 pr-0 flex">
            <div class="flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-white">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnhbzltKjEkb2tlCdRpx2-wjpvBYy_RRMQzNmpSmLQ=s68-c-k-c0x00ffffff-no-rj"
                alt="channel pfp"
              />
            </div>
            <h5
              className="text-gray-900 text-sm  dark:text-gray-300 font-bold  line__clamp 
}"
            >
              {title}
            </h5>
          </div>
          <div class="flex items-center space-x-4 px-3 pb-1 pt-0">
            <div class="font-medium dark:text-white">
              <p className="text-indigo-500">{channelTitle}</p>
              <div class="text-sm ">
                <p className=" text-base mb-1 font-bold flex items-center dark:text-gray-400">
                  {/* {viewCount} views */}
                  <GoPrimitiveDot className="mx-2" size={10} />{" "}
                  {publishedAt.substring(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
