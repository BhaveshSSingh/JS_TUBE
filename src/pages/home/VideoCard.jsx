import { GoPrimitiveDot } from "react-icons/go";

const VideoCard = () => {
  return (
    <>
      <div className="m-2 h-min flex  justify-center rounded-lg  pt-2 ">
        <div className="rounded-lg shadow-lg  max-w-80 border border-t-2 border-gray-700 lg:w-80 md:w-64">
          <div data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              className="rounded-t-lg h-48 w-full"
              src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
              alt=""
            />
          </div>
          <div className="p-2 pr-0 flex">
            <div className="w-14">
              <img
                class="bg-indigo-400 h-10 rounded-full"
                src="https://yt3.ggpht.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s68-c-k-c0x00ffffff-no-rj"
                alt="channel pfp"
              />
            </div>
            <h5 className="text-gray-900 text-sm  dark:text-gray-300 font-bold truncate md:truncate">
              Video title Lorem ipsum
            </h5>
          </div>
          <div class="flex items-center space-x-4 px-3 pb-1 pt-0">
            <div class="font-medium dark:text-white">
              <p className="text-indigo-500">Tanay Pratap</p>
              <div class="text-sm ">
                <p className=" text-base mb-1 font-bold flex items-center dark:text-gray-400">
                  10090 views
                  <GoPrimitiveDot className="mx-2" size={10} /> 2 Days ago
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
