import { useSelector } from "react-redux";
import BackToHome from "../components/BackToHome";

const Subscription = () => {
  const subs = useSelector((store) => store.sub.sub);

  return (
    <div className=" min-h-screen w-screen m-auto ">
      <BackToHome />
      {subs.map((sub) => (
        <div className="flex p-4 items-center  border-b  border-b-gray-400 dark:border-b-gray-700">
          <div
            className="w-32 h-32  ring-4 ring-indigo-400 p-1 object-fill rounded-full text-gray-100 bg-indigo-500 flex  justify-center mr-4 
       
        "
          >
            <img
              className="w-32 h-32"
              src={sub.channelAvatar}
              alt="My profile"
            />
          </div>
          <div className="pl-20">
            <h1 className="text-3xl text-center">{sub.channelName}</h1>
            <h1 className="text-xl font-thin text-center">1M Subscribers</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subscription;
