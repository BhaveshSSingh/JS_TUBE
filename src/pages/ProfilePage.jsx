import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logoutReducer } from "../app/features/userSlice";
import { auth } from "../firebase";

const ProfilePage = () => {
  const user = useSelector((store) => store.user.user);
  const like = useSelector((store) => store.like.likedPage);
  const subs = useSelector((store) => store.sub.sub);

  const dispatch = useDispatch();

  const logoutFn = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logoutReducer());
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center pl-12  ">
        <div className="relative max-w-[350px]  min-w-0 break-words dark:bg-gray-700 dark:text-gray-100 bg-white w-full mb-6 shadow-lg rounded-xl mt-16  ">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
                <div className="w-40 h-40  ring-4 ring-indigo-400 p-3 object-fill rounded-full text-gray-100 bg-indigo-500 flex  justify-center mr-4">
                  <div className="capitalize text-9xl">
                    {user.displayName.substring(0, 1)}
                  </div>
                </div>
              </div>
              <div className="w-full text-center mt-10 dark:text-gray-100">
                <div className="flex justify-center lg:pt-4 pt-2 pb-0">
                  <div className="p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700  dark:text-gray-100">
                      {like.length}
                    </span>
                    <span className="text-sm text-slate-400  dark:text-gray-100">
                      Liked Videos
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700  dark:text-gray-100">
                      {subs.length}
                    </span>
                    <span className="text-sm text-slate-400  dark:text-gray-100">
                      Subscriptions
                    </span>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="text-center mt-2">
              <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1 dark:text-gray-100">
                Name: {user.displayName}
              </h3>
              <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase dark:text-gray-100">
                <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75" />
                Email: {user.email}
              </div>
            </div>
            <div className="mt-6 py-6 border-t border-slate-200 text-center dark:text-gray-100">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                  <button
                    onClick={logoutFn}
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  "
                  >
                    Logout <BiLogOut className="inline-block" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
