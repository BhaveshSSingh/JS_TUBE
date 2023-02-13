import {
  AiOutlineHome,
  AiFillLike,
  AiOutlineVideoCamera,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { MdSubscriptions, MdHomeFilled } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
const Panel = () => {
  const openMenu = useSelector((store) => store.app.openMenu);

  return (
    <>
      {openMenu ? (
        <div className=" bg-white h-[89vh] max-w-min-1/3 border border-b-0   shadow-lg dark:bg-gray-900 dark:text-white dark:border-gray-700">
          <ul className="pt-3 m-2">
            <Link to="home">
              <li className="px-4 flex  justify-start items-center py-2 hover:bg-indigo-700 hover:text-white cursor-pointer                   rounded-xl">
                <div className="px-2">
                  <MdHomeFilled className="left-0" />
                </div>
                Home
              </li>
            </Link>
            <Link to="subscriptions">
              <li className="flex items-center px-4 py-2 hover:bg-indigo-700 hover:text-white cursor-pointer rounded-xl justify-start">
                <div className="px-2">
                  <MdSubscriptions />
                </div>
                Subscriptions
              </li>
            </Link>
            <Link to="liked">
              <li className="flex items-center px-4 py-2 hover:bg-indigo-700 hover:text-white cursor-pointer rounded-xl justify-start">
                <div className="px-2">
                  <AiFillLike />
                </div>
                Liked
              </li>
            </Link>
            <Link to="profile">
              <li className="flex items-center px-4 py-2 hover:bg-indigo-700 hover:text-white cursor-pointer rounded-xl justify-start">
                <div className="px-2">
                  <IoMdPerson />
                </div>
                Profile
              </li>
            </Link>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Panel;
