import { useState } from "react";
import { BsChatLeftDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Modal from "../../components/Modal";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

const CommentComp = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="py-12  px-4 md:px-6  2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-start items-start w-full space-y-8">
        <div className="flex w-full justify-between">
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 pl-2 dark:text-gray-300">
            Comments
          </p>
          <button
            type="button"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            onClick={() => setShowModal(true)}
          >
            <BsChatLeftDots size={15} className="mr-1" /> Leave a Comment
          </button>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <div className="p-2 ">
            <div className="flex justify-between	 items-center border-b border-gray-700">
              Comment
              <div className="icon group cursor-pointer">
                <IoMdClose size={28} onClick={() => setShowModal(false)} />
              </div>
            </div>
            <div className="pt-4 flex justify-between">
              <div className="pt-4">
                <input
                  className="bg-transparent outline-none text-lg 
             placeholder-gray-500 w-full"
                  type="text"
                  autoFocus
                  // value={writeReview}
                  // onChange={(e) => setWriteReview(e.target.value)}
                />
              </div>
              <button
                // onClick={() => addReview()}
                type="button"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 h-full"
              >
                Post Comment
              </button>
            </div>
          </div>
        </Modal>
        {/* {allReviews.length === 0 ? (
          <h1>No reviews....... YET! write a review</h1>
        ) : (
          allReviews.map((review) => ( */}

        <div className="w-full flex justify-start items-start  p-8 ">
          <div className="mr-1 flex justify-between  items-center flex-row ">
            <div className="w-10 h-10  ring-4 ring-indigo-400 p-1 object-fill rounded-full  bg-indigo-500 flex  justify-center mx-2">
              <span className="text-2xl capitalize text-gray-300">B</span>
            </div>
          </div>
          <div>
            <div className="flex  items-center ">
              <p className="text-base font-medium leading-none mr-2 ">
                Bhavesh
              </p>
              <p className="text-sm leading-none underline ">3Months ago </p>
            </div>
            <p className="mt-3 text-base leading-normal  w-full md:w-9/12  xl:w-5/6 pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              officiis, fugiat in exercitationem consequuntur ullam.
            </p>
            <>
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
              >
                <BsFillPencilFill />
              </button>{" "}
              <button
                type="button"
                className="text-red-700 ml-3 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
                // onClick={() => deleteReview(review)}
              >
                <AiFillDelete />
              </button>
              <button
                type="button"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 ml-3"
                onClick={() => setShowModal(true)}
              >
                <BsChatLeftDots size={15} className="mx-1" /> Reply
              </button>
            </>

            {/* <ReviewChange
                    review={review}
                    writeReview={writeReview}
                    prodId={prodId}
                    user={user}
                  /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentComp;
