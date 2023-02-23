import { Link } from "react-router-dom";
import VideoContainer from "./home/VideoContainer";
import BackToHome from "../components/BackToHome";
import { useSelector } from "react-redux";

const LikePage = () => {
  const likedList = useSelector((store) => store.like.likedPage);
  return (
    <div className="min-h-screen">
      <BackToHome />
      <VideoContainer video={likedList} />
      Page Banao
    </div>
  );
};

export default LikePage;
