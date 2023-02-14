import { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { HiChevronUpDown } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { addToChat } from "../../../app/chatSlice";
import { randomMsgs } from "./liveHelper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const liveChatHandler = (e) => {
    e.preventDefault();

    dispatch(
      addToChat({
        message: text,
        pfp: "https://i.redd.it/0s865ngkc4t81.jpg",
      })
    );

    setText("");
  };

  const chat = useSelector((store) => store.chat.chat);
  console.log("chat :", chat);

  useEffect(() => {
    const interval = setInterval(() => {
      // for pfp
      const seed = Math.round(Math.random() * 100);
      const pfpURL = `https://api.dicebear.com/5.x/micah/svg?seed=${seed}`;

      dispatch(
        addToChat({
          message: randomMsgs(40),
          pfp: pfpURL,
        })
      );
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div class="flex-1   h-[600px] justify-between flex flex-col  border ml-2  border-indigo-400  rounded-lg">
        <div class="flex px-3 sm:items-center justify-between py-2  border-b-2  border-gray-200 dark:border-gray-600">
          Live Chat
          <button class="inline-flex justify-center p-2 text-indigo-600 rounded-full cursor-pointer hover:bg-indigo-100 dark:text-indigo-500 dark:hover:bg-gray-600">
            <HiChevronUpDown size={20} />
          </button>
        </div>
        <div
          id="messages"
          class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-indigo scrollbar-thumb-rounded scrollbar-track-indigo-lighter scrollbar-w-2 scrolling-touch"
        >
          {chat.map((msg) => (
            <div class="chat-message">
              <div class="flex items-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 dark:text-gray-300 dark:bg-gray-700 ">
                      {msg.message}
                    </span>
                  </div>
                </div>
                <img
                  src={msg.pfp}
                  alt="My profile"
                  class="w-10 h-10 rounded-full ring ring-indigo-300 order-1"
                />
              </div>
            </div>
          ))}

          <form onSubmit={() => liveChatHandler}>
            <div class="flex items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div>
                <img
                  class="w-10 h-10 rounded-full m-1 mr-6 flex ring ring-indigo-300 order-1"
                  src="https://i.redd.it/0s865ngkc4t81.jpg"
                  alt="My profile"
                />
              </div>
              <input
                id="chat"
                rows="1"
                value={text}
                onChange={(e) => setText(e.target.value)}
                class="block ml-0 mx-2 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                placeholder="Chat publicly {your name}..."
              />
              <button
                onClick={liveChatHandler}
                type="submit"
                class="inline-flex justify-center p-2 text-indigo-600 rounded-full cursor-pointer hover:bg-indigo-100 dark:text-indigo-500 dark:hover:bg-gray-600"
              >
                <AiOutlineSend size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
