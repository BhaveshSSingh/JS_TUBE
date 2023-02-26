import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import Modal from "../../../components/Modal";
import { db } from "../../../firebase";

const CommentChange = ({ comment, id, user }) => {
  const [showModal, setShowModal] = useState(false);
  const [editcomment, setEditcomment] = useState(comment.data().Comment);

  const deletecomment = async (comment) => {
    await deleteDoc(
      doc(db, `video${id}`, "CommentSection", "comment", comment.id)
    );
    toast("comment Deleted 🗑️");
  };

  const updatecomment = async () => {
    await updateDoc(
      doc(db, `video${id}`, "CommentSection", "comment", comment.id),
      {
        Comment: editcomment,
      }
    );
    toast("comment Edited 💬");
    setShowModal(false);
  };

  return (
    <>
      <div>
        {user.userID === comment.data().userId ? (
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
              onClick={() => deletecomment(comment)}
            >
              <AiFillDelete />
            </button>
          </>
        ) : (
          ""
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="p-2 ">
          <div className="flex justify-between	 items-center border-b border-indigo-700">
            Edit comment
            <div className="icon group">
              <MdClose size={28} onClick={() => setShowModal(false)} />
            </div>
          </div>
          <div className="pt-4 flex justify-between">
            <div className="pt-4">
              <input
                className="bg-transparent outline-none text-lg 
             placeholder-indigo-500 w-full"
                type="text"
                autoFocus
                value={editcomment}
                onChange={(e) => setEditcomment(e.target.value)}
              />
            </div>
            <button
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 h-full "
              disabled={!editcomment.trim()}
              onClick={updatecomment}
            >
              Comment
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommentChange;
