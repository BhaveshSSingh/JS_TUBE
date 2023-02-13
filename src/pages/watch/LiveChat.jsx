import { AiOutlineSend } from "react-icons/ai";
import { HiChevronUpDown } from "react-icons/hi2";

const LiveChat = () => {
  return (
    <>
      <div class="flex-1   h-[600px] justify-between flex flex-col  border border-indigo-400 m-2 rounded-lg">
        <div class="flex px-3 sm:items-center justify-between py-2  border-b-2  border-gray-200 dark:border-gray-600">
          Live Chat
          <button
            type="submit"
            class="inline-flex justify-center p-2 text-indigo-600 rounded-full cursor-pointer hover:bg-indigo-100 dark:text-indigo-500 dark:hover:bg-gray-600"
          >
            <HiChevronUpDown size={20} />
          </button>
        </div>
        <div
          id="messages"
          class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-indigo scrollbar-thumb-rounded scrollbar-track-indigo-lighter scrollbar-w-2 scrolling-touch"
        >
          <div class="chat-message">
            <div class="flex items-end">
              <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 dark:text-gray-300 dark:bg-gray-700 ">
                    using docker
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>

          <form>
            <div class="flex items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="w-10 h-10  ring-2 ring-indigo-400 p-1 object-fill rounded-full text-gray-100 bg-indigo-500 flex  justify-center mr-4 ">
                {/* <div className="text-2xl">{user?.substring(0, 1)}</div> */}
              </div>

              <input
                id="chat"
                rows="1"
                class="block ml-0 mx-2 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                placeholder="Chat publicly {your name}..."
              ></input>
              <button
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
