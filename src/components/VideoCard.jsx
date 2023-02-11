import { AiFillLike } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

const VideoCard = () => {
  return (
    <>
      <div className="m-2 h-min flex justify-center rounded-lg w-64 dark:border dark:border-gray-700">
        <div className="rounded-lg shadow-lg max-w-sm">
          <div data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              className="rounded-t-lg h-48 w-full"
              src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
              alt=""
            />
          </div>
          <div className="p-3">
            <h5 className="text-gray-900 text-lg font-medium mb-1 dark:text-gray-300 ">
              Video title Lorem ipsum dolor, sit amet consectetur adipisicing.
            </h5>
            <p className="text-base font-bold text-blue-500">Channel Name</p>
            <p className="text-gray-700 text-base mb-1 font-bold flex items-center">
              Views <GoPrimitiveDot className="mx-2" /> Time
            </p>
            <div className="flex justify-between">
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out    dark:bg-blue-700"
              >
                <AiFillLike size={15} />
              </button>
              <button
                type="button"
                className="flex inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
                dark:bg-blue-700
                "
              >
                Watch Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
