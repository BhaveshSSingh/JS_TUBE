import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchLetter } from "../../app/features/searchSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchLetter(query));
    navigate("/search");
    setQuery("");
  };

  return (
    <div className="ml-[-10px] w-[30%] ">
      <div className="my-2">
        <form className="flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-indigo-200 border border-indigo-300 dark:text-gray-900 text-sm rounded-lg focus:ring indigo-500 focus:border-indigo-500 block w-full pl-3 p-2.5  dark:bg-gray-400 dark:border-indigo-600 dark:placeholder-gray-800 dark:white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              placeholder="Search"
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            onClick={searchHandler}
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-indigo-700 rounded-lg border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
