import Search from "./Search";
import { BsFillMoonStarsFill, BsFillCloudSunFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../app/features/appSlice";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const { handleThemeSwitch, theme } = useContext(ThemeContext);

  const user = useSelector((store) => store.user.user);

  const dispatch = useDispatch();

  const toggleMenuFn = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="z-30 header sticky top-0 bg-white shadow-md dark:shadow-lg flex items-center justify-between  py-1 dark:bg-gray-800 dark:text-gray-100">
        <span className="w-3/12 underline flex items-center">
          <RxHamburgerMenu
            size={25}
            className="mx-2 cursor-pointer dark:text-white"
            onClick={toggleMenuFn}
          />
          <Link to="/home" className="flex items-center">
            <IoLogoJavascript size={40} className="text-indigo-600" />
          </Link>
        </span>

        <Search />
        <div className="flex justify-center items-center">
          <Link to="/profile">
            <div className="relative inline-flex   ring-4 ring-indigo-500 items-center justify-center w-10 h-10 overflow-hidden bg-indigo-300 rounded-full mr-1 dark:bg-indigo-600">
              <span className="font-medium text-2xl capitalize ">
                {user.displayName.substring(0, 1)}
              </span>
            </div>
          </Link>

          <div className="pr-8 cursor-pointer">
            {theme === "light" ? (
              <BsFillMoonStarsFill
                size={30}
                className="ml-2 mr-[-25px] ring-4 ring-slate-400  text-slate-700  rounded-full p-1 w-10 h-10 shadow-lg shadow-gray-400"
                onClick={handleThemeSwitch}
              />
            ) : (
              <BsFillCloudSunFill
                size={30}
                className="ml-2 mr-[-25px] text-yellow-400
               ring-4 ring-orange-300 rounded-full p-1 w-10 h-10 shadow-lg shadow-slate-600
                "
                onClick={handleThemeSwitch}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
