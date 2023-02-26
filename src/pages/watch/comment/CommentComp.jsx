import { useEffect, useState } from "react";
import { BsChatLeftDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Modal from "../../../components/Modal";

import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { db } from "../../../firebase";
import CommentChange from "./CommentChange";

const CommentComp = ({ id }) => {
  const [allComments, setAllComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [writeComment, setWriteComment] = useState("");

  const user = useSelector((store) => store.user.user);

  const addComment = async () => {
    await addDoc(collection(db, `video${id}`, "CommentSection", "comment"), {
      name: user.displayName,
      userId: user.userID,
      Comment: writeComment,
      time: serverTimestamp(),
    });
    toast("Comment sent 💬");
    setWriteComment("");
    setShowModal(false);
  };

  const q = query(collection(db, `video${id}`));

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, `video${id}`, "CommentSection", "comment"),
          orderBy("time", "desc")
        ),
        (snapshot) => setAllComments(snapshot.docs)
      ),
    [db]
  );

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
                  value={writeComment}
                  onChange={(e) => setWriteComment(e.target.value)}
                />
              </div>
              <button
                onClick={() => addComment()}
                type="button"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 h-full"
              >
                Post Comment
              </button>
            </div>
          </div>
        </Modal>
        {allComments.length === 0 ? (
          <h1>Leave a Comment</h1>
        ) : (
          allComments.map((comment) => (
            <div
              className="w-full flex justify-start items-start  p-8 "
              key={comment}
            >
              <div className="mr-1 flex justify-between  items-center flex-row ">
                <div className="w-10 h-10  ring-4 ring-indigo-400 p-1 object-fill rounded-full  bg-indigo-500 flex  justify-center mx-2">
                  <span className="text-2xl capitalize text-gray-300">
                    {" "}
                    {comment?.data()?.name?.substring(0, 1)}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex  items-center ">
                  <p className="text-base font-medium leading-none mr-2 ">
                    {comment?.data().name}
                  </p>
                  <p className="text-sm leading-none underline ">
                    {new Date(comment.data().time?.seconds * 1000)
                      .toUTCString()
                      .substring(0, 16)}
                  </p>
                </div>
                <p className="mt-3 text-base leading-normal  w-full md:w-9/12  xl:w-5/6 pb-2">
                  {comment?.data()?.Comment}
                </p>

                <CommentChange
                  comment={comment}
                  writeComment={writeComment}
                  id={id}
                  user={user}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentComp;
