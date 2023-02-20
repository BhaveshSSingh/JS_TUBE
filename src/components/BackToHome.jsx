import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <div className="border   m-2 border-indigo-800 p-2 rounded-lg">
      <Link to="/home">
        <button
          type="button"
          className="text-indigo-700 border border-indigo-700 hover:bg-indigo-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-indigo-500 dark:text-indigo-500 dark:hover:text-white dark:focus:ring-indigo-800"
        >
          <BiArrowBack />
        </button>
      </Link>
    </div>
  );
};

export default BackToHome;
