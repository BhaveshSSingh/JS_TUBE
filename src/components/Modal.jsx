import { useRef } from "react";

function Modal({ children, showModal, setShowModal }) {
  const modalRef = useRef();

  function closeModal(e) {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  }

  return (
    showModal && (
      <div
        className="fixed top-0 left-0 w-screen h-screen  bg-gray-800/60 text-white p-2 z-20"
        onClick={closeModal}
        ref={modalRef}
      >
        <div className="z-10 absolute top-1/4 left-1/2 -translate-x-2/4 -translate-y-1/4 bg-slate-900 rounded-xl w-10/12 h-max p-2 xl:w-[700px] break-all">
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
