import { useDispatch } from "react-redux";
import { getByTagName } from "../../app/features/tagSlice";

const TagList = ({}) => {
  const dispatch = useDispatch();

  const tagHandler = (name) => {
    dispatch(getByTagName(name));
  };

  return (
    <div className="flex pl-3 flex-wrap">
      <div className="flex flex-wrap justify-start space-x-2  p-1 ">
        <span
          className="px-4 py-2 rounded-full text-gray-500 bg-gray-300 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease hover:ring hover:ring-indigo-400"
          onClick={(e) => tagHandler(e.currentTarget.innerHTML)}
        >
          Akshay Saini
        </span>
      </div>{" "}
      <div className="flex flex-wrap justify-start space-x-2  p-1">
        <span
          className="px-4 py-2 rounded-full text-gray-500 bg-gray-300 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease hover:ring hover:ring-indigo-400"
          onClick={(e) => tagHandler(e.currentTarget.innerHTML)}
        >
          Tanay Pratap
        </span>
      </div>{" "}
      <div className="flex flex-wrap justify-start space-x-2  p-1">
        <span
          className="px-4 py-2 rounded-full text-gray-500 bg-gray-300 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease hover:ring hover:ring-indigo-400"
          onClick={(e) => tagHandler(e.currentTarget.innerHTML)}
        >
          Chirag Goel
        </span>
      </div>{" "}
      <div className="flex flex-wrap justify-start space-x-2  p-1">
        <span
          className="px-4 py-2 rounded-full text-gray-500 bg-gray-300 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease hover:ring hover:ring-indigo-400"
          onClick={(e) => tagHandler(e.currentTarget.innerHTML)}
        >
          System Design
        </span>
      </div>{" "}
      <div className="flex flex-wrap justify-start space-x-2  p-1">
        <span
          className="px-4 py-2 rounded-full text-gray-500 bg-gray-300 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease hover:ring hover:ring-indigo-400"
          onClick={(e) => tagHandler(e.currentTarget.innerHTML)}
        >
          React Projects
        </span>
      </div>{" "}
      <div className="flex flex-wrap justify-start space-x-2  p-1">
        <span
          className="px-4 py-2 rounded-full text-gray-500 bg-gray-300 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease hover:ring hover:ring-indigo-400"
          onClick={(e) => tagHandler(e.currentTarget.innerHTML)}
        >
          React js
        </span>
      </div>{" "}
      <div className="flex flex-wrap justify-start space-x-2  p-1">
        <span
          className="px-4 py-2 rounded-full text-gray-500 bg-gray-300 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease hover:ring hover:ring-indigo-400"
          onClick={(e) => tagHandler(e.currentTarget.innerHTML)}
        >
          React Hooks
        </span>
      </div>{" "}
      <div className="flex flex-wrap justify-start space-x-2  p-1">
        <span
          className="px-4 py-2 rounded-full text-gray-500 bg-gray-300 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease hover:ring hover:ring-indigo-400"
          onClick={(e) => tagHandler(e.currentTarget.innerHTML)}
        >
          Namaste JavaScript
        </span>
      </div>{" "}
      <div className="flex flex-wrap justify-start space-x-2  p-1">
        <span
          className="px-4 py-2 rounded-full text-gray-500 bg-gray-300 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease hover:ring hover:ring-indigo-400"
          onClick={(e) => tagHandler(e.currentTarget.innerHTML)}
        >
          Brad Traversy
        </span>
      </div>{" "}
    </div>
  );
};

export default TagList;
