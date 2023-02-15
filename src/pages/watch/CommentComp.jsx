import { useState } from "react";
import { BsChatLeftDots, BsPencil } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Modal from "../../components/Modal";

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
        <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-8 truncate">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex flex-row justify-between items-start">
              <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">
                {/* {review?.data()?.review.split(" ").slice(0, 1).join(" ")} */}
              </p>
            </div>
          </div>

          <div className={"block"}>
            <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12  xl:w-5/6 ">
              {/* {review?.data()?.review} */}
            </p>

            <div className="mt-6 flex justify-between  items-center flex-row space-x-2.5">
              <div className="w-10 h-10  ring-4 ring-slate-400 p-1 object-fill rounded-full text-gray-100 bg-gray-500 flex  justify-center mx-2">
                <div className="text-2xl capitalize">
                  {/* {review?.data()?.name?.substring(0, 1)} */}
                </div>
              </div>
              <div className="flex flex-col justify-start items-start space-y-2">
                <p className="text-base font-medium leading-none text-gray-800">
                  {/* {review.data().name} */}
                </p>
                <p className="text-sm leading-none text-gray-600">
                  {/* {new Date(review.data().time?.seconds * 1000)
                        .toUTCString()
                        .substring(0, 17)} */}
                </p>
                <div>
                  {/* <ReviewStarRating rate={review?.data()?.star} /> */}
                </div>
              </div>

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
    </div>
  );
};

export default CommentComp;
